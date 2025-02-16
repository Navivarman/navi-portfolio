import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import NavBar from "./Components/Navbar";
import AboutPage from "./Components/AboutPage"; // Import About section
import EducationPage from "./Components/EducationPage";
import SkillsPage from "./Components/SkillsPage";
import ContactPage from "./Components/ContactPage";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;

