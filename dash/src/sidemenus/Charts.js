import React from 'react';
import './Charts.css';
import BudgetChart from '../sidemenus/ButgetChart';
import WebTrafficChart from '../sidemenus/WebTrafficChart';

function Charts() {
  return (
    <div className='types'>
            <div className='cols-6'>
            <div className='headers'>
              <p>ButgetChart</p>
              </div>
              <BudgetChart />
              </div>
            

            <div className='cols-6'>
              <div className='headers'>
                <p>WebTrafficChart</p>
                </div>
              <WebTrafficChart />
              </div>
            
          </div>
  );
}

export default Charts;
