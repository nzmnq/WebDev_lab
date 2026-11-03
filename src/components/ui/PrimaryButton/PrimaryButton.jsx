import React from 'react';
import './PrimaryButton.css';

const PrimaryButton = ({
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
      className={`primary-btn ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
