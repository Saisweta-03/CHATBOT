import React from "react"; 
import "./StomachCare.css"; 
import stomachImage from "../assets/stomach_health.png"; // Replace with your image path

const StomachCare = () => {
  return (
    <div className="stomach-care-container">
      <h1>Stomach Care: Your Guide to Digestive Health</h1>

      <div className="content-wrapper">
        <img src={stomachImage} alt="Healthy Stomach" className="stomach-image" />
        <div className="text-content">
          <h2>Understanding Your Stomach</h2>
          <p>
            The stomach is a muscular organ in the upper abdomen that plays a key role in digestion. It breaks down food using 
            acids and enzymes, preparing nutrients for absorption in the intestines. A healthy stomach supports overall energy, 
            immunity, and well-being.
          </p>
          <p>
            Poor diet, stress, or infections can disrupt stomach function, leading to discomfort or chronic conditions. Proper care 
            is essential for digestive harmony.
          </p>
        </div>
      </div>

      <div className="contents-section">
        <h3>Contents</h3>
        <ul>
          <li>🔹 Functions of the Stomach</li>
          <li>🔹 Common Stomach Issues</li>
          <li>🔹 Symptoms of Problems</li>
          <li>🔹 Stomach Care Tips</li>
          <li>🔹 Best Foods for Digestion</li>
          <li>🔹 Preventive Measures</li>
        </ul>
      </div>

      <section>
        <h2>Functions of the Stomach</h2>
        <p>The stomach performs vital digestive tasks:</p>
        <ul>
          <li><strong>Food Breakdown:</strong> Uses acid and enzymes to digest proteins.</li>
          <li><strong>Storage:</strong> Holds food before it moves to the intestines.</li>
          <li><strong>Protection:</strong> Kills harmful bacteria with acidic environment.</li>
          <li><strong>Mixing:</strong> Churns food into a semi-liquid form (chyme).</li>
        </ul>
        <p>For more, visit <a href="https://www.niddk.nih.gov/health-information/digestive-diseases" className="stomach-link">NIH Digestive Health</a>.</p>
      </section>

      <section>
        <h2>Common Stomach Issues, Causes, Symptoms, and Solutions</h2>
        <div className="condition">
          <h4><a href="https://www.mayoclinic.org/diseases-conditions/indigestion/symptoms-causes/syc-20352211" className="stomach-link" target="_blank" rel="noopener noreferrer">1. Indigestion (Dyspepsia)</a></h4>
          <p><strong>Cause:</strong> Overeating, spicy foods, or stress.</p>
          <p><strong>Symptoms:</strong> Bloating, nausea, burning sensation.</p>
          <p><strong>Solution:</strong> Antacids, smaller meals, avoiding triggers.</p>
        </div>
        <div className="condition">
          <h4><a href="https://www.mayoclinic.org/diseases-conditions/gastritis/symptoms-causes/syc-20355807" className="stomach-link" target="_blank" rel="noopener noreferrer">2. Gastritis</a></h4>
          <p><strong>Cause:</strong> H. pylori infection, alcohol, or NSAID overuse.</p>
          <p><strong>Symptoms:</strong> Upper abdominal pain, vomiting, loss of appetite.</p>
          <p><strong>Solution:</strong> Antibiotics, proton pump inhibitors.</p>
        </div>
        <div className="condition">
          <h4><a href="https://www.mayoclinic.org/diseases-conditions/peptic-ulcer/symptoms-causes/syc-20354223" className="stomach-link" target="_blank" rel="noopener noreferrer">3. Peptic Ulcers</a></h4>
          <p><strong>Cause:</strong> H. pylori or prolonged NSAID use eroding stomach lining.</p>
          <p><strong>Symptoms:</strong> Burning pain, bleeding, nausea.</p>
          <p><strong>Solution:</strong> Medications, dietary changes, surgery if severe.</p>
        </div>
      </section>

      <section>
        <h2>Symptoms of Stomach Problems</h2>
        <p>Look out for these warning signs:</p>
        <ul>
          <li>🔥 Burning or pain in the upper abdomen.</li>
          <li>💨 Bloating or excessive gas.</li>
          <li>🤢 Nausea or vomiting.</li>
          <li>🍽️ Feeling full too quickly.</li>
          <li>⚠️ Blood in stool or vomit.</li>
        </ul>
      </section>

      <section>
        <h2>Stomach Care Tips</h2>
        <p>Keep your stomach healthy with these habits:</p>
        <ul>
          <li>🍽️ Eat smaller, frequent meals.</li>
          <li>🚰 Stay hydrated to aid digestion.</li>
          <li>🥗 Avoid spicy or fatty foods if sensitive.</li>
          <li>🧘 Reduce stress with relaxation techniques.</li>
          <li>💊 Limit NSAID use—consult a doctor.</li>
        </ul>
      </section>

      <section>
        <h2>Best Foods for Digestion</h2>
        <p>Support your stomach with these:</p>
        <ul>
          <li>🍎 Apples – High in fiber for regularity.</li>
          <li>🥣 Yogurt – Probiotics balance gut bacteria.</li>
          <li>🍌 Bananas – Soothe the stomach lining.</li>
          <li>🌾 Whole Grains – Fiber aids digestion.</li>
          <li>🥑 Avocado – Healthy fats reduce inflammation.</li>
        </ul>
      </section>

      <section>
        <h2>Preventive Measures</h2>
        <p>Protect your stomach health:</p>
        <ul>
          <li>🍷 Limit alcohol – Irritates the lining.</li>
          <li>🚭 Quit smoking – Increases acid production.</li>
          <li>🩺 Treat infections like H. pylori early.</li>
          <li>🏋️ Maintain a healthy weight – Reduces reflux.</li>
          <li>🛌 Avoid lying down right after eating.</li>
        </ul>
      </section>

      <section>
        <h2>Learn More About Stomach Health</h2>
        <p>Explore these resources:</p>
        <ul>
          <li>🏥 <a href="https://www.niddk.nih.gov/health-information/digestive-diseases" className="stomach-link" target="_blank" rel="noopener noreferrer">National Institute of Diabetes and Digestive and Kidney Diseases</a></li>
          <li>🏥 <a href="https://www.mayoclinic.org/diseases-conditions/digestive-disorders" className="stomach-link" target="_blank" rel="noopener noreferrer">Mayo Clinic Digestive Health</a></li>
        </ul>
      </section>
    </div>
  );
};

export default StomachCare;