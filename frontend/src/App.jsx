import './App.css'
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import AllItems from './pages/AllItems';
import ItemDetails from './pages/ItemDetails';
import ShoppingCart from './pages/ShoppingCart';
import CreateCategory from './pages/CreateCategory';

import CreateItem from './pages/CreateItem';
import Admin from './pages/Admin'

function App() {

  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-items" element={<AllItems />} />
        <Route path="/item-details/:id" element={<ItemDetails />} />
        <Route path="/cart" element={<ShoppingCart/>}/>
        <Route path="/create-category" element={<CreateCategory/>}/>
        <Route path="/create-item" element={<CreateItem/>}/>
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
