import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetails from '../components/ProductDetails';

const ProductDetailsPage = ({ products, addToCart }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  return <ProductDetails product={product} onAddToCart={addToCart} />;
};

export default ProductDetailsPage;