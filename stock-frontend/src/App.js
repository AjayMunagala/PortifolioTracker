import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddStockForm from './components/AddStockForm';
import StockPortfolio from './components/StockPortfolio';


const App = () => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/stocks')
      .then(response => {
        setStocks(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching stock data!', error);
      });
  }, []);

  return (
    <div>
      <h1>Stock Portfolio</h1>
      <AddStockForm setStocks={setStocks} />
      <StockPortfolio stocks={stocks} />
    </div>
  );
};

export default App;
