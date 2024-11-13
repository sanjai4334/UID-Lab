import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';

function App() {
  const [cart, setCart] = useState([]);

  // Add to cart function
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Remove from cart function
  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

  return (
    <Router>
      <div className="App">
        <Navbar cartItems={cart.length} />
        <Routes>
          <Route path="/" element={<HomePage addToCart={addToCart} />} />
          <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
