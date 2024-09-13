import React from 'react';
import '../assets/styles/HeroSection.css'; // Style the hero section

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Discover the Best Services Near You</h1>
        <p>Your one-stop solution for all your service needs.</p>
        <a href="#services" className="hero-btn">Explore Services</a>
      </div>
    </section>
  );
};

export default HeroSection;
