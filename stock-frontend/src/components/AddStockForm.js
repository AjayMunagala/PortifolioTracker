import React, { useState } from 'react';
import axios from 'axios';

const AddStockForm = () => {
  const [name, setName] = useState('');
  const [ticker, setTicker] = useState('');
  const [quantity, setQuantity] = useState('');
  const [buyPrice, setBuyPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newStock = {
      name,
      ticker,
      quantity: parseInt(quantity, 10),
      buyPrice: parseFloat(buyPrice),
    };

    try {
      await axios.post('http://localhost:8080/api/stocks', newStock);
      setName('');
      setTicker('');
      setQuantity('');
      setBuyPrice('');
      alert('Stock added successfully');
    } catch (error) {
      console.error('Error adding stock:', error);
      alert('Error adding stock');
    }
  };

  return (
    <div>
      <h3>Add New Stock</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Stock Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Ticker Symbol:</label>
          <input
            type="text"
            value={ticker}
            onChange={(e) => setTicker(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Quantity:</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Buy Price:</label>
          <input
            type="number"
            step="0.01"
            value={buyPrice}
            onChange={(e) => setBuyPrice(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Stock</button>
      </form>
    </div>
  );
};

export default AddStockForm;
