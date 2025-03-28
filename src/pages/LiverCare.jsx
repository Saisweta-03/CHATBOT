import React from "react"; 
import "./LiverCare.css"; 
import liverImage from "../assets/liver_anatomy.png"; 

const LiverCare = () => {
  return (
    <div className="liver-care-container">
      <h1>Liver Care: Your Guide to a Healthy Liver</h1>

      <div className="content-wrapper">
        <img src={liverImage} alt="Healthy Liver" className="liver-image" />
        <div className="text-content">
          <h2>Understanding Your Liver</h2>
          <p>
            The liver is located in the upper right-hand portion of the abdominal cavity, beneath the diaphragm, and on top of the stomach, right kidney, and intestines. 
            Shaped like a cone, the liver is a dark reddish-brown organ that weighs about 3 pounds...
          </p>
          <p>
            Keeping your liver healthy is essential for overall well-being. 
            Poor diet, excessive alcohol consumption, and infections can lead to serious liver diseases.
          </p>
        </div>
      </div>

      <div className="contents-section">
        <h3>Contents</h3>
        <ul>
          <li>🔹 Liver Functions</li>
          <li>🔹 Common Liver Diseases</li>
          <li>🔹 Symptoms of Liver Problems</li>
          <li>🔹 Tips for a Healthy Liver</li>
          <li>🔹 Best Foods for Liver Health</li>
          <li>🔹 Preventive Measures</li>
        </ul>
      </div>

      {/* Rest of your original sections remain unchanged */}
      {/* Essential Functions of the Liver */}
      {/* Common Liver Diseases, Causes, Symptoms, and Medications */}
      {/* Symptoms of Liver Problems */}
      {/* Tips for a Healthy Liver */}
      {/* Best Foods for Liver Health */}
      {/* Preventive Measures */}
      {/* Learn More About Liver Health */}
    </div>
  );
};

export default LiverCare;