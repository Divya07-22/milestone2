import React from 'react';

function ContactUs() {
  return (
    <section id="contact">
      <h2>Contact Us</h2>
      <div className="contact-info">
        <p>Phone: 123-456-7890</p>
        <p>Email: info@heartcare.com</p>
        <p>Address: 123 HeartCare Street, City, Country</p>
      </div>
      <div className="contact-form">
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
}

export default ContactUs;