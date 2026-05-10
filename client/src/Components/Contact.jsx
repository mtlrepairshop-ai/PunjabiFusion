import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>
          <span>Need Help?</span>{" "}
          <span className="description-title">Contact Us</span>
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="mb-5">
          <iframe
            style={{ width: "100%", height: "400px" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.5811033862674!2d-82.1130023257729!3d34.91696047158124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885783b57e85b04f%3A0xc9d2db8ba73f85ed!2sPunjabi%20Fusion%20Grill%20(PFG)!5e0!3m2!1sen!2s!4v1751477380328!5m2!1sen!2s"
            frameBorder="0"
            allowFullScreen=""
            loading="lazy"
            title="Punabi Fusion"
          ></iframe>
        </div>

        <div className="row gy-4">
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

export default Contact;
