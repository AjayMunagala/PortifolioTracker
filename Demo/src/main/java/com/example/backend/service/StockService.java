package com.example.backend.service;

import com.example.demo.model.Stock;
import com.example.demo.repository.StockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StockService {

    @Autowired
    private StockRepository stockRepository;

    // Add a new stock to the database
    public Stock addStock(Stock stock) {
        return stockRepository.save(stock);
    }

    // Get all stocks from the database
    public List<Stock> getAllStocks() {
        return stockRepository.findAll();
    }
}
