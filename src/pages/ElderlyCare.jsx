import React from "react";
import "./ElderlyCare.css";
import elderlyImage from "../assets/elderly_care_image.png"; // Replace with your image

const ElderlyCarePage = () => {
  return (
    <div className="elderly-care-container">
      <h1>Elderly Care: Supporting a Healthy and Happy Life</h1>

      <div className="content-wrapper">
        <img src={elderlyImage} alt="Elderly Care" className="elderly-image" />
        <div className="text-content">
          <h2>Understanding Elderly Care</h2>
          <p>
            Elderly care focuses on meeting the physical, emotional, and social needs of older adults. 
            As we age, our bodies undergo changes that may require extra support, from mobility assistance 
            to managing chronic conditions.
          </p>
          <p>
            Proper care enhances the quality of life for seniors, helping them maintain independence 
            and dignity while addressing health challenges that come with aging.
          </p>
        </div>
      </div>

      <div className="contents-section">
        <h3>Contents</h3>
        <ul>
          <li>🔹 Aging and Health</li>
          <li>🔹 Common Health Issues in Seniors</li>
          <li>🔹 Signs of Health Concerns</li>
          <li>🔹 Caregiving Tips</li>
          <li>🔹 Nutrition for Seniors</li>
          <li>🔹 Preventive Care Measures</li>
        </ul>
      </div>

      <section>
        <h2>Aging and Health</h2>
        <p>
          Aging affects every part of the body. While it’s a natural process, seniors can stay healthy 
          with the right care. Key aspects of elderly health include:
        </p>
        <ul>
          <li><strong>Mobility:</strong> Joints and muscles weaken, affecting movement.</li>
          <li><strong>Cognition:</strong> Memory and thinking skills may decline.</li>
          <li><strong>Heart Health:</strong> Blood vessels stiffen, increasing heart disease risk.</li>
          <li><strong>Immune System:</strong> Weakens, making infections more common.</li>
          <li><strong>Bone Health:</strong> Bones lose density, raising fracture risk.</li>
        </ul>
        <p>
          For more info, visit{" "}
          <a href="https://www.who.int/health-topics/ageing" className="elderly-link">
            WHO Ageing
          </a>.
        </p>
      </section>

      <section>
        <h2>Common Health Issues in Seniors</h2>

        <div className="disease">
          <h4>
            <a
              href="https://www.mayoclinic.org/diseases-conditions/arthritis/symptoms-causes/syc-20350772"
              target="_blank"
              rel="noopener noreferrer"
              className="elderly-link"
            >
              1. Arthritis
            </a>
          </h4>
          <p><strong>Cause:</strong> Inflammation of joints due to wear and tear or autoimmune issues.</p>
          <p><strong>Symptoms:</strong> Joint pain, stiffness, swelling.</p>
          <p><strong>Management:</strong> Pain relievers (e.g., ibuprofen), physical therapy.</p>
        </div>

        <div className="disease">
          <h4>
            <a
              href="https://www.alz.org/alzheimers-dementia/what-is-dementia"
              target="_blank"
              rel="noopener noreferrer"
              className="elderly-link"
            >
              2. Dementia
            </a>
          </h4>
          <p><strong>Cause:</strong> Brain cell damage, often from Alzheimer’s or strokes.</p>
          <p><strong>Symptoms:</strong> Memory loss, confusion, mood changes.</p>
          <p><strong>Management:</strong> Medications (e.g., donepezil), cognitive therapy.</p>
        </div>

        <div className="disease">
          <h4>
            <a
              href="https://www.heart.org/en/health-topics/high-blood-pressure"
              target="_blank"
              rel="noopener noreferrer"
              className="elderly-link"
            >
              3. Hypertension
            </a>
          </h4>
          <p><strong>Cause:</strong> Aging arteries and lifestyle factors like poor diet.</p>
          <p><strong>Symptoms:</strong> Headaches, dizziness (often silent).</p>
          <p><strong>Management:</strong> Blood pressure meds (e.g., lisinopril), diet changes.</p>
        </div>

        <div className="disease">
          <h4>
            <a
              href="https://www.mayoclinic.org/diseases-conditions/osteoporosis/symptoms-causes/syc-20351968"
              target="_blank"
              rel="noopener noreferrer"
              className="elderly-link"
            >
              4. Osteoporosis
            </a>
          </h4>
          <p><strong>Cause:</strong> Loss of bone density with age.</p>
          <p><strong>Symptoms:</strong> Fractures, back pain, stooped posture.</p>
          <p><strong>Management:</strong> Calcium, vitamin D, bisphosphonates.</p>
        </div>
      </section>

      <section>
        <h2>Signs of Health Concerns</h2>
        <p>
          Watch for these signs in seniors, as they may indicate a need for medical attention:
        </p>
        <ul>
          <li>🟡 Unexplained weight loss or gain.</li>
          <li>😴 Fatigue or low energy.</li>
          <li>💭 Memory lapses or confusion.</li>
          <li>⚠️ Difficulty walking or frequent falls.</li>
          <li>💧 Swelling in legs or feet.</li>
        </ul>
      </section>

      <section>
        <h2>Caregiving Tips</h2>
        <p>Support seniors with these practical caregiving strategies:</p>
        <ul>
          <li>🏠 Ensure a safe home – Remove trip hazards, add grab bars.</li>
          <li>💊 Manage medications – Use pill organizers, set reminders.</li>
          <li>👥 Encourage social interaction – Combat loneliness with visits or activities.</li>
          <li>🏋️ Promote light exercise – Walking or stretching improves mobility.</li>
          <li>🩺 Schedule regular check-ups – Early detection is key.</li>
        </ul>
      </section>

      <section>
        <h2>Nutrition for Seniors</h2>
        <p>These foods support elderly health:</p>
        <ul>
          <li>🥗 Leafy Greens – Rich in vitamins for immunity.</li>
          <li>🥜 Nuts – Healthy fats for heart health.</li>
          <li>🍎 Fruits – Fiber aids digestion.</li>
          <li>🐟 Fish – Omega-3s for brain function.</li>
          <li>🥛 Dairy – Calcium for strong bones.</li>
        </ul>
      </section>

      <section>
        <h2>Preventive Care Measures</h2>
        <p>Help seniors stay healthy with these habits:</p>
        <ul>
          <li>💉 Get vaccinated – Flu, pneumonia, and shingles shots.</li>
          <li>🚶 Stay active – Prevent muscle loss with movement.</li>
          <li>💧 Hydrate – Aging reduces thirst sensation.</li>
          <li>🚭 Avoid smoking – Reduces heart and lung strain.</li>
          <li>⚕️ Monitor health – Regular blood pressure and sugar checks.</li>
        </ul>
      </section>

      <section>
        <h2>Learn More About Elderly Care</h2>
        <p>For expert resources, visit:</p>
        <ul>
          <li>
            🏥{" "}
            <a
              href="https://www.nia.nih.gov/health"
              className="elderly-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              National Institute on Aging
            </a>
          </li>
          <li>
            🏥{" "}
            <a
              href="https://www.who.int/health-topics/ageing"
              className="elderly-link"
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

export default ElderlyCarePage;