// import React from "react"; 
import "./CardiacCare.css"; 
import heartImage from "../assets/cardiac.png"; // Replace with your image path

const CardiacCare = () => {
  return (
    <div className="cardiac-care-container">
      <h1>Cardiac Care: Your Guide to a Healthy Heart</h1>

      <div className="content-wrapper">
        <img src={heartImage} alt="Healthy Heart" className="heart-image" />
        <div className="text-content">
          <h2>Understanding Your Heart</h2>
          <p>
            The heart is a muscular organ located slightly left of the center of your chest, between the lungs. 
            About the size of a fist, it pumps blood throughout the body via the circulatory system, delivering oxygen 
            and nutrients while removing waste. It beats around 100,000 times daily, pumping roughly 2,000 gallons of blood.
          </p>
          <p>
            Maintaining heart health is vital for longevity. Poor lifestyle choices, genetics, or stress can lead to 
            cardiovascular diseases, the leading cause of death globally.
          </p>
        </div>
      </div>

      <div className="contents-section">
        <h3>Contents</h3>
        <ul>
          <li>🔹 Heart Functions</li>
          <li>🔹 Common Heart Conditions</li>
          <li>🔹 Symptoms of Heart Issues</li>
          <li>🔹 Heart Care Tips</li>
          <li>🔹 Best Foods for Heart Health</li>
          <li>🔹 Preventive Measures</li>
        </ul>
      </div>

      <section>
        <h2>Essential Functions of the Heart</h2>
        <p>The heart’s primary role is to circulate blood, but it does much more:</p>
        <ul>
          <li><strong>Blood Circulation:</strong> Pumps oxygenated blood to the body and deoxygenated blood to the lungs.</li>
          <li><strong>Oxygen Delivery:</strong> Supplies oxygen to tissues via red blood cells.</li>
          <li><strong>Waste Removal:</strong> Transports carbon dioxide to the lungs for exhalation.</li>
          <li><strong>Hormone Transport:</strong> Distributes hormones and nutrients throughout the body.</li>
          <li><strong>Pressure Regulation:</strong> Maintains blood pressure for proper flow.</li>
        </ul>
        <p>For more, visit <a href="https://www.heart.org/en/health-topics" className="cardiac-link">American Heart Association</a>.</p>
      </section>

      <section>
        <h2>Common Heart Conditions, Causes, Symptoms, and Treatments</h2>
        <div className="condition">
          <h4><a href="https://www.mayoclinic.org/diseases-conditions/high-blood-pressure/symptoms-causes/syc-20373410" className="cardiac-link" target="_blank" rel="noopener noreferrer">1. Hypertension (High Blood Pressure)</a></h4>
          <p><strong>Cause:</strong> Stress, poor diet, or genetics causing increased pressure on artery walls.</p>
          <p><strong>Symptoms:</strong> Often silent; may include headaches or dizziness.</p>
          <p><strong>Treatment:</strong> Lifestyle changes, ACE inhibitors, or beta-blockers.</p>
        </div>
        <div className="condition">
          <h4><a href="https://www.mayoclinic.org/diseases-conditions/coronary-artery-disease/symptoms-causes/syc-20350613" className="cardiac-link" target="_blank" rel="noopener noreferrer">2. Coronary Artery Disease (CAD)</a></h4>
          <p><strong>Cause:</strong> Plaque buildup in arteries, reducing blood flow to the heart.</p>
          <p><strong>Symptoms:</strong> Chest pain (angina), shortness of breath, fatigue.</p>
          <p><strong>Treatment:</strong> Statins, angioplasty, or bypass surgery.</p>
        </div>
        <div className="condition">
          <h4><a href="https://www.mayoclinic.org/diseases-conditions/heart-failure/symptoms-causes/syc-20373142" className="cardiac-link" target="_blank" rel="noopener noreferrer">3. Heart Failure</a></h4>
          <p><strong>Cause:</strong> Weakened heart muscle from prior damage (e.g., heart attack).</p>
          <p><strong>Symptoms:</strong> Swelling, fatigue, difficulty breathing.</p>
          <p><strong>Treatment:</strong> Diuretics, heart pumps, or transplant in severe cases.</p>
        </div>
      </section>

      <section>
        <h2>Symptoms of Heart Issues</h2>
        <p>Heart problems can be subtle or sudden. Seek help if you notice:</p>
        <ul>
          <li>❤️ Chest pain or tightness.</li>
          <li>😴 Fatigue or weakness.</li>
          <li>💨 Shortness of breath.</li>
          <li>💧 Swelling in legs or ankles.</li>
          <li>⚠️ Rapid or irregular heartbeat.</li>
        </ul>
      </section>

      <section>
        <h2>Heart Care Tips</h2>
        <p>Keep your heart strong with these practices:</p>
        <ul>
          <li>🏃 Exercise regularly – Aim for 30 minutes most days.</li>
          <li>🥗 Eat heart-healthy – Focus on low-fat, high-fiber foods.</li>
          <li>🚭 Quit smoking – Reduces artery damage.</li>
          <li>🧘 Manage stress – Try relaxation techniques.</li>
          <li>💊 Monitor cholesterol and blood pressure.</li>
        </ul>
      </section>

      <section>
        <h2>Best Foods for Heart Health</h2>
        <p>Support your heart with these nutrient-rich options:</p>
        <ul>
          <li>🐟 Fatty Fish – Omega-3s reduce inflammation (e.g., salmon).</li>
          <li>🥑 Avocados – Healthy fats lower bad cholesterol.</li>
          <li>🍓 Berries – Antioxidants protect blood vessels.</li>
          <li>🥬 Leafy Greens – High in nitrates for blood flow.</li>
          <li>🌰 Nuts – Fiber and heart-healthy fats.</li>
        </ul>
      </section>

      <section>
        <h2>Preventive Measures</h2>
        <p>Protect your heart with these habits:</p>
        <ul>
          <li>⚕️ Regular check-ups – Catch issues early.</li>
          <li>🏋️ Maintain a healthy weight – Reduces strain.</li>
          <li>🍷 Limit alcohol – Excess harms heart muscle.</li>
          <li>🛌 Sleep well – Poor sleep increases heart risk.</li>
        </ul>
      </section>

      <section>
        <h2>Learn More About Cardiac Health</h2>
        <p>Explore expert resources:</p>
        <ul>
          <li>🏥 <a href="https://www.heart.org" className="cardiac-link" target="_blank" rel="noopener noreferrer">American Heart Association</a></li>
          <li>🏥 <a href="https://www.mayoclinic.org/diseases-conditions/heart-disease" className="cardiac-link" target="_blank" rel="noopener noreferrer">Mayo Clinic Heart Health</a></li>
        </ul>
      </section>
    </div>
  );
};

export default CardiacCare;