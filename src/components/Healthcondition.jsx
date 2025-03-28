import React from "react";
import { Link } from "react-router-dom";
import "./Healthcondition.css";
import diabetes from "../assets/diabetes.png";
import cardiac from "../assets/cardiac.png";
import stomach from "../assets/stomach.png";
import pain from "../assets/pain.png";
import liver from "../assets/liver.png";
import oral from "../assets/oral.png";
import respiratory from "../assets/respiratory.png";
import sexual from "../assets/sexual.png";
import elderly from "../assets/elderly.jpg";
import cold from "../assets/cold.png";

const healthConditions = [
  { name: "Diabetes Care", icon: diabetes, route: "/diabetes" },
  { name: "Cardiac Care", icon: cardiac, route: "/cardiac" },
  { name: "Stomach Care", icon: stomach, route: "/stomach" },
  { name: "Pain Relief", icon: pain, route: "/pain" },
  { name: "Liver Care", icon: liver, route: "/liver" },
  { name: "Oral Care", icon: oral, route: "/oral" },
  { name: "Respiratory", icon: respiratory, route: "/respiratory" },
  { name: "Sexual Health", icon: sexual, route: "/sexual" },
  { name: "Elderly Care", icon: elderly, route: "/elderly" },
  { name: "Cold & Immunity", icon: cold, route: "/cold" },
];

const Healthcondition = () => {
  return (
    <section className="health-section">
      <h2>Browse by Health Conditions</h2>
      <div className="health-grid">
        {healthConditions.map((item, index) => (
          <Link to={item.route} key={index} className="health-card">
            <img src={item.icon} alt={item.name} className="health-icon" />
            <p>{item.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Healthcondition;