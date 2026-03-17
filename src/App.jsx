import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Home from './pages/Home';
import BeautyCare from './pages/BeautyCare';
import Accessories from './pages/Accessories';
import Dress from './pages/Dress';
import Electronics from './pages/Electronics';
import ProductDetailsPage from './pages/ProductDetailsPage';
import './App.css';
import ProductDetails from './components/ProductDetails';
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Fetch general products from Fake Store API
        const storeResponse = await fetch('https://fakestoreapi.com/products');
        const storeData = await storeResponse.json();
        
        // Fetch beauty and cosmetics products from Makeup API
        const beautyResponse = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline');
        const beautyData = await beautyResponse.json();
        
        // Map Fake Store API data
        const mappedStoreProducts = storeData.map(product => ({
          id: product.id,
          name: product.title,
          price: Math.round(product.price),
          image: product.image,
          category: mapCategory(product.category),
          description: product.description
        }));
        
        // Map Makeup API data to beauty-care and cosmetic categories
        const mappedBeautyProducts = beautyData.slice(0, 15).map((product, index) => ({
          id: 100 + index, // Offset IDs to avoid conflicts
          name: product.name,
          price: Math.round(parseFloat(product.price) || 25), // Default price if not available
          image: product.image_link,
          category: product.product_type === 'lipstick' || product.product_type === 'foundation' || product.product_type === 'mascara' ? 'cosmetic' : 'beauty-care',
          description: product.description || `${product.name} - ${product.product_type}`
        }));
        
        // Combine all products
        const allProducts = [...mappedStoreProducts, ...mappedBeautyProducts];
        setProducts(allProducts);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Map Fake Store API categories to our app categories
  const mapCategory = (apiCategory) => {
    const categoryMap = {
      'electronics': 'electronics',
      'jewelery': 'accessories',
      "men's clothing": 'dress',
      "women's clothing": 'dress'
    };
    return categoryMap[apiCategory] || 'beauty-care'; // Default to beauty-care for unmapped categories
  };

  const addToCart = (product) => {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === product.id);
      if (existing) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <BrowserRouter>
      <div className="App">
        <Header cartCount={cartCount} onCartClick={() => setShowCart(true)} />
        <main style={{ padding: '2rem' }}>
          {loading ? (
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <h2>Loading products...</h2>
            </div>
          ) : (
            <Routes>
              <Route path="/" element={<Home products={products} addToCart={addToCart} />} />
              <Route path="/beauty-care" element={<BeautyCare products={products} addToCart={addToCart} />} />
              <Route path="/accessories" element={<Accessories products={products} addToCart={addToCart} />} />
              <Route path="/dress" element={<Dress products={products} addToCart={addToCart} />} />
              <Route path="/electronics" element={<Electronics products={products} addToCart={addToCart} />} />
              <Route path="/product/:id" element={<ProductDetailsPage products={products} addToCart={addToCart} />} />
            </Routes>
          )}
        </main>
        {showCart && <Cart cart={cart} onClose={() => setShowCart(false)} onRemoveFromCart={removeFromCart} />}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;