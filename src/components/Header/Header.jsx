import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container header__container">
        {/* Brand Logo */}
        <div className="header__brand">
          <div className="header__logo-icon">
            <svg
              className="rotor-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M12 9V2" />
              <path d="M12 15v7" />
              <path d="M9 12H2" />
              <path d="M15 12h7" />
              <circle cx="12" cy="12" r="9" strokeDasharray="3 3" opacity="0.6" />
            </svg>
          </div>
          <div className="header__logo-text">
            <span className="brand-name">Heli<span className="brand-highlight">Craft</span></span>
            <span className="brand-tagline">Aviation Fleet</span>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="header__nav" aria-label="Main Navigation">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a href="#home" className="header__nav-link active">Home</a>
            </li>
            <li className="header__nav-item">
              <a href="#fleet" className="header__nav-link">Fleet Catalog</a>
            </li>
            <li className="header__nav-item">
              <a href="#features" className="header__nav-link">Why Us</a>
            </li>
            <li className="header__nav-item">
              <a href="#services" className="header__nav-link">Services</a>
            </li>
            <li className="header__nav-item">
              <a href="#contact" className="header__nav-link">Contact</a>
            </li>
          </ul>
        </nav>

        {/* Header Right Actions */}
        <div className="header__actions">
          <div className="header__search">
            <svg
              className="search-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Search helicopters..."
              className="header__search-input"
              readOnly
            />
          </div>

          <button type="button" className="header__btn-cart" title="Shopping Cart">
            <svg
              className="cart-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            <span className="cart-badge">3</span>
          </button>

          <button type="button" className="header__btn-quote">
            Request Quote
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
