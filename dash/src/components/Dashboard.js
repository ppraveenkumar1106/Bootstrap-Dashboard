import React, { useState, useEffect } from 'react';
import './dashboard.css';
import Card from './Card';
import MarketSummery from './MarketSummery';
import StackOverView from './StackOverView';
import ProductOverview from './ProductOverview';



const Dashboard = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/data');
        console.log('Response Status:', response.status); 
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }


        const data = await response.json();
        console.log('Data received:', data); 

        
        setCards(data.cards || []);
        
      } catch (error) {
        console.error('Error fetching data:', error); 
        setError(error);


      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  

  return (
    <section className='dashboard-section'>
      <div className='row'>
        <div className='col-lg-12'>
          <div className='row'>
            {cards.length > 0 && cards.map(card => (
              <div className="col-xxl-4 col-md-4" key={card._id}>
                <Card card={card} />
              </div>
            ))}
          </div>

          <br /><br />

          <div className='col-12'>
            <MarketSummery />
          </div>

          <br />

          <div className='typestwo'>
            <div className='col-6'>
              <StackOverView />
            </div>
            <div className='col-6'>
              <ProductOverview />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
