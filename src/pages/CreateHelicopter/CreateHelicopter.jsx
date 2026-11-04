import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useHelicopters } from '../../context/HelicoptersContext';
import PrimaryButton from '../../components/ui/PrimaryButton/PrimaryButton';
import Select from '../../components/ui/Select/Select';
import './CreateHelicopter.css';

const CreateHelicopter = () => {
  const navigate = useNavigate();
  const { addHelicopter } = useHelicopters();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [maxSpeed, setMaxSpeed] = useState('');
  const [passengers, setPassengers] = useState('');
  const [category, setCategory] = useState('civilian');
  const [error, setError] = useState('');

  const categoryOptions = [
    { value: 'civilian', label: 'Цивільний' },
    { value: 'military', label: 'Військовий' },
    { value: 'transport', label: 'Транспортний' },
    { value: 'rescue', label: 'Рятувальний' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim().length < 3 || description.trim().length < 10 || !maxSpeed || !passengers) {
      setError('Please fill in all fields correctly.');
      return;
    }

    addHelicopter({
      name: name.trim(),
      description: description.trim(),
      maxSpeed: Number(maxSpeed),
      passengers: Number(passengers),
      category
    });

    navigate('/catalog');
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Create helicopter</h1>

      <form className="form" onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="name" className="form-label">Title</label>
          <input
            type="text"
            id="name"
            className="form-input"
            placeholder="e.g. Sikorsky UH-60"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span className="form-hint">At least 3 characters</span>
        </div>

        <div className="form-group">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            id="description"
            className="form-textarea"
            placeholder="Enter a brief description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <span className="form-hint">Between 10 and 300 characters</span>
        </div>

        <div className="form-group">
          <Select
            id="category"
            label="Category"
            options={categoryOptions}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="maxSpeed" className="form-label">Max speed (km/h)</label>
          <input
            type="number"
            id="maxSpeed"
            className="form-input"
            placeholder="e.g. 295"
            value={maxSpeed}
            onChange={(e) => setMaxSpeed(e.target.value)}
          />
          <span className="form-hint">From 50 to 600 km/h</span>
        </div>

        <div className="form-group">
          <label htmlFor="passengers" className="form-label">Passenger capacity</label>
          <input
            type="number"
            id="passengers"
            className="form-input"
            placeholder="e.g. 14"
            value={passengers}
            onChange={(e) => setPassengers(e.target.value)}
          />
          <span className="form-hint">From 1 to 150 passengers</span>
        </div>

        {error && <div className="form-alert visible">{error}</div>}

        <PrimaryButton type="submit" className="btn-submit">
          Create
        </PrimaryButton>

        <Link to="/catalog" className="btn-back">
          Cancel and return to list
        </Link>
      </form>
    </div>
  );
};

export default CreateHelicopter;
