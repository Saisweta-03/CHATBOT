import React from "react"; 
import "./OralCare.css"; 
import oralImage from "../assets/oral_health.png"; // Replace with your image path

const OralCare = () => {
  return (
    <div className="oral-care-container">
      <h1>Oral Care: Your Guide to a Healthy Smile</h1>

      <div className="content-wrapper">
        <img src={oralImage} alt="Healthy Mouth" className="oral-image" />
        <div className="text-content">
          <h2>Understanding Oral Health</h2>
          <p>
            Oral health involves the care of your teeth, gums, and mouth to prevent disease and maintain overall well-being. 
            The mouth is a gateway to the body, and poor oral hygiene can lead to issues like cavities, gum disease, and even 
            systemic conditions like heart disease. Regular care keeps your smile bright and your health intact.
          </p>
          <p>
            Good oral hygiene is a lifelong habit that starts with simple daily routines and professional check-ups.
          </p>
        </div>
      </div>

      <div className="contents-section">
        <h3>Contents</h3>
        <ul>
          <li>🔹 Functions of the Mouth</li>
          <li>🔹 Common Oral Conditions</li>
          <li>🔹 Symptoms of Oral Problems</li>
          <li>🔹 Oral Care Tips</li>
          <li>🔹 Best Foods for Oral Health</li>
          <li>🔹 Preventive Measures</li>
        </ul>
      </div>

      <section>
        <h2>Functions of the Mouth</h2>
        <p>The mouth plays several key roles in daily life:</p>
        <ul>
          <li><strong>Chewing & Digestion:</strong> Breaks down food for nutrient absorption.</li>
          <li><strong>Speech:</strong> Teeth, tongue, and lips aid in clear communication.</li>
          <li><strong>Breathing:</strong> Serves as an alternate airway.</li>
          <li><strong>Defense:</strong> Saliva fights bacteria and protects enamel.</li>
        </ul>
        <p>For more, visit <a href="https://www.ada.org/en" className="oral-link">American Dental Association</a>.</p>
      </section>

      <section>
        <h2>Common Oral Conditions, Causes, Symptoms, and Treatments</h2>
        <div className="condition">
          <h4><a href="https://www.mayoclinic.org/diseases-conditions/cavities/symptoms-causes/syc-20352892" className="oral-link" target="_blank" rel="noopener noreferrer">1. Cavities (Tooth Decay)</a></h4>
          <p><strong>Cause:</strong> Bacteria feeding on sugar, producing acid that erodes enamel.</p>
          <p><strong>Symptoms:</strong> Toothache, sensitivity, visible holes.</p>
          <p><strong>Treatment:</strong> Fillings, fluoride, or crowns in severe cases.</p>
        </div>
        <div className="condition">
          <h4><a href="https://www.mayoclinic.org/diseases-conditions/gingivitis/symptoms-causes/syc-20354453" className="oral-link" target="_blank" rel="noopener noreferrer">2. Gingivitis</a></h4>
          <p><strong>Cause:</strong> Plaque buildup irritating gums.</p>
          <p><strong>Symptoms:</strong> Red, swollen, or bleeding gums.</p>
          <p><strong>Treatment:</strong> Improved brushing, flossing, professional cleaning.</p>
        </div>
        <div className="condition">
          <h4><a href="https://www.mayoclinic.org/diseases-conditions/periodontitis/symptoms-causes/syc-20354473" className="oral-link" target="_blank" rel="noopener noreferrer">3. Periodontitis</a></h4>
          <p><strong>Cause:</strong> Untreated gingivitis advancing to gum and bone damage.</p>
          <p><strong>Symptoms:</strong> Receding gums, loose teeth, bad breath.</p>
          <p><strong>Treatment:</strong> Scaling, root planing, or surgery.</p>
        </div>
      </section>

      <section>
        <h2>Symptoms of Oral Problems</h2>
        <p>Watch for these signs of trouble:</p>
        <ul>
          <li>🦷 Tooth pain or sensitivity.</li>
          <li>🩸 Bleeding or swollen gums.</li>
          <li>👅 Persistent bad breath.</li>
          <li>💧 Dry mouth or sores.</li>
          <li>⚠️ Loose or shifting teeth.</li>
        </ul>
      </section>

      <section>
        <h2>Oral Care Tips</h2>
        <p>Maintain a healthy mouth with these habits:</p>
        <ul>
          <li>🪥 Brush twice daily with fluoride toothpaste.</li>
          <li>🧵 Floss daily to remove plaque between teeth.</li>
          <li>💦 Use mouthwash to kill bacteria.</li>
          <li>🦷 Visit the dentist every 6 months.</li>
          <li>🚭 Avoid tobacco – It stains teeth and harms gums.</li>
        </ul>
      </section>

      <section>
        <h2>Best Foods for Oral Health</h2>
        <p>Support your teeth and gums with these:</p>
        <ul>
          <li>🥕 Crunchy Veggies – Stimulate saliva (e.g., carrots).</li>
          <li>🧀 Dairy – Calcium strengthens enamel.</li>
          <li>🍏 Apples – Natural teeth cleaners.</li>
          <li>🍵 Green Tea – Antioxidants fight bacteria.</li>
          <li>🥜 Nuts – Minerals support gum health.</li>
        </ul>
      </section>

      <section>
        <h2>Preventive Measures</h2>
        <p>Protect your oral health with these steps:</p>
        <ul>
          <li>🍬 Limit sugary foods and drinks.</li>
          <li>💧 Stay hydrated to boost saliva production.</li>
          <li>🛡️ Wear a mouthguard for sports.</li>
          <li>⚕️ Manage conditions like diabetes that affect oral health.</li>
        </ul>
      </section>

      <section>
        <h2>Learn More About Oral Health</h2>
        <p>Explore these resources:</p>
        <ul>
          <li>🏥 <a href="https://www.ada.org" className="oral-link" target="_blank" rel="noopener noreferrer">American Dental Association</a></li>
          <li>🏥 <a href="https://www.mayoclinic.org/healthy-lifestyle/adult-health/in-depth/dental/art-20047475" className="oral-link" target="_blank" rel="noopener noreferrer">Mayo Clinic Oral Care</a></li>
        </ul>
      </section>
    </div>
  );
};

export default OralCare;