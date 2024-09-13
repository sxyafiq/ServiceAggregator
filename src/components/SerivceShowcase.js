import React from 'react';
import '../assets/styles/ServiceShowcase.css';  // Ensure your styles are properly linked

const services = [
  { name: 'Plumbing Service', description: 'Reliable plumbing services.', imgSrc: '/assets/images/plumbing.jpg' },
  { name: 'Electricians', description: 'Certified electricians for your home.', imgSrc: '/assets/images/electricians.jpg' },
  { name: 'Home Cleaning', description: 'Trusted home cleaning services.', imgSrc: '/assets/images/cleaning.jpg' },
  // Add more services as needed
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
