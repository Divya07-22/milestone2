import React from 'react';

function Services() {
  return (
    <section id="services">
      <h2>Services</h2>
      <div className="services-container">
        <div className="service">
          <h3>Cardiac Consultation</h3>
          <p>Our experienced cardiologists provide thorough consultation services to diagnose and treat various heart conditions.</p>
        </div>
        <div className="service">
          <h3>Diagnostic Tests</h3>
          <p>We offer a range of diagnostic tests including ECG, echocardiogram, stress tests, and more to accurately assess heart health.</p>
        </div>
        <div className="service">
          <h3>Cardiac Rehabilitation</h3>
          <p>Our rehabilitation program focuses on improving heart health through exercise, lifestyle modifications, and education.</p>
        </div>
        <div className="service">
          <h3>Heart Surgery</h3>
          <p>For patients requiring surgical intervention, our skilled surgeons perform various cardiac procedures with utmost care and precision.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;