import './App.css'
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import AllItems from './pages/AllItems';

function App() {

  return (
   <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-items" element={<AllItems />} />

        
        
      </Routes>
    </Router>
  )
}

export default App
