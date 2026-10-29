import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        {/* Top Grid */}
        <div className="footer__grid">
          {/* Brand Info */}
          <div className="footer__brand-col">
            <div className="footer__brand">
              <div className="footer__logo-icon">
                <svg
                  className="rotor-icon-sm"
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
                </svg>
              </div>
              <span className="brand-name">Heli<span className="brand-highlight">Craft</span></span>
            </div>
            <p className="footer__about">
              Premier international broker and fleet operator specializing in certified tactical,
              commercial, and emergency medical helicopters.
            </p>
            <div className="footer__socials">
              <a href="#twitter" className="social-link" title="Twitter / X" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a href="#facebook" className="social-link" title="Facebook" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#linkedin" className="social-link" title="LinkedIn" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="#youtube" className="social-link" title="YouTube" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="footer__nav-col">
            <h4 className="footer__col-title">Navigation</h4>
            <ul className="footer__list">
              <li><a href="#home">Home Page</a></li>
              <li><a href="#fleet">Helicopter Fleet</a></li>
              <li><a href="#features">Why Choose Us</a></li>
              <li><a href="#services">Aviation Services</a></li>
              <li><a href="#contact">Contact Support</a></li>
            </ul>
          </div>

          {/* Col 3: Fleet Models */}
          <div className="footer__nav-col">
            <h4 className="footer__col-title">Featured Models</h4>
            <ul className="footer__list">
              <li><a href="#fleet">Sikorsky UH-60</a></li>
              <li><a href="#fleet">Boeing CH-47 Chinook</a></li>
              <li><a href="#fleet">Eurocopter EC135</a></li>
              <li><a href="#fleet">Bell 206 JetRanger</a></li>
              <li><a href="#fleet">AgustaWestland AW101</a></li>
            </ul>
          </div>

          {/* Col 4: Aviation Centers */}
          <div className="footer__nav-col">
            <h4 className="footer__col-title">Aviation Hub</h4>
            <ul className="footer__contact-list">
              <li className="footer__contact-item">
                <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Kyiv & Lviv Airport Hubs, Ukraine</span>
              </li>
              <li className="footer__contact-item">
                <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>+380 (44) 789-01-23</span>
              </li>
              <li className="footer__contact-item">
                <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>fleet@helicraft-aviation.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © 2026 HeliCraft Aviation Inc. All rights reserved. Web Development Laboratory 6 (React.js).
          </p>
          <div className="footer__bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <span className="dot-divider">•</span>
            <a href="#terms">Terms of Flight Service</a>
            <span className="dot-divider">•</span>
            <a href="#cookies">Cookie Preferences</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
