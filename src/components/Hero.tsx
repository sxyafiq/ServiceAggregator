import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Introducing the new iPhone.</h1>
        <p>The future is here. Discover the most advanced iPhone yet.</p>
        <button className="hero-btn">Learn More</button>
      </div>
    </section>
  );
};

export default Hero;
