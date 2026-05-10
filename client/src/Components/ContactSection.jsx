// src/components/ContactSection.jsx
import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="contact section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p><span>Need Help?</span> <span className="description-title">Contact Us</span></p>
      </div>

      {/* Contact Content */}
      <div className="container" data-aos="fade-up" data-aos-delay="100">
      

        {/* Contact Info & Form */}
        <div className="row gy-4">
          {/* Contact Info */}
          <div className="col-md-6">
            <div className="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="200">
              <i className="icon bi bi-geo-alt flex-shrink-0"></i>
              <div>
                <h3>Address</h3>
                <p>📍 PFGrill – 1395 E Main St, Duncan, SC 29334, United States</p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="300">
              <i className="icon bi bi-telephone flex-shrink-0"></i>
              <div>
                <h3>Call Us</h3>
                <p>+1 (864) 775-8393</p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="400">
              <i className="icon bi bi-envelope flex-shrink-0"></i>
              <div>
                <h3>Email Us</h3>
                <p>pfgduncan@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="500">
              <i className="icon bi bi-clock flex-shrink-0"></i>
              <div>
                <h3>Opening Hours</h3>
<p>
  <strong>Mon–Fri:</strong> 10AM – 10PM<br />
  <strong>Saturday:</strong> 11AM – 9:30PM<br />
  <strong>Sunday:</strong> Closed
</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;