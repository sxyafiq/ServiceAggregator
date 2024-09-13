import React from 'react';
import { useParams } from 'react-router-dom';

// Example service data (In real applications, this would come from an API or global state)
const services = [
  { id: 1, name: 'Plumbing Services', description: 'Reliable plumbing for your home.', imgSrc: '/assets/images/plumbing.jpg', details: 'We provide high-quality plumbing services.' },
  { id: 2, name: 'Electrical Services', description: 'Professional electrical services.', imgSrc: '/assets/images/electrical.jpg', details: 'Certified electricians for any electrical needs.' },
  { id: 3, name: 'Home Cleaning', description: 'Book trusted cleaning services.', imgSrc: '/assets/images/cleaning.jpg', details: 'Top-notch cleaning services for homes and offices.' },
];

const ServicePage = () => {
  const { id } = useParams();  // Extract the service ID from the URL
  const service = services.find(service => service.id === parseInt(id));  // Find the service by ID

  if (!service) {
    return <div>Service not found.</div>;
  }

  return (
    <div className="service-page">
      <h1>{service.name}</h1>
      <img src={service.imgSrc} alt={service.name} />
      <p>{service.details}</p>
    </div>
  );
};

export default ServicePage;
