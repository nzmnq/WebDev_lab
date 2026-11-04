import React from 'react';
import HelicopterCard from '../../components/HelicopterCard/HelicopterCard';
import SecondaryButton from '../../components/ui/SecondaryButton/SecondaryButton';
import Select from '../../components/ui/Select/Select';
import { INITIAL_HELICOPTERS } from '../../data/helicopters';
import './Catalog.css';

const Catalog = () => {
  const categoryOptions = [
    { value: 'all', label: 'Усі категорії' },
    { value: 'military', label: 'Військовий' },
    { value: 'transport', label: 'Транспортний' },
    { value: 'rescue', label: 'Рятувальний' },
    { value: 'civilian', label: 'Цивільний' }
  ];

  const capacityOptions = [
    { value: 'all', label: 'Будь-яка місткість' },
    { value: 'small', label: 'До 10 пасажирів' },
    { value: 'medium', label: '11 - 30 пасажирів' },
    { value: 'large', label: 'Більше 30 пасажирів' }
  ];

  return (
    <div className="catalog-page">
      <div className="catalog-filters">
        <Select
          id="category-select"
          label="Категорія"
          options={categoryOptions}
        />

        <Select
          id="capacity-select"
          label="Пасажиромісткість"
          options={capacityOptions}
        />

        <div className="catalog-search">
          <label htmlFor="catalog-search-input" className="catalog-search__label">
            Пошук за назвою або описом
          </label>
          <input
            id="catalog-search-input"
            type="text"
            className="catalog-search__input"
            placeholder="Введіть текст..."
            readOnly
          />
        </div>

        <div className="catalog-reset">
          <SecondaryButton>Clear</SecondaryButton>
        </div>
      </div>

      <div className="cards-grid">
        {INITIAL_HELICOPTERS.map((item) => (
          <HelicopterCard key={item.id} helicopter={item} />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
