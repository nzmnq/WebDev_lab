import React from 'react';
import HelicopterCard from '../../components/HelicopterCard/HelicopterCard';
import PrimaryButton from '../../components/ui/PrimaryButton/PrimaryButton';
import SecondaryButton from '../../components/ui/SecondaryButton/SecondaryButton';
import Select from '../../components/ui/Select/Select';
import { INITIAL_HELICOPTERS } from '../../data/helicopters';
import './Catalog.css';

const Catalog = () => {
  // Category filter options
  const categoryOptions = [
    { value: 'all', label: 'All Categories' },
    { value: 'military', label: 'Military & Tactical' },
    { value: 'transport', label: 'Heavy Lift / Transport' },
    { value: 'rescue', label: 'Emergency & Rescue' },
    { value: 'civilian', label: 'Civilian & Commercial' }
  ];

  // Passenger capacity options
  const capacityOptions = [
    { value: 'all', label: 'Any Passenger Capacity' },
    { value: 'small', label: '1 - 10 Passengers' },
    { value: 'medium', label: '11 - 30 Passengers' },
    { value: 'large', label: '30+ Passengers' }
  ];

  // Sorting options
  const sortOptions = [
    { value: 'default', label: 'Default Sorting' },
    { value: 'speed-desc', label: 'Speed: Fastest First' },
    { value: 'speed-asc', label: 'Speed: Slowest First' },
    { value: 'passengers-desc', label: 'Capacity: High to Low' }
  ];

  return (
    <div className="catalog-page">
      <div className="catalog-container">
        {/* Title */}
        <div className="catalog-header">
          <h1 className="catalog-title">Helicopter Catalog</h1>
        </div>

        <div className="catalog-filter-bar">
          <div className="catalog-filter-row">
            <Select
              id="category-filter"
              label="Category"
              options={categoryOptions}
              defaultValue="all"
            />

            <Select
              id="capacity-filter"
              label="Capacity"
              options={capacityOptions}
              defaultValue="all"
            />

            <Select
              id="sort-filter"
              label="Sort by"
              options={sortOptions}
              defaultValue="default"
            />

            <div className="catalog-search-group">
              <label htmlFor="catalog-search" className="catalog-search-label">
                Search
              </label>
              <input
                id="catalog-search"
                type="text"
                className="catalog-search-input"
                placeholder="Type model or description..."
                readOnly
              />
            </div>
          </div>

          <div className="catalog-actions-row">
            <PrimaryButton className="catalog-btn-apply">
              Apply Filter
            </PrimaryButton>
            <SecondaryButton className="catalog-btn-reset">
              Reset
            </SecondaryButton>
          </div>
        </div>

        <div className="catalog-grid">
          {INITIAL_HELICOPTERS.map((helicopter) => (
            <HelicopterCard key={helicopter.id} helicopter={helicopter} />
          ))}
        </div>

        <div className="catalog-footer-actions">
          <PrimaryButton className="catalog-btn-view-more">
            View More
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
