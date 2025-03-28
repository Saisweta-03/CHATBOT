import React from "react"; 
import "./DiabetesCare.css"; 
import diabetesImage from "../assets/diabetes_info.png"; // Replace with your image path

const DiabetesCare = () => {
  return (
    <div className="diabetes-care-container">
      <h1>Diabetes Care: Your Guide to Managing Blood Sugar</h1>

      <div className="content-wrapper">
        <img src={diabetesImage} alt="Diabetes Management" className="diabetes-image" />
        <div className="text-content">
          <h2>Understanding Diabetes</h2>
          <p>
            Diabetes is a chronic condition affecting how your body processes blood sugar (glucose), a key energy source. 
            It occurs when the pancreas doesn’t produce enough insulin or the body can’t use insulin effectively, leading 
            to high blood sugar levels. Over time, this can damage organs like the heart, kidneys, and eyes.
          </p>
          <p>
            Proper management of diabetes is crucial to prevent complications and maintain a healthy life. 
            Lifestyle changes and medical care can make a big difference.
          </p>
        </div>
      </div>

      <div className="contents-section">
        <h3>Contents</h3>
        <ul>
          <li>🔹 Types of Diabetes</li>
          <li>🔹 Common Causes & Risk Factors</li>
          <li>🔹 Symptoms of Diabetes</li>
          <li>🔹 Diabetes Management Tips</li>
          <li>🔹 Best Foods for Blood Sugar Control</li>
          <li>🔹 Preventive Measures</li>
        </ul>
      </div>

      <section>
        <h2>Types of Diabetes</h2>
        <p>Diabetes comes in different forms, each with unique causes:</p>
        <ul>
          <li><strong>Type 1 Diabetes:</strong> Autoimmune condition where the body attacks insulin-producing cells.</li>
          <li><strong>Type 2 Diabetes:</strong> Most common; body resists insulin or doesn’t produce enough.</li>
          <li><strong>Gestational Diabetes:</strong> Develops during pregnancy, usually temporary.</li>
          <li><strong>Prediabetes:</strong> Blood sugar is high but not yet diabetic; a warning sign.</li>
        </ul>
        <p>For more, visit <a href="https://www.diabetes.org/diabetes" className="diabetes-link">American Diabetes Association</a>.</p>
      </section>

      <section>
        <h2>Common Causes, Symptoms, and Management</h2>
        <div className="condition">
          <h4><a href="https://www.mayoclinic.org/diseases-conditions/type-1-diabetes/symptoms-causes/syc-20353011" className="diabetes-link" target="_blank" rel="noopener noreferrer">1. Type 1 Diabetes</a></h4>
          <p><strong>Cause:</strong> Autoimmune reaction, often genetic or triggered by viruses.</p>
          <p><strong>Symptoms:</strong> Extreme thirst, frequent urination, fatigue, weight loss.</p>
          <p><strong>Management:</strong> Insulin therapy, blood sugar monitoring.</p>
        </div>
        <div className="condition">
          <h4><a href="https://www.mayoclinic.org/diseases-conditions/type-2-diabetes/symptoms-causes/syc-20351193" className="diabetes-link" target="_blank" rel="noopener noreferrer">2. Type 2 Diabetes</a></h4>
          <p><strong>Cause:</strong> Insulin resistance from obesity, inactivity, or genetics.</p>
          <p><strong>Symptoms:</strong> Slow-healing sores, numbness, increased hunger.</p>
          <p><strong>Management:</strong> Diet, exercise, metformin, or insulin if needed.</p>
        </div>
        <div className="condition">
          <h4><a href="https://www.mayoclinic.org/diseases-conditions/gestational-diabetes/symptoms-causes/syc-20355339" className="diabetes-link" target="_blank" rel="noopener noreferrer">3. Gestational Diabetes</a></h4>
          <p><strong>Cause:</strong> Hormonal changes during pregnancy.</p>
          <p><strong>Symptoms:</strong> Often asymptomatic; detected via screening.</p>
          <p><strong>Management:</strong> Diet control, sometimes insulin.</p>
        </div>
      </section>

      <section>
        <h2>Symptoms of Diabetes</h2>
        <p>Early detection is key. Look out for:</p>
        <ul>
          <li>💧 Excessive thirst and urination.</li>
          <li>😴 Fatigue and weakness.</li>
          <li>🍽️ Increased hunger despite eating.</li>
          <li>👁️ Blurred vision.</li>
          <li>⚠️ Tingling or numbness in hands/feet.</li>
        </ul>
      </section>

      <section>
        <h2>Diabetes Management Tips</h2>
        <p>Control blood sugar with these strategies:</p>
        <ul>
          <li>📏 Monitor blood glucose regularly.</li>
          <li>💊 Take medications as prescribed.</li>
          <li>🏃 Exercise – 30 minutes most days.</li>
          <li>🥗 Follow a balanced, low-sugar diet.</li>
          <li>🩺 Regular check-ups with your doctor.</li>
        </ul>
      </section>

      <section>
        <h2>Best Foods for Blood Sugar Control</h2>
        <p>Eat these to stabilize glucose levels:</p>
        <ul>
          <li>🥬 Leafy Greens – Low-carb, high-fiber.</li>
          <li>🥜 Nuts – Healthy fats slow sugar spikes.</li>
          <li>🍓 Berries – Low glycemic index.</li>
          <li>🐟 Fatty Fish – Omega-3s reduce inflammation.</li>
          <li>🍠 Sweet Potatoes – Slower sugar release.</li>
        </ul>
      </section>

      <section>
        <h2>Preventive Measures</h2>
        <p>Reduce your risk with these habits:</p>
        <ul>
          <li>🏋️ Maintain a healthy weight.</li>
          <li>🚭 Avoid smoking – Worsens insulin resistance.</li>
          <li>🍷 Limit alcohol – Affects blood sugar.</li>
          <li>🧘 Manage stress – Cortisol impacts glucose.</li>
          <li>⚕️ Screen regularly if at risk.</li>
        </ul>
      </section>

      <section>
        <h2>Learn More About Diabetes</h2>
        <p>Visit these resources:</p>
        <ul>
          <li>🏥 <a href="https://www.diabetes.org" className="diabetes-link" target="_blank" rel="noopener noreferrer">American Diabetes Association</a></li>
          <li>🏥 <a href="https://www.mayoclinic.org/diseases-conditions/diabetes" className="diabetes-link" target="_blank" rel="noopener noreferrer">Mayo Clinic Diabetes Info</a></li>
        </ul>
      </section>
    </div>
  );
};

export default DiabetesCare;