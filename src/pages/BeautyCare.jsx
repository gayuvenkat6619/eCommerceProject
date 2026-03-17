import React from 'react';
import ProductList from '../components/ProductList';

const BeautyCare = ({ products, addToCart }) => {
  const beautyProducts = products.filter(product => product.category === 'beauty-care');
  return (
    <div>
      <h2>Beauty Care</h2>
      <ProductList products={beautyProducts} onAddToCart={addToCart} />
    </div>
  );
};

export default BeautyCare;