import React from 'react';

function Appointment() {
  return (
    <section id="appointment">
      <h2>Appointment</h2>
      <div className="appointment-form">
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
            <label htmlFor="date">Preferred Appointment Date:</label>
            <input type="date" id="date" name="date" required />
          </div>
          <div className="form-group">
            <label htmlFor="reason">Reason for Visit:</label>
            <textarea id="reason" name="reason" rows="4" required></textarea>
          </div>
          <button type="submit">Schedule Appointment</button>
        </form>
      </div>
    </section>s
  );
}

export default Appointment;