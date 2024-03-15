import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
  return (
    
    <Router>
    <div className="App">
      <Routes>
        {/* Define routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  </Router>
  
  );
};

export default App;
