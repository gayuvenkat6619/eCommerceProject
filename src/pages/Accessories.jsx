import React from 'react';
import ProductList from '../components/ProductList';

const Accessories = ({ products, addToCart }) => {
  const accessoryProducts = products.filter(product => product.category === 'accessories');
  return (
    <div>
      <h2>Accessories</h2>
      <ProductList products={accessoryProducts} onAddToCart={addToCart} />
    </div>
  );
};

export default Accessories;