import React from "react";
import "./Respiratory.css";
import respiratoryImage from "../assets/respiratory_system_image.png"; // Replace with your image

const RespiratoryCarePage = () => {
  return (
    <div className="respiratory-care-container">
      <h1>Respiratory Care: Breathing Easy for Better Health</h1>

      <div className="content-wrapper">
        <img src={respiratoryImage} alt="Respiratory System" className="respiratory-image" />
        <div className="text-content">
          <h2>Understanding Your Respiratory System</h2>
          <p>
            The respiratory system, including the lungs, airways, and diaphragm, is responsible for 
            bringing oxygen into your body and removing carbon dioxide. It’s vital for every cell’s 
            survival and overall energy.
          </p>
          <p>
            Poor air quality, smoking, or infections can harm respiratory health, leading to 
            conditions that affect breathing and quality of life. Proper care is essential.
          </p>
        </div>
      </div>

      <div className="contents-section">
        <h3>Contents</h3>
        <ul>
          <li>🔹 How the Respiratory System Works</li>
          <li>🔹 Common Respiratory Conditions</li>
          <li>🔹 Symptoms of Respiratory Issues</li>
          <li>🔹 Respiratory Care Tips</li>
          <li>🔹 Medications and Treatments</li>
          <li>🔹 Preventive Measures</li>
        </ul>
      </div>

      <section>
        <h2>How the Respiratory System Works</h2>
        <p>
          The respiratory system supports life through these key functions:
        </p>
        <ul>
          <li><strong>Oxygen Intake:</strong> Lungs filter air and transfer oxygen to the blood.</li>
          <li><strong>CO2 Removal:</strong> Expels carbon dioxide during exhalation.</li>
          <li><strong>Air Filtration:</strong> Nose and airways trap dust and pathogens.</li>
          <li><strong>Temperature Regulation:</strong> Warms or cools air before it reaches the lungs.</li>
          <li><strong>Voice Production:</strong> Larynx aids in speech.</li>
        </ul>
        <p>
          Learn more at{" "}
          <a href="https://www.lung.org/lung-health-diseases" className="respiratory-link">
            American Lung Association
          </a>.
        </p>
      </section>

      <section>
        <h2>Common Respiratory Conditions</h2>

        <div className="condition">
          <h4>
            <a
              href="https://www.mayoclinic.org/diseases-conditions/asthma/symptoms-causes/syc-20369653"
              target="_blank"
              rel="noopener noreferrer"
              className="respiratory-link"
            >
              1. Asthma
            </a>
          </h4>
          <p><strong>Cause:</strong> Inflamed airways triggered by allergens, exercise, or stress.</p>
          <p><strong>Symptoms:</strong> Wheezing, shortness of breath, coughing.</p>
          <p><strong>Treatment:</strong> Inhalers (e.g., albuterol), corticosteroids.</p>
        </div>

        <div className="condition">
          <h4>
            <a
              href="https://www.mayoclinic.org/diseases-conditions/copd/symptoms-causes/syc-20353679"
              target="_blank"
              rel="noopener noreferrer"
              className="respiratory-link"
            >
              2. Chronic Obstructive Pulmonary Disease (COPD)
            </a>
          </h4>
          <p><strong>Cause:</strong> Long-term smoking or exposure to lung irritants.</p>
          <p><strong>Symptoms:</strong> Chronic cough, breathlessness, mucus production.</p>
          <p><strong>Treatment:</strong> Bronchodilators, oxygen therapy.</p>
        </div>

        <div className="condition">
          <h4>
            <a
              href="https://www.mayoclinic.org/diseases-conditions/pneumonia/symptoms-causes/syc-20354204"
              target="_blank"
              rel="noopener noreferrer"
              className="respiratory-link"
            >
              3. Pneumonia
            </a>
          </h4>
          <p><strong>Cause:</strong> Bacterial, viral, or fungal lung infection.</p>
          <p><strong>Symptoms:</strong> Fever, chills, chest pain, difficulty breathing.</p>
          <p><strong>Treatment:</strong> Antibiotics (e.g., amoxicillin), antivirals.</p>
        </div>

        <div className="condition">
          <h4>
            <a
              href="https://www.mayoclinic.org/diseases-conditions/lung-cancer/symptoms-causes/syc-20374113"
              target="_blank"
              rel="noopener noreferrer"
              className="respiratory-link"
            >
              4. Lung Cancer
            </a>
          </h4>
          <p><strong>Cause:</strong> Smoking, radon, or genetic factors.</p>
          <p><strong>Symptoms:</strong> Persistent cough, blood in sputum, weight loss.</p>
          <p><strong>Treatment:</strong> Chemotherapy, surgery, radiation.</p>
        </div>
      </section>

      <section>
        <h2>Symptoms of Respiratory Issues</h2>
        <p>
          Seek medical help if you notice these signs:
        </p>
        <ul>
          <li>🌬️ Shortness of breath or wheezing.</li>
          <li>🤧 Persistent cough or mucus.</li>
          <li>🔥 Chest pain or tightness.</li>
          <li>😓 Fatigue from lack of oxygen.</li>
          <li>💙 Bluish lips or fingertips (cyanosis).</li>
        </ul>
      </section>

      <section>
        <h2>Respiratory Care Tips</h2>
        <p>
          Keep your lungs healthy with these habits:
        </p>
        <ul>
          <li>🚭 Quit smoking – Reduces lung damage.</li>
          <li>💨 Breathe clean air – Use air purifiers indoors.</li>
          <li>🏃 Exercise – Improves lung capacity.</li>
          <li>💧 Stay hydrated – Thins mucus for easier breathing.</li>
          <li>🩺 Get regular check-ups – Detect issues early.</li>
        </ul>
      </section>

      <section>
        <h2>Medications and Treatments</h2>
        <p>
          Common options for respiratory relief:
        </p>
        <ul>
          <li>💊 <strong>Inhalers:</strong> Quick relief for asthma/COPD (e.g., salbutamol).</li>
          <li>💉 <strong>Antibiotics:</strong> Treat bacterial infections like pneumonia.</li>
          <li>🌿 <strong>Steroids:</strong> Reduce inflammation (e.g., prednisone).</li>
          <li>🌀 <strong>Oxygen Therapy:</strong> Supports severe cases.</li>
          <li>🛌 <strong>Pulmonary Rehab:</strong> Exercises for lung strength.</li>
        </ul>
      </section>

      <section>
        <h2>Preventive Measures</h2>
        <p>
          Protect your respiratory health with these steps:
        </p>
        <ul>
          <li>💉 Vaccinations – Flu and pneumonia shots.</li>
          <li>😷 Wear masks – In polluted or crowded areas.</li>
          <li>🧼 Wash hands – Prevents respiratory infections.</li>
          <li>🚫 Avoid pollutants – Stay away from smoke and chemicals.</li>
          <li>🍎 Eat well – Antioxidants support lung health.</li>
        </ul>
      </section>

      <section>
        <h2>Learn More About Respiratory Health</h2>
        <p>
          Explore these resources:
        </p>
        <ul>
          <li>
            🏥{" "}
            <a
              href="https://www.lung.org/lung-health-diseases"
              className="respiratory-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              American Lung Association
            </a>
          </li>
          <li>
            🏥{" "}
            <a
              href="https://www.who.int/health-topics/chronic-respiratory-diseases"
              className="respiratory-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              World Health Organization (WHO)
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default RespiratoryCarePage;