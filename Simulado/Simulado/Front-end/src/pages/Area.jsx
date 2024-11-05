import React from 'react';
//import './Navbar.css';

const Area = () => {
  const areas = Array.from({ length: 10 }, (_, index) => `Área ${index + 1}`);

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {areas.map((area, index) => (
          <li key={index} className="navbar-item">
            <button className="navbar-button">{area}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Area;
