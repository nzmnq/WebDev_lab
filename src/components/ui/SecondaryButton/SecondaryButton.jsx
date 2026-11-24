import React from 'react';
import './SecondaryButton.css';

const SecondaryButton = ({
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
      className={`secondary-btn ${className}`}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
