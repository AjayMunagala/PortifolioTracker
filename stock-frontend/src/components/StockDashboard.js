import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StockDashboard = () => {
  const [stocks, setStocks] = useState([]);
  const [portfolioValue, setPortfolioValue] = useState(0);

  useEffect(() => {
    // Fetch stocks from the backend API
    axios.get('http://localhost:8080/api/stocks')
      .then(response => {
        setStocks(response.data);
      })
      .catch(error => console.error('Error fetching stocks:', error));

    // Fetch portfolio value
    axios.get('http://localhost:8080/api/stocks/portfolio-value')
      .then(response => {
        setPortfolioValue(response.data);
      })
      .catch(error => console.error('Error fetching portfolio value:', error));
  }, []);

  return (
    <div>
      <h1>Stock Portfolio</h1>
      <h2>Portfolio Value: ${portfolioValue}</h2>
      <table>
        <thead>
          <tr>
            <th>Ticker</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Buy Price</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map(stock => (
            <tr key={stock.ticker}>
              <td>{stock.ticker}</td>
              <td>{stock.name}</td>
              <td>{stock.quantity}</td>
              <td>{stock.buyPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockDashboard;
