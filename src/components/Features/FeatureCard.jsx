import React from 'react';

const FeatureCard = ({ icon, title, description, badge }) => {
  return (
    <div className="feature-card">
      <div className="feature-card__header">
        <div className="feature-card__icon-wrap">
          {icon}
        </div>
        {badge && <span className="feature-card__badge">{badge}</span>}
      </div>
      <h3 className="feature-card__title">{title}</h3>
      <p className="feature-card__description">{description}</p>
    </div>
  );
};

export default FeatureCard;
