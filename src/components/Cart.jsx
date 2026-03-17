import React from 'react';

const Cart = ({ cart, onClose, onRemoveFromCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ position: 'fixed', top: 0, right: 0, width: '300px', height: '100%', backgroundColor: 'white', borderLeft: '1px solid #ddd', padding: '1rem', overflowY: 'auto' }}>
      <button onClick={onClose} style={{ float: 'right', backgroundColor: '#dc3545', color: 'white', border: 'none', padding: '0.5rem', cursor: 'pointer' }}>Close</button>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} style={{ borderBottom: '1px solid #eee', padding: '0.5rem 0' }}>
              <h4>{item.name}</h4>
              <p>${item.price} x {item.quantity}</p>
              <button onClick={() => onRemoveFromCart(item.id)} style={{ backgroundColor: '#dc3545', color: 'white', border: 'none', padding: '0.25rem 0.5rem', cursor: 'pointer' }}>Remove</button>
            </div>
          ))}
          <h3>Total: ${total.toFixed(2)}</h3>
          <button style={{ width: '100%', backgroundColor: '#007bff', color: 'white', border: 'none', padding: '0.5rem', cursor: 'pointer' }}>Checkout</button>
        </>
      )}
    </div>
  );
};

export default Cart;