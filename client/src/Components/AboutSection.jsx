// src/components/AboutSection.jsx
import React from 'react';
import aboutImg from '../assets/img/about-2.jpg';
import aboutImg2 from '../assets/img/about.jpg';


const AboutSection = () => {
  return (
    <section id="about" className="about section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>About Us</h2>
        <p><span>Learn More</span> <span className="description-title">About Us</span></p>
      </div>{/* End Section Title */}

      <div className="container">
        <div className="row gy-4">
          {/* Left Image Column */}
          <div className="col-lg-7" data-aos="fade-up" data-aos-delay="100">
            <img src={aboutImg2} className="img-fluid mb-4" alt="About" />
            <div className="book-a-table">
              <h3>Book a Table</h3>
              <p>+1 (864) 775-8393</p>
            </div>
          </div>

          {/* Right Content Column */}
          <div className="col-lg-5" data-aos="fade-up" data-aos-delay="250">
            <div className="content ps-0 ps-lg-5">
              <p className="fst-italic">
              Welcome to <strong>PFGrill</strong> — where flavor meets comfort! Located in the heart of Duncan, South Carolina, PFGrill is your go-to destination for freshly grilled dishes, hearty meals, and a warm, inviting atmosphere.</p>

              {/* Features List */}
              <ul>
                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  <span>Our mission is simple: serve delicious, high-quality food made from the freshest ingredients, while making every guest feel like family. Whether you're stopping by for a casual lunch, a cozy dinner, or a quick bite on the go,<br/> you'll always be greeted with a smile and served with care.</span>
                </li>
                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  <span>  At PFGrill, we specialize in grilled favorites and homestyle recipes, crafted with passion and served with pride. From sizzling burgers and juicy chicken to flavorful vegetarian options, there’s something here for everyone.</span>
                </li>
                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  <span> Join us and experience great food, friendly service, and a place that feels just like home. We look forward to serving you!</span>
                </li>
              </ul>

              {/* Description Paragraph */}
              <p>
PFGrill is a locally-loved grill restaurant in Duncan, SC, serving fresh, flavorful meals made with high-quality ingredients. From sizzling grilled dishes to comforting classics, 
PFGrill is known for great taste, warm hospitality, and a family-friendly atmosphere.
              </p>

              {/* Video Preview */}
              <div className="position-relative mt-4">
                <img src={aboutImg} className="img-fluid" alt="About 2" />
                <a
                
                  title="Watch Video"
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;