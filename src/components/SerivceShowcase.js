import React from 'react';
import './ServiceShowcase.css';

const services = [
  { name: 'Plumbing Service', description: 'Fast and reliable plumbing.', imgSrc: '/assets/plumbing.jpg' },
  { name: 'Electricians', description: 'Certified electricians for all your needs.', imgSrc: '/assets/electrician.jpg' },
  { name: 'Home Cleaning', description: 'Book a trusted cleaner in minutes.', imgSrc: '/assets/cleaning.jpg' },
  // Add more services here
];

const ServiceShowcase = () => {
  return (
    <section className="service-showcase">
      <h2>Our Services</h2>
      <div className="service-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.imgSrc} alt={service.name} />
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceShowcase;
