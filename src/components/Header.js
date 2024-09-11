import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (section) => {
    setActiveDropdown(section);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">Apple</div>
        <nav className="nav-links">
          <div
            className="nav-item"
            onMouseEnter={() => handleMouseEnter('mac')}
            onMouseLeave={handleMouseLeave}
          >
            Mac
            {activeDropdown === 'mac' && (
              <div className="dropdown">
                <div className="dropdown-section">
                  <h3>Explore Mac</h3>
                  <ul>
                    <li>Explore All Mac</li>
                    <li>MacBook Air</li>
                    <li>MacBook Pro</li>
                    <li>iMac</li>
                    <li>Mac mini</li>
                    <li>Mac Studio</li>
                    <li>Mac Pro</li>
                    <li>Displays</li>
                  </ul>
                </div>
                <div className="dropdown-section">
                  <h3>Shop Mac</h3>
                  <ul>
                    <li>Shop Mac</li>
                    <li>Mac Accessories</li>
                    <li>Apple Trade In</li>
                    <li>Financing</li>
                    <li>University Student Offer</li>
                  </ul>
                </div>
                <div className="dropdown-section">
                  <h3>More from Mac</h3>
                  <ul>
                    <li>Mac Support</li>
                    <li>AppleCare+ for Mac</li>
                    <li>macOS Sequoia Preview</li>
                    <li>Apple Intelligence</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Add other nav items in similar structure */}
          <div
            className="nav-item"
            onMouseEnter={() => handleMouseEnter('iphone')}
            onMouseLeave={handleMouseLeave}
          >
            iPhone
            {/* You can add dropdown for iPhone here, following same structure */}
          </div>

          <div
            className="nav-item"
            onMouseEnter={() => handleMouseEnter('watch')}
            onMouseLeave={handleMouseLeave}
          >
            Watch
            {/* You can add dropdown for Watch here, following same structure */}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
