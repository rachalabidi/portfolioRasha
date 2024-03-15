import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

const App = () => {
  return (
    
    <Router>
    <div className="App">
      <Routes>
        {/* Define routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />

      </Routes>
    </div>
  </Router>
  
  );
};

export default App;
