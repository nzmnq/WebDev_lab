import React from 'react';
import './PrimaryButton.css';

const PrimaryButton = ({
  children,
  onClick,
  type = 'button',
  className = '',
  disabled = false
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`primary-btn ${className}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
