import React, { useState } from 'react';
import './ItemForm.css';

function ItemForm() {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    quantity: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems([...items, formData]);
    setFormData({
      name: '',
      description: '',
      quantity: ''
    });
  };

  return (
    <div className="page-layout">
      <div className="form-container">
        <h2>Add New Item</h2>
        <form onSubmit={handleSubmit} className="item-form">
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Description:</label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Quantity:</label>
            <input
              type="text"
              name="quantity"
              value={formData.quantity}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="btn">Add Item</button>
        </form>
      </div>

      <div className="list-container">
        <h3>Item List</h3>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <strong>Name:</strong> {item.name} <strong>Description:</strong> {item.description} <strong>Quantity:</strong> {item.quantity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ItemForm;
