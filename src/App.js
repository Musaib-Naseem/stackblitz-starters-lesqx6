import React from 'react';
import './style.css';
import Header from './components/Header';
import ProductDetails from './components/ProductDetails';
import ProductComponents from './components/ProductComponents';
import ProductListing from './components/ProductListing';

export default function App() {
  return (
    <div>
      <Header />
      <ProductListing />
      <ProductDetails />
      <ProductComponents />
    </div>
  );
}
