import React from 'react';

function Testimonials() {
  return (
    <section id="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials-container">
        <div className="testimonial">
          <blockquote>
            "HeartCare's services have truly made a difference in my life. I'm grateful for their expertise and care."
          </blockquote>
          <p>- John Doe</p>
        </div>
        <div className="testimonial">
          <blockquote>
            "The team at HeartCare is exceptional. They go above and beyond to ensure patient satisfaction."
          </blockquote>
          <p>- Jane Smith</p>
        </div>
      </div>
      <button>View More Testimonials</button>
    </section>
  );
}

export default Testimonials;