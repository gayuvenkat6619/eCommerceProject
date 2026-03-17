import React from 'react';
import ProductList from '../components/ProductList';

const Home = ({ products, addToCart }) => {
  return (
    <div>
      <h2>All Products</h2>
      <ProductList products={products} onAddToCart={addToCart} />
    </div>
  );
};

export default Home;