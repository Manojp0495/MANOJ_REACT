import React from 'react';
import './styles.css';

const Shimmer = () => {
  const cards = Array.from({ length: 30 }); // Create an array of 30 cards

  return (
    <div className="container">
      <div className="card-container">
        {cards.map((_, index) => (
          <div key={index} className="card">
            {/* Card content can go here, e.g., image, title, price */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;