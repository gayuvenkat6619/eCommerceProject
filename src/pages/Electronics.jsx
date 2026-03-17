import React from 'react';
import ProductList from '../components/ProductList';

const Electronics = ({ products, addToCart }) => {
  const electronicProducts = products.filter(product => product.category === 'electronics');
  return (
    <div>
      <h2>Electronics</h2>
      <ProductList products={electronicProducts} onAddToCart={addToCart} />
    </div>
  );
};

export default Electronics;