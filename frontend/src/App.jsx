import './App.css'
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import AllItems from './pages/AllItems';

function App() {

  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-items" element={<AllItems />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
