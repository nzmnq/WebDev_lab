import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <span>MyHeli — Helicopter Fleet Management</span>
        <span>© {new Date().getFullYear()} MyHeli</span>
      </div>
    </footer>
  );
};

export default Footer;
