import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../ui/PrimaryButton/PrimaryButton';
import SecondaryButton from '../ui/SecondaryButton/SecondaryButton';
import { useHelicopters } from '../../context/HelicoptersContext';
import './HelicopterCard.css';

const HelicopterCard = ({
  helicopter,
  showRemove = true,
  withLink = true,
  onRemove
}) => {
  const { removeHelicopter } = useHelicopters();
  const [isRemoving, setIsRemoving] = useState(false);
  const { id, name, description, maxSpeed, passengers } = helicopter;

  const handleRemove = async () => {
    setIsRemoving(true);
    try {
      if (onRemove) {
        await onRemove(id);
      } else {
        await removeHelicopter(id);
      }
    } catch (err) {
      console.error('Failed to remove helicopter:', err);
    } finally {
      setIsRemoving(false);
    }
  };

  return (
    <article className="card" data-id={id}>
      <div className="card__image">
        {helicopter.image ? (
          <img src={helicopter.image} alt={name} className="card__img" />
        ) : (
          <span className="card__image-text">235x180</span>
        )}
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
          {withLink ? (
            <Link to={`/item/${id}`} className="card__link">
              <PrimaryButton className="btn-card-edit">View more</PrimaryButton>
            </Link>
          ) : (
            <PrimaryButton className="btn-card-edit" type="button">
              View more
            </PrimaryButton>
          )}

          {showRemove && (
            <SecondaryButton
              className="btn-card-remove"
              onClick={handleRemove}
              disabled={isRemoving}
            >
              {isRemoving ? 'Removing...' : 'Remove'}
            </SecondaryButton>
          )}
        </div>
      </div>
    </article>
  );
};

export default HelicopterCard;
