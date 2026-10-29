import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <div className="header__brand">MyHeli</div>
        <nav className="header__nav">
          <a href="#my-helicopters" className="header__nav-item active">
            My Helicopters
          </a>
          <a href="#create" className="header__nav-item">
            Create Helicopter
          </a>
        </nav>
      </div>

      <div className="header__right">
        <input
          type="text"
          id="search-input"
          className="search-input"
          placeholder="Type something..."
          readOnly
        />
        <button type="button" id="search-btn" className="btn-search">
          Search
        </button>
        <button type="button" id="clear-btn" className="btn-clear">
          Clear
        </button>
      </div>
    </header>
  );
};

export default Header;
