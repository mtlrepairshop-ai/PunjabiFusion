import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="footer dark-background">
      <div className="container">
        <div className="row gy-3">
          <div className="col-lg-3 col-md-6 d-flex">
            <i className="bi bi-geo-alt icon"></i>
            <div className="address">
              <h4>Address</h4>
              <p>1395 E Main St</p>
              <p>Duncan, SC 29334</p>
              <p>United States</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex">
            <i className="bi bi-telephone icon"></i>
            <div>
              <h4>Contact</h4>
              <p>
                <strong>Phone:</strong> <span>+1 (864) 775-8393</span>
                <br />
                <strong>Email:</strong> <span>pfgduncan@gmail.com</span>
                <br />
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex">
            <i className="bi bi-clock icon"></i>
            <div>
           <h4>Opening Hours</h4>
                <p>
  <strong>Mon–Fri:</strong> 10AM – 10PM<br />
  <strong>Saturday:</strong> 11AM – 9:30PM<br />
  <strong>Sunday:</strong> Closed
</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <h4>Follow Us</h4>
           <div className="social-links d-flex">
  <a
    href="https://www.instagram.com/pfgduncan7?igsh=dDVvMHI1dW13cjRq"
    className="instagram"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="bi bi-instagram"></i>
  </a>
  <a
    href="https://www.facebook.com/profile.php?id=61575046547427"
    className="facebook"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="bi bi-facebook"></i>
  </a>

   <a
    href="https://www.tiktok.com/@punjabi.fusion.gr?_r=1&_t=ZS-928cunhbkG8"
    className="tiktok"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="bi bi-tiktok"></i>
  </a>
</div>

          </div>
        </div>
      </div>


    </footer>
  );
};

export default Footer;
