import React from 'react';
import './SecondaryButton.css';

const SecondaryButton = ({ children, onClick, type = 'button', className = '' }) => {
  return (
    <button type={type} onClick={onClick} className={`secondary-btn ${className}`}>
      {children}
    </button>
  );
};

export default SecondaryButton;
