import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <div className="header__brand">MyHeli</div>
        <nav className="header__nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `header__nav-item ${isActive ? 'active' : ''}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/catalog"
            className={({ isActive }) => `header__nav-item ${isActive ? 'active' : ''}`}
          >
            Catalog
          </NavLink>
          <NavLink
            to="/create"
            className={({ isActive }) => `header__nav-item ${isActive ? 'active' : ''}`}
          >
            Create Helicopter
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
