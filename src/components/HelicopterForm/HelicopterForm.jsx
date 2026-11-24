import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../ui/PrimaryButton/PrimaryButton';
import Select from '../ui/Select/Select';
import '../../pages/CreateHelicopter/CreateHelicopter.css';

const CATEGORY_OPTIONS = [
  { value: 'civilian', label: 'Цивільний' },
  { value: 'military', label: 'Військовий' },
  { value: 'transport', label: 'Транспортний' },
  { value: 'rescue', label: 'Рятувальний' }
];

const validateFields = ({ name, description, maxSpeed, passengers }) => {
  const trimmedName = name.trim();
  const trimmedDesc = description.trim();
  const speedNum = Number(maxSpeed);
  const passengersNum = Number(passengers);

  if (trimmedName.length < 3) {
    return 'Title must be at least 3 characters long.';
  }
  if (trimmedDesc.length < 10 || trimmedDesc.length > 300) {
    return 'Description must be between 10 and 300 characters.';
  }
  if (!maxSpeed || Number.isNaN(speedNum) || speedNum < 50 || speedNum > 600) {
    return 'Max speed must be between 50 and 600 km/h.';
  }
  if (!passengers || Number.isNaN(passengersNum) || passengersNum < 1 || passengersNum > 150) {
    return 'Passenger capacity must be between 1 and 150.';
  }

  return '';
};

const HelicopterForm = ({
  title,
  initialValues = {},
  submitLabel,
  submittingLabel,
  cancelTo,
  cancelLabel,
  onSubmit
}) => {
  const [name, setName] = useState(initialValues.name || '');
  const [description, setDescription] = useState(initialValues.description || '');
  const [maxSpeed, setMaxSpeed] = useState(
    initialValues.maxSpeed !== undefined ? String(initialValues.maxSpeed) : ''
  );
  const [passengers, setPassengers] = useState(
    initialValues.passengers !== undefined ? String(initialValues.passengers) : ''
  );
  const [category, setCategory] = useState(initialValues.category || 'civilian');
  const [image, setImage] = useState(initialValues.image || '');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateFields({ name, description, maxSpeed, passengers });
    if (validationError) {
      setError(validationError);
      return;
    }

    setError('');
    setIsSubmitting(true);
    try {
      await onSubmit({
        name: name.trim(),
        description: description.trim(),
        maxSpeed: Number(maxSpeed),
        passengers: Number(passengers),
        category,
        image: image.trim()
      });
    } catch (err) {
      setError('Request failed. Please check that the backend server is running.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="form-container">
      <h1 className="form-title">{title}</h1>

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
            options={CATEGORY_OPTIONS}
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

        <div className="form-group">
          <label htmlFor="image" className="form-label">Image path or URL</label>
          <input
            type="text"
            id="image"
            className="form-input"
            placeholder="e.g. /images/1.jpg"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <span className="form-hint">Optional path or URL</span>
        </div>

        {error && <div className="form-alert visible">{error}</div>}

        <PrimaryButton type="submit" className="btn-submit" disabled={isSubmitting}>
          {isSubmitting ? submittingLabel : submitLabel}
        </PrimaryButton>

        <Link to={cancelTo} className="btn-back">
          {cancelLabel}
        </Link>
      </form>
    </div>
  );
};

export default HelicopterForm;
