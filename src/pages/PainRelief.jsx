import React from "react"; 
import "./PainRelief.css"; 
import painImage from "../assets/pain-relief.jpg"; // Replace with your image path

const PainRelief = () => {
  return (
    <div className="pain-relief-container">
      <h1>Pain Relief: Your Guide to Managing Discomfort</h1>

      <div className="content-wrapper">
        <img src={painImage} alt="Pain Relief" className="pain-image" />
        <div className="text-content">
          <h2>Understanding Pain</h2>
          <p>
            Pain is a complex sensation that serves as the body’s warning system, signaling injury, illness, or stress. 
            It can be acute (short-term) or chronic (long-lasting), affecting areas like muscles, joints, or nerves. 
            Pain signals travel through the nervous system to the brain, where they’re interpreted and felt.
          </p>
          <p>
            Effective pain management improves quality of life. Untreated pain can lead to stress, sleep issues, 
            and reduced mobility. This page explores relief options and strategies.
          </p>
        </div>
      </div>

      <div className="contents-section">
        <h3>Contents</h3>
        <ul>
          <li>🔹 Types of Pain</li>
          <li>🔹 Common Causes of Pain</li>
          <li>🔹 Symptoms of Chronic Pain</li>
          <li>🔹 Pain Relief Methods</li>
          <li>🔹 Best Practices for Pain Management</li>
          <li>🔹 Preventive Tips</li>
        </ul>
      </div>

      <section>
        <h2>Types of Pain</h2>
        <p>Pain varies in type and origin, influencing treatment options:</p>
        <ul>
          <li><strong>Acute Pain:</strong> Sudden, short-term pain (e.g., from injury or surgery).</li>
          <li><strong>Chronic Pain:</strong> Persistent pain lasting over 3 months (e.g., arthritis).</li>
          <li><strong>Nociceptive Pain:</strong> Caused by tissue damage (e.g., cuts, burns).</li>
          <li><strong>Neuropathic Pain:</strong> Results from nerve damage (e.g., sciatica).</li>
          <li><strong>Referred Pain:</strong> Felt in a different area from its source (e.g., heart attack pain in the arm).</li>
        </ul>
        <p>For more details, visit <a href="https://www.webmd.com/pain-management/guide-pain-types" className="pain-link">WebMD Pain Guide</a>.</p>
      </section>

      <section>
        <h2>Common Causes, Symptoms, and Relief Options</h2>
        <div className="condition">
          <h4><a href="https://www.mayoclinic.org/diseases-conditions/migraine-headache/symptoms-causes/syc-20360201" className="pain-link" target="_blank" rel="noopener noreferrer">1. Headaches/Migraines</a></h4>
          <p><strong>Cause:</strong> Stress, dehydration, or neurological triggers.</p>
          <p><strong>Symptoms:</strong> Throbbing pain, nausea, sensitivity to light.</p>
          <p><strong>Relief:</strong> Ibuprofen, hydration, or prescription triptans for migraines.</p>
        </div>
        <div className="condition">
          <h4><a href="https://www.mayoclinic.org/diseases-conditions/back-pain/symptoms-causes/syc-20369906" className="pain-link" target="_blank" rel="noopener noreferrer">2. Back Pain</a></h4>
          <p><strong>Cause:</strong> Poor posture, muscle strain, or disc issues.</p>
          <p><strong>Symptoms:</strong> Stiffness, aching, limited mobility.</p>
          <p><strong>Relief:</strong> Physical therapy, acetaminophen, or heat therapy.</p>
        </div>
        <div className="condition">
          <h4><a href="https://www.arthritis.org/health-wellness/treatment/treatment-plan/disease-management" className="pain-link" target="_blank" rel="noopener noreferrer">3. Arthritis</a></h4>
          <p><strong>Cause:</strong> Joint inflammation from wear or autoimmune issues.</p>
          <p><strong>Symptoms:</strong> Joint pain, swelling, stiffness.</p>
          <p><strong>Relief:</strong> NSAIDs, corticosteroids, or exercise.</p>
        </div>
      </section>

      <section>
        <h2>Symptoms of Chronic Pain</h2>
        <p>Chronic pain can disrupt daily life. Watch for:</p>
        <ul>
          <li>🟡 Persistent aching or burning.</li>
          <li>😴 Fatigue and sleep disturbances.</li>
          <li>💨 Mood changes like irritability or depression.</li>
          <li>💩 Reduced appetite or energy.</li>
          <li>⚠️ Limited movement or stiffness.</li>
        </ul>
      </section>

      <section>
        <h2>Pain Relief Methods</h2>
        <p>Explore these options to ease discomfort:</p>
        <ul>
          <li>💊 <strong>Medications:</strong> Over-the-counter (e.g., ibuprofen) or prescription drugs.</li>
          <li>🌿 <strong>Natural Remedies:</strong> Turmeric, ginger, or essential oils.</li>
          <li>🧘 <strong>Therapies:</strong> Massage, acupuncture, or meditation.</li>
          <li>🏋️ <strong>Exercise:</strong> Stretching or low-impact activities like yoga.</li>
          <li>🔥 <strong>Heat/Cold Therapy:</strong> Hot packs for stiffness, ice for swelling.</li>
        </ul>
      </section>

      <section>
        <h2>Best Practices for Pain Management</h2>
        <p>Adopt these habits for better relief:</p>
        <ul>
          <li>🥗 Eat anti-inflammatory foods (e.g., berries, nuts).</li>
          <li>💧 Stay hydrated to reduce muscle cramps.</li>
          <li>🛌 Prioritize rest and good sleep hygiene.</li>
          <li>🚶 Maintain posture and avoid strain.</li>
        </ul>
      </section>

      <section>
        <h2>Preventive Tips</h2>
        <p>Minimize pain with these steps:</p>
        <ul>
          <li>🏋️ Regular exercise to strengthen muscles.</li>
          <li>⚖️ Maintain a healthy weight to ease joint stress.</li>
          <li>🧠 Manage stress with mindfulness techniques.</li>
          <li>🚫 Avoid overuse of painkillers to prevent dependency.</li>
        </ul>
      </section>

      <section>
        <h2>Learn More About Pain Relief</h2>
        <p>For expert advice, visit:</p>
        <ul>
          <li>🏥 <a href="https://www.mayoclinic.org/pain-management" className="pain-link" target="_blank" rel="noopener noreferrer">Mayo Clinic Pain Management</a></li>
          <li>🏥 <a href="https://www.webmd.com/pain-management" className="pain-link" target="_blank" rel="noopener noreferrer">WebMD Pain Resources</a></li>
        </ul>
      </section>
    </div>
  );
};

export default PainRelief;