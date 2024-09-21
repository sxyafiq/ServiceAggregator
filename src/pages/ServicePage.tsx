import React from 'react';
import { useParams } from 'react-router-dom';

// Define the service type
interface Service {
  id: number;
  name: string;
  description: string;
  imgSrc: string;
  details: string;
}

// Example service data (In real applications, this would come from an API or global state)
const services: Service[] = [
  { id: 1, name: 'Plumbing Services', description: 'Reliable plumbing for your home.', imgSrc: '/assets/images/plumbing.jpg', details: 'We provide high-quality plumbing services.' },
  { id: 2, name: 'Electrical Services', description: 'Professional electrical services.', imgSrc: '/assets/images/electrical.jpg', details: 'Certified electricians for any electrical needs.' },
  { id: 3, name: 'Home Cleaning', description: 'Book trusted cleaning services.', imgSrc: '/assets/images/cleaning.jpg', details: 'Top-notch cleaning services for homes and offices.' },
];

const ServicePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();  // Expect 'id' to be a string

  // Safely parse 'id' to number, fallback to NaN if undefined
  const service = services.find(service => service.id === parseInt(id ?? '', 10));

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
