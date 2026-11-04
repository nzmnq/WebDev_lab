import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useHelicopters } from '../../context/HelicoptersContext';
import PrimaryButton from '../../components/ui/PrimaryButton/PrimaryButton';
import './ItemPage.css';

const ItemPage = () => {
  const { id } = useParams();
  const { helicopters } = useHelicopters();

  const helicopter = helicopters.find((item) => item.id === Number(id));

  if (!helicopter) {
    return (
      <div className="item-container">
        <div className="card">
          <div className="card__body">
            <h2 className="card__title">Вертоліт не знайдено</h2>
            <Link to="/catalog">
              <PrimaryButton>Back to Catalog</PrimaryButton>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="item-container">
      <article className="card">
        <div className="card__image item-image">
          <span className="card__image-text">235x180</span>
        </div>
        <div className="card__body">
          <h1 className="card__title">{helicopter.name}</h1>
          <p className="card__desc">{helicopter.description}</p>
          <p className="card__specs">
            <strong>Категорія:</strong> {helicopter.category}
            <br />
            <strong>Макс. швидкість:</strong> {helicopter.maxSpeed} км/год
            <br />
            <strong>Пасажири:</strong> {helicopter.passengers} місць
          </p>
          <div className="card__updated">Last updated 3 mins ago</div>
          <div className="card__actions">
            <Link to="/catalog" className="card__link">
              <PrimaryButton className="btn-card-edit">Back to Catalog</PrimaryButton>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ItemPage;
