import React from 'react';

const Cart = ({ cart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price} USD
          </li>
        ))}
      </ul>
      <h3>Total: {total} USD</h3>
    </div>
  );
};

export default Cart;
