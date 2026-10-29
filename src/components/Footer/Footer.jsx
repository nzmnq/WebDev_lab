import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <span className="footer__logo">MyHeli</span>
          <span className="footer__desc">
            Helicopter Fleet Management & Catalog Application
          </span>
        </div>
        <nav className="footer__nav">
          <a href="#my-helicopters" className="footer__nav-link">My Helicopters</a>
          <a href="#create" className="footer__nav-link">Create Helicopter</a>
          <a href="#privacy" className="footer__nav-link">Privacy Policy</a>
        </nav>
        <div className="footer__copyright">
          © {new Date().getFullYear()} MyHeli. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
