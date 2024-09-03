import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProductList from './components/ProductList';
import Products from './components/Products';
import Update from './components/Update';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<ProductList />} />
          <Route path='/products/page' element={<Products />} />
          <Route path='/update/:id' element={<Update />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
