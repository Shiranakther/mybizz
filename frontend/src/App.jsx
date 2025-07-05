import './App.css'
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import AllItems from './pages/AllItems';
import ItemDetails from './pages/ItemDetails';

function App() {

  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-items" element={<AllItems />} />
        <Route path="/item-details/:id" element={<ItemDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
