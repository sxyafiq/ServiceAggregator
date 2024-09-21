import React, { useState } from 'react';
import '../assets/styles/Navbar.css';

// Define types for the service categories and services
interface ServiceCategory {
  category: string;
  services: string[];
}

// Define the service categories with types
const categories = [
  {
    category: 'Home Services',
    services: ['Cleaning Services', 'Plumbing Services', 'Electrical Services'],
  },
  {
    category: 'Automotive Services',
    services: ['Car Repairs', 'Car Detailing', 'Roadside Assistance'],
  },
  {
    category: 'Health & Wellness',
    services: ['Fitness Training', 'Massage Therapy', 'Nutrition & Diet'],
  },
  {
    category: 'Technology & IT',
    services: ['Computer Repair', 'Networking & Wi-Fi', 'Software Development'],
  },
];

const NavBar: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div className="navbar-container">
      {isHovered && <div className="navbar-overlay"></div>}
      <nav
        className="navbar"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          {/* Keep your existing categories intact */}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;