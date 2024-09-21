import React, { useState, useEffect } from 'react';
import './products.css';

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('Fetching data...');
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/data'); // Updated endpoint
        console.log('Response Status:', response.status);
        if (!response.ok) throw new Error('Network response was not ok');

        const data = await response.json();
        console.log('Fetched data:', data);
        setProducts(data.products || []); // Use the products data
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Show loading message while data is being fetched
  if (loading) {
    return <p>Loading...</p>;
  }

  // Show error message if there was a problem fetching data
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div id="products" className="products">
      <div className="product-titles">
        <h4>Products</h4>
        </div>
      <div className="table-responsive">
        <table className="table table-borderless">
          <thead className="table-light">
            <tr>
              <th scope="col" >Preview</th>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Sold</th>
            </tr>
          </thead>
          <tbody>
  {products.length > 0 ? (
    products.map((product) => (
      <tr key={product._id}>
        <td>
          <img
            src={product.preview} 
            alt={product.name}
            style={{ width: '80px' }}
          />
        </td>
        <td>{product.name}</td>
        <td>${product.price}</td>
        <td>{product.sold}</td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="4">No products found</td>
    </tr>
  )}
</tbody>

        </table>
      </div>
    </div>
  );
}

export default Products;
