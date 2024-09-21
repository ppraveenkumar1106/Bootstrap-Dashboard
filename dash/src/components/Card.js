import React from 'react';
import './card.css';

const Card = ({ card }) => {
    // Ensure card has expected properties
    const percentageString = Math.abs(card.percentage).toFixed(2);
    const colorClass = card.active ? 'text-success' : 'text-danger';

    return (
        <div className='card info-card sales-card'>
            <div className='card-body'>
                <h5 className='card-title'>{card.name}</h5>
                <div className='cardp d-flex align-items-center'>
                    <div className={`card-icon d-flex align-items-center justify-content-center ${colorClass}`}>
                        <i className={`bi ${card.icon}`}></i>
                    </div>
                    <div className='ps13'>
                        <span className={`small pt-1 fw-bold ${colorClass}`}>
                            {percentageString}%
                        </span>
                        <h6>{`$${card.amount.toLocaleString('en-US')}`}</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
