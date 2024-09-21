import React, { useState } from 'react';
import '../assets/styles/Navbar.css';

// Define types for the service categories and services
interface ServiceCategory {
  category: string;
  services: string[];
}

// Define the service categories with types
const serviceCategories: ServiceCategory[] = [
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

const Navbar: React.FC = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  // Type category as string
  const handleMouseEnter = (category: string) => {
    setHoveredCategory(category);
  };

  const handleMouseLeave = () => {
    setHoveredCategory(null);
  };

  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <div className="navbar-logo">
          <a href="/">Logo</a>
        </div>
        <ul className="navbar-links">
          {serviceCategories.map((category, index) => (
            <li
              key={index}
              onMouseEnter={() => handleMouseEnter(category.category)}
              onMouseLeave={handleMouseLeave}
            >
              <a href={`#${category.category.toLowerCase().replace(/\s/g, '-')}`}>
                {category.category}
              </a>

              {hoveredCategory === category.category && (
                <div className="dropdown-menu">
                  <div className="dropdown-content">
                    {category.services.map((service, idx) => (
                      <a key={idx} href={`/service/${service.toLowerCase().replace(/\s/g, '-')}`}>
                        {service}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
