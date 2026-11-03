import React from 'react';
import './SecondaryButton.css';

const SecondaryButton = ({
  children,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  ...rest
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`secondary-btn ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
