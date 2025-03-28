import React from "react"; 
import "./SexualHealth.css"; 
import sexualHealthImage from "../assets/sexual_health.png"; // Replace with your image path

const SexualHealth = () => {
  return (
    <div className="sexual-health-container">
      <h1>Sexual Health: Your Guide to Well-Being</h1>

      <div className="content-wrapper">
        <img src={sexualHealthImage} alt="Sexual Wellness" className="sexual-health-image" />
        <div className="text-content">
          <h2>Understanding Sexual Health</h2>
          <p>
            Sexual health encompasses physical, emotional, and social well-being related to sexuality. It involves safe practices, 
            consent, reproductive health, and maintaining healthy relationships. Good sexual health enhances quality of life and 
            requires education, awareness, and access to care.
          </p>
          <p>
            Open communication and preventive measures are key to addressing sexual health concerns effectively.
          </p>
        </div>
      </div>

      <div className="contents-section">
        <h3>Contents</h3>
        <ul>
          <li>🔹 Aspects of Sexual Health</li>
          <li>🔹 Common Sexual Health Issues</li>
          <li>🔹 Symptoms of Problems</li>
          <li>🔹 Sexual Health Tips</li>
          <li>🔹 Supporting Sexual Wellness</li>
          <li>🔹 Preventive Measures</li>
        </ul>
      </div>

      <section>
        <h2>Aspects of Sexual Health</h2>
        <p>Sexual health covers multiple dimensions:</p>
        <ul>
          <li><strong>Reproductive Health:</strong> Managing fertility and pregnancy.</li>
          <li><strong>Safe Practices:</strong> Preventing STIs and unintended pregnancies.</li>
          <li><strong>Emotional Wellness:</strong> Building trust and intimacy in relationships.</li>
          <li><strong>Physical Health:</strong> Maintaining sexual function and comfort.</li>
        </ul>
        <p>For more, visit <a href="https://www.who.int/health-topics/sexual-health" className="sexual-link">WHO Sexual Health</a>.</p>
      </section>

      <section>
        <h2>Common Sexual Health Issues, Causes, Symptoms, and Solutions</h2>
        <div className="condition">
          <h4><a href="https://www.mayoclinic.org/diseases-conditions/sexually-transmitted-diseases-stds/symptoms-causes/syc-20351240" className="sexual-link" target="_blank" rel="noopener noreferrer">1. Sexually Transmitted Infections (STIs)</a></h4>
          <p><strong>Cause:</strong> Bacteria, viruses, or parasites from unprotected sex.</p>
          <p><strong>Symptoms:</strong> Discharge, sores, burning during urination.</p>
          <p><strong>Solution:</strong> Antibiotics, antivirals, regular testing.</p>
        </div>
        <div className="condition">
          <h4><a href="https://www.mayoclinic.org/diseases-conditions/erectile-dysfunction/symptoms-causes/syc-20355776" className="sexual-link" target="_blank" rel="noopener noreferrer">2. Erectile Dysfunction (ED)</a></h4>
          <p><strong>Cause:</strong> Stress, diabetes, or cardiovascular issues.</p>
          <p><strong>Symptoms:</strong> Difficulty achieving or maintaining an erection.</p>
          <p><strong>Solution:</strong> Medications (e.g., Viagra), lifestyle changes.</p>
        </div>
        <div className="condition">
          <h4><a href="https://www.mayoclinic.org/diseases-conditions/low-sex-drive-in-women/symptoms-causes/syc-20374554" className="sexual-link" target="_blank" rel="noopener noreferrer">3. Low Libido</a></h4>
          <p><strong>Cause:</strong> Hormonal changes, stress, or relationship issues.</p>
          <p><strong>Symptoms:</strong> Reduced interest in sexual activity.</p>
          <p><strong>Solution:</strong> Therapy, hormone treatment, communication.</p>
        </div>
      </section>

      <section>
        <h2>Symptoms of Sexual Health Problems</h2>
        <p>Be aware of these signs:</p>
        <ul>
          <li>💧 Unusual discharge or odor.</li>
          <li>😣 Pain during intercourse.</li>
          <li>🔥 Itching, burning, or sores.</li>
          <li>💤 Fatigue or mood changes affecting desire.</li>
          <li>⚠️ Irregular menstrual cycles or fertility issues.</li>
        </ul>
      </section>

      <section>
        <h2>Sexual Health Tips</h2>
        <p>Promote wellness with these practices:</p>
        <ul>
          <li>🛡️ Use protection (e.g., condoms) to prevent STIs.</li>
          <li>🩺 Get regular STI screenings and check-ups.</li>
          <li>💬 Communicate openly with partners.</li>
          <li>🏃 Stay active to boost circulation and libido.</li>
          <li>🧘 Manage stress for emotional balance.</li>
        </ul>
      </section>

      <section>
        <h2>Supporting Sexual Wellness</h2>
        <p>Enhance your health with these:</p>
        <ul>
          <li>🥗 Balanced diet – Supports hormone production.</li>
          <li>💧 Hydration – Improves overall function.</li>
          <li>🍇 Antioxidant-rich foods – Boost circulation (e.g., berries).</li>
          <li>🧘 Yoga – Reduces stress and improves flexibility.</li>
          <li>🩹 Lubricants – Enhance comfort if needed.</li>
        </ul>
      </section>

      <section>
        <h2>Preventive Measures</h2>
        <p>Protect your sexual health:</p>
        <ul>
          <li>💉 Vaccinate against HPV and Hepatitis B.</li>
          <li>🚭 Avoid smoking – Impacts blood flow.</li>
          <li>🍷 Limit alcohol – Affects performance.</li>
          <li>⚕️ Seek help for chronic conditions (e.g., diabetes).</li>
          <li>📚 Educate yourself and partners.</li>
        </ul>
      </section>

      <section>
        <h2>Learn More About Sexual Health</h2>
        <p>Check these resources:</p>
        <ul>
          <li>🏥 <a href="https://www.who.int/health-topics/sexual-health" className="sexual-link" target="_blank" rel="noopener noreferrer">World Health Organization</a></li>
          <li>🏥 <a href="https://www.plannedparenthood.org/learn" className="sexual-link" target="_blank" rel="noopener noreferrer">Planned Parenthood</a></li>
        </ul>
      </section>
    </div>
  );
};

export default SexualHealth;