import React from 'react';
import '../assets/styles/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Discover Revolutionary Services</h1>
        <p>Leading the way to innovative solutions for your everyday needs.</p>
        <a href="#services" className="hero-btn">Explore Now</a>
      </div>
    </section>
  );
};

export default HeroSection;
