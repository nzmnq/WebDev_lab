import React from 'react';
import './HelicopterCard.css';

const HelicopterCard = ({ helicopter }) => {
  const {
    name,
    category,
    tag,
    passengers,
    maxSpeed,
    price,
    rating,
    description,
    image,
    featured
  } = helicopter;

  return (
    <article className={`heli-card ${featured ? 'heli-card--featured' : ''}`}>
      {/* Top Banner / Tags */}
      <div className="heli-card__tags">
        <span className="heli-card__category">{category}</span>
        {tag && <span className="heli-card__tag">{tag}</span>}
      </div>

      {/* Media / Image */}
      <div className="heli-card__media">
        <img
          src={image}
          alt={name}
          className="heli-card__image"
          loading="lazy"
        />
        <div className="heli-card__badge-rating">
          <svg className="star-icon" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          <span>{rating}</span>
        </div>
      </div>

      {/* Body Content */}
      <div className="heli-card__body">
        <h3 className="heli-card__title">{name}</h3>
        <p className="heli-card__description">{description}</p>

        {/* Specifications Grid */}
        <div className="heli-card__specs">
          <div className="spec-pill" title="Cruising / Max Speed">
            <svg className="spec-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
            <div className="spec-text">
              <span className="spec-value">{maxSpeed} km/h</span>
              <span className="spec-label">Max Speed</span>
            </div>
          </div>

          <div className="spec-pill" title="Passenger Capacity">
            <svg className="spec-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <div className="spec-text">
              <span className="spec-value">{passengers} pax</span>
              <span className="spec-label">Capacity</span>
            </div>
          </div>
        </div>

        {/* Footer / Pricing & Actions */}
        <div className="heli-card__footer">
          <div className="heli-card__pricing">
            <span className="price-label">Starting Price</span>
            <span className="price-amount">{price}</span>
          </div>

          <button type="button" className="heli-card__btn-view">
            <span>Details</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="btn-arrow-icon">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
};

export default HelicopterCard;
