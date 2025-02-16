import React, { useState } from 'react';
import './Dropdown.css';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const toggleDropdown = (e) => {
    e.stopPropagation(); // Prevents unwanted event bubbling
    setIsOpen((prev) => !prev);
  };

  return (
    <div 
      className="dropdown" 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      <button className="dropdown-button" onClick={toggleDropdown}>
        <span className={`arrow ${isOpen ? 'open' : ''}`}></span>
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <ul>
            <button>Sign in 📩  </button>
            <button>Our Mission..</button>
            <button>Our Partners</button>
            <button>Contact Us!</button>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
