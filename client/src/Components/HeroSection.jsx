import heroImg from '../assets/img/hero-img.png';




const HeroSection = () => {
  return (
    <section id="hero" className="hero section light-background">
      <div className="container">
        <div className="row gy-4 justify-content-center justify-content-lg-between">
          <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1 data-aos="fade-up">
Made fresh, served hot, and bursting with bold Indian taste!
            </h1>
            <p data-aos="fade-up" data-aos-delay="100">
              <br/>
         Bold flavors. Great vibes. Unforgettable meals.   </p>
            <div className="d-flex" data-aos="fade-up" data-aos-delay="200">
              
                 <a  className="btn-get-started" href="tel:+18647758393">Book a Table</a>

            </div>
          </div>
          <div className="col-lg-5 order-1 order-lg-2 hero-img" data-aos="zoom-out">
<img src={heroImg} alt="Hero" className="img-fluid animated" />          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
