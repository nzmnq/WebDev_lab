import React from 'react';
import './Spinner.css';

const Spinner = ({ label = 'Завантаження...' }) => {
  return (
    <div className="spinner-container" role="status" aria-live="polite">
      <div className="loader" aria-hidden="true">Loading...</div>
      {label && <span className="spinner-label">{label}</span>}
    </div>
  );
};

export default Spinner;
