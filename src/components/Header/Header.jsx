import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import PrimaryButton from '../ui/PrimaryButton/PrimaryButton';
import SecondaryButton from '../ui/SecondaryButton/SecondaryButton';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <Link to="/" className="header__brand">
          MyHeli
        </Link>
        <nav className="header__nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `header__nav-item ${isActive ? 'active' : ''}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/catalog"
            className={({ isActive }) =>
              `header__nav-item ${isActive ? 'active' : ''}`
            }
          >
            Catalog
          </NavLink>
          <button
            type="button"
            className="header__nav-item header__btn-create"
            onClick={(e) => e.preventDefault()}
          >
            Create Helicopter
          </button>
        </nav>
      </div>

      <div className="header__right">
        <input
          type="text"
          id="search-input"
          className="search-input"
          placeholder="Quick search..."
          readOnly
        />
        <PrimaryButton className="header__btn-search">
          Search
        </PrimaryButton>
        <SecondaryButton className="header__btn-clear">
          Clear
        </SecondaryButton>
      </div>
    </header>
  );
};

export default Header;
