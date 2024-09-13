import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/ServiceShowcase.css';

const services = [
  { id: 1, name: 'Plumbing Services', description: 'Reliable plumbing for your home.', imgSrc: '/assets/images/plumbing.jpg' },
  { id: 2, name: 'Electrical Services', description: 'Professional electrical services.', imgSrc: '/assets/images/electrical.jpg' },
  { id: 3, name: 'Home Cleaning', description: 'Book trusted cleaning services.', imgSrc: '/assets/images/cleaning.jpg' },
];

const ServiceShowcase = () => {
  return (
    <section className="service-showcase">
      <h2>Our Services</h2>
      <div className="service-grid">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            <img src={service.imgSrc} alt={service.name} />
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            {/* Link to the ServicePage using the service ID */}
            <Link to={`/service/${service.id}`} className="service-link">Learn More</Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceShowcase;
