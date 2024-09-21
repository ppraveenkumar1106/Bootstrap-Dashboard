import React, { useState, useEffect } from 'react';
import './Transactions.css';

const Transactions = () => {
  const [transfer, setTransfer] = useState([]);
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
        setTransfer(data.transfer || []); // Use the transfer data
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Define the number of items per page
  const itemsPerPage = 8;

  // State to store the current page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the number of pages
  const totalPages = Math.ceil(transfer.length / itemsPerPage);

  // Get the data for the current page
  const currentPageData = transfer.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div id="Transaction" className='Transaction'>
      <div className="Transaction-titles">
        <h4>Transactions</h4>
        </div>
      <table
        style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}
      >
        <thead>
          <tr>
            <th className="tableHeader">#</th>
            <th className="tableHeader">Bill For</th>
            <th className="tableHeader">Issue Date</th>
            <th className="tableHeader">Due Date</th>
            <th className="tableHeader">Total</th>
            <th className="tableHeader">Status</th>
          </tr>
        </thead>
        <tbody>
          {currentPageData.map((entry) => {
            const colorClass =
              entry.status === 'Paid'
                ? 'text-success'
                : entry.status === 'Due'
                ? 'text-warning'
                : 'text-danger';

            return (
              <tr key={entry.id}>
                <td className="tableCell">{entry.id}</td>
                <td className="tableCell">{entry.item}</td>
                <td className="tableCell">{entry.issueDate}</td>
                <td className="tableCell">{entry.dueDate}</td>
                <td className="tableCell">{entry.total}</td>
                <td className={`tableCell ${colorClass}`} style={{textTransform:"uppercase"}}>{entry.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Pagination controls */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Transactions;
