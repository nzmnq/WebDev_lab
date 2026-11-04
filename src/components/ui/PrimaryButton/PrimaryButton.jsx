import React from 'react';
import './PrimaryButton.css';

const PrimaryButton = ({ children, onClick, type = 'button', className = '' }) => {
  return (
    <button type={type} onClick={onClick} className={`primary-btn ${className}`}>
      {children}
    </button>
  );
};

export default PrimaryButton;
