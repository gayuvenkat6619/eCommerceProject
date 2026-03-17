import React from 'react';

const ProductDetails = ({ product, onAddToCart }) => {
  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <img src={product.image} alt={product.name} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
      <h1>{product.name}</h1>
      <p style={{ fontSize: '1.2rem', color: '#555' }}>{product.description}</p>
      <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>${product.price}</p>
      <button onClick={() => onAddToCart(product)} style={{ backgroundColor: '#28a745', color: 'white', border: 'none', padding: '0.75rem 1.5rem', fontSize: '1rem', cursor: 'pointer' }}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;