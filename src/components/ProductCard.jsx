import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '1rem', margin: '1rem', width: '200px' }}>
      <img src={product.image} alt={product.name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => onAddToCart(product)} style={{ backgroundColor: '#28a745', color: 'white', border: 'none', padding: '0.5rem', cursor: 'pointer', marginRight: '0.5rem' }}>
        Add to Cart
      </button>
      <Link to={`/product/${product.id}`} style={{ color: '#007bff', textDecoration: 'none' }}>View Details</Link>
    </div>
  );
};

export default ProductCard;