import React from 'react';
import ProductList from '../components/ProductList';

const Dress = ({ products, addToCart }) => {
  const dressProducts = products.filter(product => product.category === 'dress');
  return (
    <div>
      <h2>Dresses</h2>
      <ProductList products={dressProducts} onAddToCart={addToCart} />
    </div>
  );
};

export default Dress;