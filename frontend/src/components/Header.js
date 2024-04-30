import React from 'react';

function Header() {
  return (
    <header>
      <div className="logo">
        HeartCare Logo
      </div>
      <nav>
        <ul>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#appointment">Appointment</a></li>
          <li><a href="#resources">Resources</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
      <button className="cta-button">Schedule Appointment</button>
    </header>
  );
}

export default Header;