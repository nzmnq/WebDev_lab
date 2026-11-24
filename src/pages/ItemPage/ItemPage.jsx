import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getHelicopterById } from '../../api/helicoptersApi';
import Spinner from '../../components/Spinner/Spinner';
import { useHelicopters } from '../../context/HelicoptersContext';
import PrimaryButton from '../../components/ui/PrimaryButton/PrimaryButton';
import SecondaryButton from '../../components/ui/SecondaryButton/SecondaryButton';
import './ItemPage.css';

const ItemPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { removeHelicopter } = useHelicopters();

  const [helicopter, setHelicopter] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState('');
  const [actionError, setActionError] = useState('');
  const [isRemoving, setIsRemoving] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    const loadItem = async () => {
      setIsLoading(true);
      setNotFound(false);
      setError('');
      setActionError('');
      try {
        const data = await getHelicopterById(id, controller.signal);
        setHelicopter(data);
      } catch (err) {
        if (err.name === 'CanceledError' || err.code === 'ERR_CANCELED' || controller.signal.aborted) {
          return;
        }
        if (err.response?.status === 404) {
          setNotFound(true);
        } else {
          setError('Не вдалося завантажити дані вертольота.');
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    loadItem();
    return () => controller.abort();
  }, [id, reloadKey]);

  const handleRemove = async () => {
    setIsRemoving(true);
    setActionError('');
    try {
      await removeHelicopter(helicopter.id);
      navigate('/catalog');
    } catch (err) {
      setActionError('Не вдалося видалити вертоліт. Спробуйте ще раз.');
      setIsRemoving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="item-container">
        <Spinner label="Завантаження інформації..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="item-container">
        <div className="card">
          <div className="card__body">
            <h2 className="card__title">Помилка завантаження</h2>
            <p className="card__desc">{error}</p>
            <div className="card__actions item-actions">
              <PrimaryButton
                className="btn-card-edit"
                onClick={() => setReloadKey((prev) => prev + 1)}
              >
                Спробувати знову
              </PrimaryButton>
              <Link to="/catalog" className="card__link">
                <SecondaryButton className="btn-card-back">Back to Catalog</SecondaryButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (notFound || !helicopter) {
    return (
      <div className="item-container">
        <div className="card">
          <div className="card__body">
            <h2 className="card__title">Вертоліт не знайдено</h2>
            <div className="card__actions item-actions">
              <Link to="/catalog" className="card__link">
                <PrimaryButton className="btn-card-edit">Back to Catalog</PrimaryButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="item-container">
      <article className="card">
        <div className="card__image item-image">
          {helicopter.image ? (
            <img src={helicopter.image} alt={helicopter.name} className="card__img" />
          ) : (
            <span className="card__image-text">235x180</span>
          )}
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
          {actionError && <div className="item-error-alert">{actionError}</div>}
          <div className="card__actions item-actions">
            <Link to={`/edit/${helicopter.id}`} className="card__link">
              <PrimaryButton className="btn-card-edit">Edit</PrimaryButton>
            </Link>
            <SecondaryButton
              className="btn-card-remove"
              onClick={handleRemove}
              disabled={isRemoving}
            >
              {isRemoving ? 'Removing...' : 'Remove'}
            </SecondaryButton>
            <Link to="/catalog" className="card__link">
              <SecondaryButton className="btn-card-back">Back to Catalog</SecondaryButton>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ItemPage;
