import React from 'react';

const CartPage = ({ cart, removeFromCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {cart.map((item, index) => (
              <li key={index} style={{ listStyle: 'none', marginBottom: '20px' }}>
                <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px', marginRight: '10px' }} />
                <span>
                  <strong>{item.name}</strong> - {item.price} USD
                </span>
                <button 
                  onClick={() => removeFromCart(item)} 
                  style={{ marginLeft: '10px', backgroundColor: 'red', color: 'white', border: 'none', padding: '5px' }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h2>Total: {total} USD</h2>
        </div>
      )}
    </div>
  );
};

export default CartPage;
