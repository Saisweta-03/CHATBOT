from fastapi import FastAPI, HTTPException, Depends
from pydantic import BaseModel
from pymongo import MongoClient
from passlib.context import CryptContext
from typing import Optional
import jwt
from datetime import datetime, timedelta
from fastapi.middleware.cors import CORSMiddleware

# Initialize FastAPI app
app = FastAPI(title="Authentication API")

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

# MongoDB connection (Using MongoDB Atlas)
client = MongoClient("mongodb+srv://swetasai003:OHNc32cZVHz8dMKN@cluster0.eyvwkix.mongodb.net/?retryWrites=true&w=majority")
db = client["chatbot"]
users_collection = db["users"]

# Password hashing
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# JWT settings
SECRET_KEY = "your-secret-key"  # Replace with a strong secret key
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

# Pydantic models for request bodies
class UserSignup(BaseModel):
    name: str  # Added name field
    address: str  # Added address field
    phone: str  # Added phone field
    username: str
    email: str
    password: str

class UserSignin(BaseModel):
    email: str
    password: str

# Helper functions
def verify_password(plain_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password: str) -> str:
    return pwd_context.hash(password)

def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

# Signup API
@app.post("/signup", response_model=dict)
async def signup(user: UserSignup):
    # Check if user already exists
    if users_collection.find_one({"email": user.email}):
        raise HTTPException(status_code=400, detail="Email already registered")
    
    # Hash password and store user
    hashed_password = get_password_hash(user.password)
    user_dict = {
        "name": user.name,  # Store name
        "address": user.address,  # Store address
        "phone": user.phone,  # Store phone
        "username": user.username,
        "email": user.email,
        "hashed_password": hashed_password
    }
    result = users_collection.insert_one(user_dict)
    
    # Generate JWT token
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.email}, expires_delta=access_token_expires
    )
    
    return {"message": "User created successfully", "access_token": access_token, "token_type": "bearer"}

# Signin API
@app.post("/signin", response_model=dict)
async def signin(user: UserSignin):
    # Find user by email
    db_user = users_collection.find_one({"email": user.email})
    if not db_user or not verify_password(user.password, db_user["hashed_password"]):
        raise HTTPException(status_code=401, detail="Invalid email or password")
    
    # Generate JWT token
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.email}, expires_delta=access_token_expires
    )
    
    return {"access_token": access_token, "token_type": "bearer"}

# Health check
@app.get("/health")
async def health_check():
    return {"status": "Auth API is running"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)