from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import re
import csv
from concurrent.futures import ThreadPoolExecutor
from typing import List, Tuple, Dict
from fastapi.middleware.cors import CORSMiddleware

# Initialize FastAPI app
app = FastAPI(title="MedQuadAD + Medicine Chatbot")

origins = [
    "http://localhost:5173",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],  # Allows all HTTP methods
    allow_headers=["*"],  # Allows all headers
)

# Diabetes-related medicines from medicine_details.csv
DIABETES_MEDS = [
    "Metformin", "Glimepiride", "Zucator M 500 Tablet", "Zoryl MP 1 Tablet ER", "Zeptin 20mg Tablet",
    "Ziglim 1 Tablet", "Zoryl-MF 2 Tablet PR", "Zilenta-M Tablet ER", "Zeformin XR 60 Tablet"
]

# Load and chunk medQuadAD.csv
def load_and_chunk_medquad(file_path: str, chunk_size: int = 50) -> List[Dict[str, str]]:
    qa_dict = {}
    with open(file_path, "r", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for row in reader:
            qa_dict[row["question"].lower()] = row["answer"].strip()
    qa_list = list(qa_dict.items())
    chunks = [qa_list[i:i + chunk_size] for i in range(0, len(qa_list), chunk_size)]
    return [dict(chunk) for chunk in chunks]

# Load and chunk medicine_details.csv
def load_and_chunk_medicine(file_path: str, chunk_size: int = 50) -> List[Dict[str, str]]:
    qa_dict = {}
    with open(file_path, "r", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for row in reader:
            med_name = row["Medicine Name"].lower()
            qa_dict[f"what is {med_name} used for"] = f"{row['Medicine Name']} is used for {row['Uses']}."
            qa_dict[f"what are the side effects of {med_name}"] = f"Side effects of {row['Medicine Name']} include {row['Side_effects']}."
            qa_dict[f"what is in {med_name}"] = f"{row['Medicine Name']} contains {row['Composition']}."
            qa_dict[f"who makes {med_name}"] = f"{row['Medicine Name']} is manufactured by {row['Manufacturer']}."
            qa_dict[f"what is {med_name}"] = (
                f"{row['Medicine Name']} is a medicine containing {row['Composition']}, "
                f"used for {row['Uses']}, with side effects including {row['Side_effects']}."
            )
    qa_list = list(qa_dict.items())
    chunks = [qa_list[i:i + chunk_size] for i in range(0, len(qa_list), chunk_size)]
    return [dict(chunk) for chunk in chunks]

# Load both datasets globally
CHUNKED_MEDQUAD = load_and_chunk_medquad("../data/medQuadAD.csv", chunk_size=50)
CHUNKED_MEDICINE = load_and_chunk_medicine("../data/medicine_details.csv", chunk_size=50)
CHUNKED_DATA = CHUNKED_MEDQUAD + CHUNKED_MEDICINE
print(f"Loaded {len(CHUNKED_MEDQUAD)} chunks from medQuadAD.csv")
print(f"Loaded {len(CHUNKED_MEDICINE)} chunks from medicine_details.csv")
print(f"Total chunks: {len(CHUNKED_DATA)}")

# Define request body structure
class QueryRequest(BaseModel):
    query: str

# Generate fallback response
def generate_fallback_response(query: str) -> str:
    query_lower = query.lower()
    if "diabetes" in query_lower and "treatment" in query_lower:
        diabetes_meds = [med for med in DIABETES_MEDS if any(med.lower() in chunk for chunk in CHUNKED_MEDICINE)]
        return (
            f"Treatments for diabetes often include medicines like {', '.join(diabetes_meds)}. "
            f"Ask 'What is [medicine] used for?' for details. Consult a doctor for a full treatment plan."
        )
    return "Sorry, I don’t have specific information for that. Consult a doctor for advice."

# Search a single chunk for exact match
def search_chunk_exact(chunk: Dict[str, str], query_lower: str) -> str | None:
    return chunk.get(query_lower)

# Search a single chunk for related match
def search_chunk_related(chunk: Dict[str, str], query_words: set, stop_words: set) -> Tuple[str | None, float]:
    best_match = None
    best_score = 0
    for q, a in chunk.items():
        q_words = set(re.split(r'\W+', q)) - stop_words
        overlap = query_words.intersection(q_words)
        if overlap and "treatment" in q_words:  # Must relate to "treatment"
            score = len(overlap) / max(len(query_words), 1)
            if score >= 0.75 and score > best_score:  # Require 75% overlap
                best_score = score
                best_match = a
    return best_match, best_score

# Parallel retrieval logic
def retrieve_answer(query: str) -> str:
    query_lower = query.lower().strip()
    stop_words = {"what", "does", "the", "is", "are", "of", "for", "to", "how"}
    
    # Step 1: Exact match in parallel
    with ThreadPoolExecutor() as executor:
        futures = [executor.submit(search_chunk_exact, chunk, query_lower) for chunk in CHUNKED_DATA]
        results = [f.result() for f in futures]
    
    for result in results:
        if result:
            print(f"Exact match found: {query_lower}")
            return result
    
    # Step 2: Break query into significant words
    query_words = set(word for word in re.split(r'\W+', query_lower) if word and word not in stop_words)
    print(f"Query words: {query_words}")
    
    if not query_words:
        print("No significant words found.")
        return "Sorry, I don’t have exact information for that."
    
    # Step 3: Related match in parallel
    with ThreadPoolExecutor() as executor:
        futures = [executor.submit(search_chunk_related, chunk, query_words, stop_words) for chunk in CHUNKED_DATA]
        results = [f.result() for f in futures]
    
    # Find best match across chunks
    best_match = None
    best_score = 0
    for match, score in results:
        if score > best_score:
            best_score = score
            best_match = match
            print(f"Match found with score {score}")
    
    if best_match:
        print(f"Returning best match: {best_match}")
        return best_match
    
    # Step 4: Fallback response
    print("No match found, generating response...")
    generated_answer = generate_fallback_response(query)
    print(f"Generated answer: {generated_answer}")
    return generated_answer

# API endpoint for chatbot
@app.post("/chat", response_model=dict)
async def chat(request: QueryRequest):
    if not request.query:
        raise HTTPException(status_code=400, detail="Query cannot be empty")
    response = retrieve_answer(request.query)
    return {"query": request.query, "response": response}

# Health check
@app.get("/health")
async def health_check():
    return {"status": "Chatbot is running"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)