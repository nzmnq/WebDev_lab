import React from 'react';
import HelicopterCard from '../HelicopterCard/HelicopterCard';
import './HelicopterList.css';

const HelicopterList = ({ helicopters }) => {
  const categories = [
    'All Fleet',
    'Military & Tactical',
    'Heavy Lift',
    'Emergency & Police',
    'Civilian & Utility'
  ];

  return (
    <section className="helicopter-list" id="fleet">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-header__subtitle">Premier Aircraft Inventory</span>
          <h2 className="section-header__title">Featured Helicopter Fleet</h2>
          <p className="section-header__description">
            Explore our curated inventory of premier helicopters available for commercial acquisition,
            tactical deployment, and corporate VIP charter.
          </p>
        </div>

        {/* Category Filters (View-Only) */}
        <div className="fleet-filters">
          {categories.map((category, index) => (
            <button
              key={category}
              type="button"
              className={`fleet-filter-btn ${index === 0 ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="helicopter-list__grid">
          {helicopters.map((helicopter) => (
            <HelicopterCard key={helicopter.id} helicopter={helicopter} />
          ))}
        </div>

        {/* View All Bottom Banner */}
        <div className="helicopter-list__bottom">
          <button type="button" className="btn-view-all">
            <span>View Complete Helicopter Catalog</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="btn-arrow-icon">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HelicopterList;
