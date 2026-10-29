import React from 'react';
import FeatureCard from './FeatureCard';
import './Features.css';

const Features = () => {
  const featuresData = [
    {
      id: 1,
      title: 'Certified Airworthiness',
      description: 'Every aircraft in our fleet undergoes strict 150-point technical inspections conforming to FAA & EASA standards.',
      badge: 'Certified',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Rapid Global Delivery',
      description: 'Turnkey international logistics including ferry flights, maritime shipping, and custom import clearances to any hangar.',
      badge: 'Global',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Peak High-Speed Performance',
      description: 'Turbine-powered rotorcraft with high operational ceiling, low vibration, and advanced digital flight control avionics.',
      badge: 'High Spec',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      )
    },
    {
      id: 4,
      title: '24/7 MRO Maintenance Support',
      description: 'Continuous technical support, original manufacturer (OEM) replacement components, and specialized flight crew training.',
      badge: 'Support',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      )
    }
  ];

  return (
    <section className="features" id="features">
      <div className="container">
        {/* Section Heading */}
        <div className="section-header">
          <span className="section-header__subtitle">Why Choose HeliCraft</span>
          <h2 className="section-header__title">Unrivaled Standards in Rotorcraft Aviation</h2>
          <p className="section-header__description">
            We provide comprehensive aviation acquisition, engineering inspections, and technical
            support trusted by government agencies, corporate clients, and private aviators worldwide.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="features__grid">
          {featuresData.map((item) => (
            <FeatureCard
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
              badge={item.badge}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
