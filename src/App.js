








import React from 'react';
import './style.css';
import Header from './components/Header';
import ProductDetails from './components/ProductDetails';
import ProductComponents from './components/ProductComponents';
import ProductListing from './components/ProductListing';
import {BrowserRouter,Routes,Route} from "react-router-dom";

export default function App() {
  return (
    <div>

      <Header />
      <BrowserRouter>

       <Routes>

       <Route path="/" element={<ProductListing />}></Route>
       <Route path="/product/:productId"   element={<ProductDetails />} ></Route>
       </Routes>

      </BrowserRouter>
     
    </div>
  );
}
