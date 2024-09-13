import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Discover Amazing Services</h1>
        <p>Your one-stop solution for finding the best local services.</p>
        <a href="#services" className="hero-btn">Explore Services</a>
      </div>
    </section>
  );
};

export default HeroSection;
