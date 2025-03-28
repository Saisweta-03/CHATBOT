import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Healthcondition from "./components/Healthcondition";
import PainRelief from "./pages/PainRelief";
import CardiacCare from "./pages/CardiacCare";
import SexualHealth from "./pages/SexualHealth";
import LiverCare from "./pages/LiverCare";
import DiabetesCare from "./pages/DiabetesCare";
import OralCare from "./pages/OralCare";
import StomachCare from "./pages/StomachCare";
import Respiratory from "./pages/Respiratory";
import ElderlyCare from "./pages/ElderlyCare";
import ColdImmune from "./pages/ColdImmune";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import AIChatModal from "./components/AIChatModal";
import "./App.css";

const MainLayout = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      {location.pathname === "/" && <HeroSection />}
      <Routes>
        <Route path="/" element={<Healthcondition />} />
        <Route path="/pain" element={<PainRelief />} />
        <Route path="/cardiac" element={<CardiacCare />} />
        <Route path="/sexual" element={<SexualHealth />} />
        <Route path="/liver" element={<LiverCare />} />
        <Route path="/diabetes" element={<DiabetesCare />} />
        <Route path="/oral" element={<OralCare />} />
        <Route path="/stomach" element={<StomachCare />} />
        <Route path="/respiratory" element={<Respiratory />} />
        <Route path="/elderly" element={<ElderlyCare />} />
        <Route path="/cold" element={<ColdImmune />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
};

const App = () => {
  const [showChat, setShowChat] = useState(true);

  useEffect(() => {
    setShowChat(true);
  }, []);

  return (
    <div className="app-container">
      <Router>
        <MainLayout />
        {showChat ? (
          <AIChatModal onClose={() => setShowChat(false)} />
        ) : (
          <button
            className="chatbot-toggle"
            onClick={() => setShowChat(true)}
          >
            Chat with Medibot 💬
          </button>
        )}
      </Router>
    </div>
  );
};

export default App;