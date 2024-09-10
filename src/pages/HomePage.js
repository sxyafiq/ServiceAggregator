import React from 'react';
import ServiceCard from '../components/ServiceCard';
import './HomePage.css';

function HomePage() {
  const services = [
    {
      rank: 1,
      name: "Ah Lim Electrical",
      googleLink: "https://www.google.com/search?q=ah+lim+electrical",
      facebookLink: "https://www.facebook.com/ahlimelectrical",
      whatsappLink: "https://wa.me/11234567890",
      inhouseRating: 5,
      price: "SGD 200",
    },
    {
      rank: 2,
      name: "Ah Seng Electrical",
      googleLink: "https://www.google.com/search?q=ah+seng+electrical",
      facebookLink: "https://www.facebook.com/ahsengelectrical",
      whatsappLink: "https://wa.me/10987654321",
      inhouseRating: 4,
      price: "SGD 180",
    },
    // More service data here...
  ];

  return (
    <div className="home-page">
      <h1 className="home-page-title">Top Electrical Services</h1>
      {services.map(service => (
        <ServiceCard
          key={service.rank}
          rank={service.rank}
          name={service.name}
          googleLink={service.googleLink}
          facebookLink={service.facebookLink}
          whatsappLink={service.whatsappLink}
          inhouseRating={service.inhouseRating}
          price={service.price}
        />
      ))}
    </div>
  );
}

export default HomePage;
