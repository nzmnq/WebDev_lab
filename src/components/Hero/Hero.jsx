import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero__container">
        {/* Left Column: Content */}
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-pulse"></span>
            <span className="hero__badge-text">Official Global Helicopter Fleet</span>
          </div>

          <h1 className="hero__title">
            Next-Generation <br />
            <span className="hero__title-gradient">Aviation Fleet</span> For Every Mission
          </h1>

          <p className="hero__description">
            Discover world-class civil, tactical, and commercial helicopters engineered for
            extreme endurance, rapid transport, and uncompromising passenger safety.
          </p>

          <div className="hero__actions">
            <a href="#fleet" className="hero__btn-primary">
              <span>Explore Helicopter Fleet</span>
              <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a href="#features" className="hero__btn-secondary">
              Learn More
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="hero__stats">
            <div className="hero__stat-item">
              <span className="hero__stat-value">315+</span>
              <span className="hero__stat-label">km/h Top Speed</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat-item">
              <span className="hero__stat-value">55 pax</span>
              <span className="hero__stat-label">Max Capacity</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat-item">
              <span className="hero__stat-value">100%</span>
              <span className="hero__stat-label">FAA / EASA Certified</span>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Visual Card */}
        <div className="hero__visual">
          <div className="hero__card">
            <div className="hero__card-glow"></div>
            <div className="hero__card-header">
              <span className="hero__card-tag">Flagship Model</span>
              <span className="hero__card-status">● In Hangar</span>
            </div>

            <div className="hero__image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80"
                alt="Sikorsky UH-60 Tactical Helicopter"
                className="hero__image"
              />
              <div className="hero__image-overlay"></div>
            </div>

            <div className="hero__card-footer">
              <div className="hero__card-info">
                <h3 className="hero__card-title">Sikorsky UH-60 Black Hawk</h3>
                <p className="hero__card-subtitle">Tactical Air Support & Evacuation</p>
              </div>
              <div className="hero__card-spec">
                <span className="spec-val">295 km/h</span>
                <span className="spec-lbl">Cruising Speed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
