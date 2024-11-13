import React, { useState } from 'react';

const ProductCard = ({ product, addToCart }) => {
  const [message, setMessage] = useState('');

  const handleAddToCart = () => {
    addToCart(product);
    setMessage(`${product.name} has been added to the cart!`);
    
    // Clear the message after a few seconds
    setTimeout(() => {
      setMessage('');
    }, 3000); // Change the duration as needed
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} style={{ width: '150px', height: '150px' }} />
      <h2>{product.name}</h2>
      <p>{product.price} USD</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
      {message && <p className="add-to-cart-message">{message}</p>}
    </div>
  );
};

export default ProductCard;
