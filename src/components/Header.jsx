import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ cartCount, onCartClick }) => {
  return (
    <header style={{ backgroundColor: '#333', color: 'white', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>E-Commerce Store</Link></h1>
      <nav>
        <Link to="/" style={{ color: 'white', margin: '0 1rem', textDecoration: 'none' }}>Home</Link>
        <Link to="/beauty-care" style={{ color: 'white', margin: '0 1rem', textDecoration: 'none' }}>Beauty Care</Link>
        <Link to="/accessories" style={{ color: 'white', margin: '0 1rem', textDecoration: 'none' }}>Accessories</Link>
        <Link to="/dress" style={{ color: 'white', margin: '0 1rem', textDecoration: 'none' }}>Dress</Link>
        <Link to="/electronics" style={{ color: 'white', margin: '0 1rem', textDecoration: 'none' }}>Electronics</Link>
      </nav>
      <button onClick={onCartClick} style={{ backgroundColor: '#555', color: 'white', border: 'none', padding: '0.5rem 1rem', cursor: 'pointer' }}>
        Cart ({cartCount})
      </button>
    </header>
  );
};

export default Header;