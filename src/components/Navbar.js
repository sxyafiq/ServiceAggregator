import React, { useState } from 'react';
import '../assets/styles/Navbar.css';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">Logo</a>
      </div>
      <ul className="navbar-links">
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <a href="#mac">Mac</a>
          {isHovered && (
            <div className="dropdown-menu">
              {/* Dropdown content */}
              <div className="dropdown-content">
                <div className="dropdown-column">
                  <h4>Shop the Latest</h4>
                  <ul>
                    <li><a href="#">Mac</a></li>
                    <li><a href="#">iPad</a></li>
                    <li><a href="#">iPhone</a></li>
                  </ul>
                </div>
                <div className="dropdown-column">
                  <h4>Quick Links</h4>
                  <ul>
                    <li><a href="#">Find a Store</a></li>
                    <li><a href="#">Order Status</a></li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </li>
        <li><a href="#ipad">iPad</a></li>
        <li><a href="#iphone">iPhone</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
