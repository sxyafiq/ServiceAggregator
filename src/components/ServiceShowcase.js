import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/ServiceShowcase.css';

const serviceCategories = [
  {
    category: 'Home Services',
    services: [
      { name: 'Cleaning Services', description: 'Home cleaning, window cleaning, carpet cleaning.' },
      { name: 'Plumbing Services', description: 'Leak repairs, faucet installations, drain cleaning.' },
      { name: 'Electrical Services', description: 'Electrical repairs, wiring, lighting installations.' },
    ],
  },
  {
    category: 'Automotive Services',
    services: [
      { name: 'Car Repairs', description: 'Engine repairs, brake repairs, transmission services.' },
      { name: 'Car Detailing', description: 'Washing, polishing, waxing, interior cleaning.' },
      { name: 'Roadside Assistance', description: 'Towing, tire change, fuel delivery, battery jump-start.' },
    ],
  },
  // Add more categories in a similar way
];

const ServiceShowcase = () => {
  return (
    <section className="service-showcase">
      {serviceCategories.map((category, index) => (
        <div key={index} className="service-category">
          <h2>{category.category}</h2>
          <div className="service-grid">
            {category.services.map((service, idx) => (
              <div key={idx} className="service-card">
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <Link to={`/service/${service.name}`} className="service-link">Learn More</Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ServiceShowcase;
