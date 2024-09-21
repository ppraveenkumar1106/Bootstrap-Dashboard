import React, { useState, useEffect } from "react";
import './OnlyCards.css';

function OnlyCards() {
  const [onlycards, setOnlycards] = useState([]);
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
        setOnlycards(data.onlycards || []); // Use the products data
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

  // Render the card data dynamically if available
  return (
    <div id="OnlyCards" className="onlycards">
      <div className="OnlyCards-titles">
    <h4>Cards </h4>
    </div>
      {onlycards.length > 0 ? (
        onlycards.map((card) => (
          <div key={card.id} className="cards">
            <div className="card-img">
              <img src={card.img} alt={card.title} />
            </div>
            <div className="card-titles">{card.title}</div>
            <div className="card-subtitle">
              {card.description}
            </div>
            <hr className="card-divider" />
            <div className="card-footer">
              <div className="card-price">
                <span>$</span> {card.price}
              </div>
              <button className="card-btn">
                <i className="bi bi-cart2"></i>
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No cards available.</p>
      )}
    </div>
  );
}

export default OnlyCards;
