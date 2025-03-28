import React from "react"; 
import "./ColdImmune.css"; 
import immuneImage from "../assets/immune_health.png"; // Replace with your image path

const ColdImmune = () => {
  return (
    <div className="cold-immune-container">
      <h1>Cold & Immune Health: Your Guide to Staying Strong</h1>

      <div className="content-wrapper">
        <img src={immuneImage} alt="Immune System" className="immune-image" />
        <div className="text-content">
          <h2>Understanding Colds & Immunity</h2>
          <p>
            The immune system is your body’s defense against infections like the common cold, caused by viruses such as rhinoviruses. 
            A strong immune system reduces the frequency and severity of colds, while poor immunity can leave you vulnerable. 
            Colds spread through droplets or contact, making prevention key.
          </p>
          <p>
            Boosting immunity and managing cold symptoms can help you stay healthy year-round.
          </p>
        </div>
      </div>

      <div className="contents-section">
        <h3>Contents</h3>
        <ul>
          <li>🔹 Functions of the Immune System</li>
          <li>🔹 Common Cold Causes & Issues</li>
          <li>🔹 Symptoms of Colds</li>
          <li>🔹 Immune Boosting Tips</li>
          <li>🔹 Best Foods for Immunity</li>
          <li>🔹 Preventive Measures</li>
        </ul>
      </div>

      <section>
        <h2>Functions of the Immune System</h2>
        <p>The immune system protects you by:</p>
        <ul>
          <li><strong>Fighting Pathogens:</strong> Neutralizes viruses, bacteria, and other invaders.</li>
          <li><strong>Memory:</strong> Remembers past infections for faster responses.</li>
          <li><strong>Healing:</strong> Repairs tissues after illness or injury.</li>
          <li><strong>Regulation:</strong> Balances responses to avoid overreactions.</li>
        </ul>
        <p>For more, visit <a href="https://www.cdc.gov/flu/prevent/index.html" className="immune-link">CDC Flu Prevention</a>.</p>
      </section>

      <section>
        <h2>Common Cold Causes, Symptoms, and Remedies</h2>
        <div className="condition">
          <h4><a href="https://www.mayoclinic.org/diseases-conditions/common-cold/symptoms-causes/syc-20351605" className="immune-link" target="_blank" rel="noopener noreferrer">1. Common Cold</a></h4>
          <p><strong>Cause:</strong> Over 200 viruses, primarily rhinoviruses, spread via air or touch.</p>
          <p><strong>Symptoms:</strong> Runny nose, sore throat, cough, congestion.</p>
          <p><strong>Remedy:</strong> Rest, fluids, over-the-counter decongestants.</p>
        </div>
        <div className="condition">
          <h4><a href="https://www.mayoclinic.org/diseases-conditions/flu/symptoms-causes/syc-20351719" className="immune-link" target="_blank" rel="noopener noreferrer">2. Influenza (Flu)</a></h4>
          <p><strong>Cause:</strong> Influenza viruses, more severe than colds.</p>
          <p><strong>Symptoms:</strong> Fever, body aches, fatigue, dry cough.</p>
          <p><strong>Remedy:</strong> Antivirals (e.g., Tamiflu), rest, hydration.</p>
        </div>
        <div className="condition">
          <h4><a href="https://www.mayoclinic.org/diseases-conditions/bronchitis/symptoms-causes/syc-20355566" className="immune-link" target="_blank" rel="noopener noreferrer">3. Acute Bronchitis</a></h4>
          <p><strong>Cause:</strong> Viral infection post-cold, irritating bronchial tubes.</p>
          <p><strong>Symptoms:</strong> Persistent cough, mucus, chest discomfort.</p>
          <p><strong>Remedy:</strong> Cough suppressants, humidifiers, rest.</p>
        </div>
      </section>

      <section>
        <h2>Symptoms of Colds</h2>
        <p>Watch for these common signs:</p>
        <ul>
          <li>🤧 Runny or stuffy nose.</li>
          <li>😷 Sore throat or cough.</li>
          <li>🌡️ Mild fever or chills.</li>
          <li>😴 Fatigue or headache.</li>
          <li>⚠️ Sneezing or watery eyes.</li>
        </ul>
      </section>

      <section>
        <h2>Immune Boosting Tips</h2>
        <p>Strengthen your defenses with these:</p>
        <ul>
          <li>💤 Sleep 7-9 hours nightly.</li>
          <li>💧 Drink plenty of water.</li>
          <li>🏃 Exercise regularly to enhance circulation.</li>
          <li>🍊 Take vitamin C and zinc supplements.</li>
          <li>🧘 Reduce stress with mindfulness.</li>
        </ul>
      </section>

      <section>
        <h2>Best Foods for Immunity</h2>
        <p>Fuel your immune system with these:</p>
        <ul>
          <li>🍋 Citrus Fruits – High in vitamin C.</li>
          <li>🥣 Yogurt – Probiotics support gut health.</li>
          <li>🧄 Garlic – Antiviral and antibacterial.</li>
          <li>🥬 Spinach – Rich in antioxidants.</li>
          <li>🍵 Green Tea – Boosts immune response.</li>
        </ul>
      </section>

      <section>
        <h2>Preventive Measures</h2>
        <p>Stay cold-free with these habits:</p>
        <ul>
          <li>🧼 Wash hands frequently for 20+ seconds.</li>
          <li>💉 Get a yearly flu vaccine.</li>
          <li>😷 Avoid touching your face.</li>
          <li>🚫 Stay away from sick individuals.</li>
          <li>🛌 Rest when feeling under the weather.</li>
        </ul>
      </section>

      <section>
        <h2>Learn More About Cold & Immune Health</h2>
        <p>Explore these resources:</p>
        <ul>
          <li>🏥 <a href="https://www.cdc.gov/flu" className="immune-link" target="_blank" rel="noopener noreferrer">Centers for Disease Control and Prevention</a></li>
          <li>🏥 <a href="https://www.mayoclinic.org/diseases-conditions/common-cold" className="immune-link" target="_blank" rel="noopener noreferrer">Mayo Clinic Cold Info</a></li>
        </ul>
      </section>
    </div>
  );
};

export default ColdImmune;