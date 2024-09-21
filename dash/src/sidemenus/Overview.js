import React, { useState, useEffect } from 'react';
import './Overview.css';

function OverViewTable({ items }) {
  const handleStatus = (status) => {
    switch (status) {
      case 'Approved':
        return 'success';
      case 'Pending':
        return 'warning';
      case 'Rejected':
        return 'danger';
      default:
        return 'secondary';
    }
  };

  return (
    <table className='table table-borderless datatable'>
      <thead className='table-light'>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Customer</th>
          <th scope='col'>Product</th>
          <th scope='col'>Price</th>
          <th scope='col'>Status</th>
        </tr>
      </thead>
      <tbody id='datatable'>
        {items && items.length > 0 ? (
          items.map((item) => (
            <tr key={item._id}>
              <td scope='row'>
                <a href='#'>{item.number}</a>
              </td>
              <td>{item.customer}</td>
              <td>
                <a href='#' className='text-primary'>
                  {item.product}
                </a>
              </td>
              <td>${item.price.toFixed(2)}</td>
              <td>
                <span className={`badge bg-${handleStatus(item.status)}`}>
                  {item.status}
                </span>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan='5' className='text-center'>No sales data available</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

function OverView() {
  const [overView, setOverView] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching data...');
        const response = await fetch('http://localhost:3001/api/data');
        console.log('Response Status:', response.status);
        
        if (!response.ok) throw new Error('Network response was not ok');

        const data = await response.json();
        console.log('Fetched data:', data);
        
        // Check if the data object contains the 'Overview' key
        if (data && Array.isArray(data.Overview)) {
          setOverView(data.Overview);
        } else {
          throw new Error('Invalid data structure: Overview key missing or not an array');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div id='overview' className='overview'>
      <div className="overview-titles">
        <h4>Over View | sales</h4>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error loading data: {error}</p>
      ) : (
        <div className='cardss'>
          <OverViewTable items={overView} />
        </div>
      )}
    </div>
  );
}

export default OverView;
