import React from 'react';
import HelicopterCard from '../HelicopterCard/HelicopterCard';
import './CardsGrid.css';

const CardsGrid = ({ helicopters = [] }) => {
  return (
    <section className="content">
      <div className="cards-grid" id="cards-grid">
        {helicopters.length === 0 ? (
          <div className="cards-empty">
            Вертольотів за запитом не знайдено.
          </div>
        ) : (
          helicopters.map((heli) => (
            <HelicopterCard key={heli.id} helicopter={heli} />
          ))
        )}
      </div>
    </section>
  );
};

export default CardsGrid;
