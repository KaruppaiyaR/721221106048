import React, { useState, useEffect } from 'react';
import Product from './Product';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://20.244.56.144/products/companies/AMZ/categories/Laptop/product?top=10&minPrice=1&maxPrice=10000");
        const jsonData = await response.json();
        setProducts(jsonData.products);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>E-commerce</h1>
      <div className="products-list">
        <h2>Products</h2>
        <div className="product-container">
          {products.map((product, index) => (
            <Product key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
