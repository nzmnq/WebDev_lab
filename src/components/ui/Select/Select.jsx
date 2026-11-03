import React from 'react';
import './Select.css';

const Select = ({
  id,
  name,
  label,
  options = [],
  value,
  onChange,
  disabled = false,
  className = '',
  placeholder,
  ...rest
}) => {
  return (
    <div className={`select-group ${className}`}>
      {label && (
        <label htmlFor={id} className="select-label">
          {label}
        </label>
      )}
      <div className="select-wrapper">
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className="select-control"
          {...rest}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt, index) => {
            const val = typeof opt === 'object' ? opt.value : opt;
            const text = typeof opt === 'object' ? opt.label : opt;
            return (
              <option key={index} value={val}>
                {text}
              </option>
            );
          })}
        </select>
        <span className="select-arrow">▼</span>
      </div>
    </div>
  );
};

export default Select;
