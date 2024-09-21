import React, { useState } from 'react';
import '../assets/styles/Navbar.css';

// Define the service categories with types
const categories = [
  {
    category: 'Services',
    services: [
      { subsection: 'Home Services', items: ['Cleaning', 'Plumbing', 'Electrical'] },
      { subsection: 'Business Services', items: ['Consulting', 'Marketing', 'IT Solutions'] },
    ],
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
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const handleMouseEnter = (category: string) => {
    setHoveredCategory(category);
  };

  const handleMouseLeave = () => {
    setHoveredCategory(null);
  };

  return (
    <div className="navbar-container">
      {hoveredCategory && <div className="navbar-overlay"></div>}
      <nav className="navbar">
        <ul className="nav-links">
          {categories.map((item, index) => (
            <li
              key={index}
              className="nav-category"
              onMouseEnter={() => handleMouseEnter(item.category)}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#">{item.category}</a>

              {/* Check if services contain subsections */}
              {hoveredCategory === item.category && item.services && Array.isArray(item.services) && (
                <ul className="dropdown">
                  {item.services.map((service: any, serviceIndex: number) =>
                    typeof service === 'object' ? (
                      <li key={serviceIndex}>
                        <a href="#">{service.subsection}</a>
                        <ul className="dropdown-subsection">
                          {service.items.map((subitem: string, subitemIndex: number) => (
                            <li key={subitemIndex}>
                              <a href="#">{subitem}</a>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ) : (
                      <li key={serviceIndex}>
                        <a href="#">{service}</a>
                      </li>
                    )
                  )}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;