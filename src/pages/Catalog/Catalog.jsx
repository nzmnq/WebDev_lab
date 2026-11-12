import React, { useState } from 'react';
import HelicopterCard from '../../components/HelicopterCard/HelicopterCard';
import SecondaryButton from '../../components/ui/SecondaryButton/SecondaryButton';
import Select from '../../components/ui/Select/Select';
import { useHelicopters } from '../../context/HelicoptersContext';
import './Catalog.css';

const Catalog = () => {
  const { helicopters } = useHelicopters();
  const [category, setCategory] = useState('all');
  const [capacity, setCapacity] = useState('all');
  const [search, setSearch] = useState('');

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

  const filteredHelicopters = helicopters.filter((item) => {
    if (category !== 'all' && item.category !== category) {
      return false;
    }

    if (capacity === 'small' && item.passengers > 10) {
      return false;
    }
    if (capacity === 'medium' && (item.passengers <= 10 || item.passengers > 30)) {
      return false;
    }
    if (capacity === 'large' && item.passengers <= 30) {
      return false;
    }

    if (search.trim() !== '') {
      const q = search.trim().toLowerCase();
      const matchName = item.name.toLowerCase().includes(q);
      const matchDesc = item.description.toLowerCase().includes(q);
      if (!matchName && !matchDesc) {
        return false;
      }
    }

    return true;
  });

  const handleReset = () => {
    setCategory('all');
    setCapacity('all');
    setSearch('');
  };

  return (
    <div className="catalog-page">
      <aside className="catalog-sidebar">
        <h2 className="catalog-sidebar__title">Фільтри флоту</h2>

        <div className="catalog-search">
          <label htmlFor="catalog-search-input" className="catalog-search__label">
            Пошук за назвою
          </label>
          <input
            id="catalog-search-input"
            type="text"
            className="catalog-search__input"
            placeholder="Введіть запит..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <Select
          id="category-select"
          label="Категорія"
          options={categoryOptions}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <Select
          id="capacity-select"
          label="Пасажиромісткість"
          options={capacityOptions}
          value={capacity}
          onChange={(e) => setCapacity(e.target.value)}
        />

        <div className="catalog-sidebar__actions">
          <SecondaryButton className="catalog-reset__btn" onClick={handleReset}>
            Очистити фільтри
          </SecondaryButton>
        </div>
      </aside>

      <main className="catalog-content">
        <div className="catalog-header">
          <h1 className="catalog-title">Каталог вертольотів</h1>
          <span className="catalog-count">
            Знайдено: {filteredHelicopters.length}
          </span>
        </div>

        <div className="cards-grid">
          {filteredHelicopters.length === 0 ? (
            <div className="cards-empty">Вертольотів за запитом не знайдено.</div>
          ) : (
            filteredHelicopters.map((item) => (
              <HelicopterCard key={item.id} helicopter={item} />
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default Catalog;
