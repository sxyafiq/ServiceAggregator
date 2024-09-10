// /src/components/ServiceCard.js
import React from 'react';
import { FaFacebook, FaWhatsapp, FaStar, FaUser } from 'react-icons/fa';
import './ServiceCard.css'; // Import CSS for this component

function ServiceCard({ rank, name, googleLink, facebookLink, whatsappLink, inhouseRating, price }) {
  return (
    <div className="service-card">
      <div className="rank">{rank}.</div>
      <div className="details">
        <h3>{name}</h3>
        <div className="ratings">
          <FaUser />
          {Array(inhouseRating).fill().map((_, i) => (
            <FaStar key={i} className="star" />
          ))}
        </div>
        <div className="links">
          <a href={facebookLink} target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
        </div>
        <div className="info">
          <p>IN-HOUSE RATING</p>
          <p>PRICING: {price}</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
