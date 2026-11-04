import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../ui/PrimaryButton/PrimaryButton';
import SecondaryButton from '../ui/SecondaryButton/SecondaryButton';
import { useHelicopters } from '../../context/HelicoptersContext';
import './HelicopterCard.css';

const HelicopterCard = ({ helicopter }) => {
  const { removeHelicopter } = useHelicopters();
  const { id, name, description, maxSpeed, passengers } = helicopter;

  return (
    <article className="card" data-id={id}>
      <div className="card__image">
        <span className="card__image-text">235x180</span>
      </div>
      <div className="card__body">
        <h3 className="card__title">{name}</h3>
        <p className="card__desc">{description}</p>
        <p className="card__specs">
          <strong>Макс. швидкість:</strong> {maxSpeed} км/год
          <br />
          <strong>Пасажири:</strong> {passengers} місць
        </p>
        <div className="card__updated">Last updated 3 mins ago</div>
        <div className="card__actions">
          <Link to={`/item/${id}`} className="card__link">
            <PrimaryButton className="btn-card-edit">View more</PrimaryButton>
          </Link>
          <SecondaryButton
            className="btn-card-remove"
            onClick={() => removeHelicopter(id)}
          >
            Remove
          </SecondaryButton>
        </div>
      </div>
    </article>
  );
};

export default HelicopterCard;
