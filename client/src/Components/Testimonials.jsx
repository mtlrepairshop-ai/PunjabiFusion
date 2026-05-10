import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import img3 from '../assets/img/testimonials/testimonials-3.jpg';
import img1 from '../assets/img/testimonials/testimonials-1.png';

const testimonials = [
  {
    text: "We decided to try Punjabi Fusion Grill tonight and it was excellent! We haven’t been to this place since it was Tandoori Express - and all I can say is WOW! The restaurant has been renovated and has a lovely atmosphere. The biryani, butter chicken, garlic naan, and samosas were all delicious. Our waitress was so friendly and the service was great! Definitely give this place a try - you won’t regret it!",
    name: "Anne-Harrison Ghionis",
    role: "Our Valuable Customer",
    image: img1,
  },
  {
    text: "Amazing Indian Food, you can choose you spicy level and trust me medium is really hot. The Mango smoothie is delicious. Great portion and great price. Great atmosphere and polite staff. Excellent flavor with original ingredients.",
    name: "Ronalt Contreras",
     role: "Our Valuable Customer",
    image: img3,
  },
  {
    text: "Very clean place with polite staff. Food was good we recommend the mango smoothie and butter chicken. You walk in, order, pay, then sit for your food to come to you.",
    name: "MIMI B",
        role: "Our Valuable Customer",
    image: img3,
  },
  {
    text: "Tried Punjabi Fusion Grill (PFG) and ordered the veg biryani, chicken biryani, ghost curry, and garlic naan. The spice level was decent across the dishes—flavorful without being overpowering. The food was solid overall, making it a good spot if you're craving Indian cuisine. Would definitely return to try more from the menu!",
    name: "Mike Mike",
    role: "Our Valuable Customer",
    image: img1,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>TESTIMONIALS</h2>
        <p>
          What Are They <span className="description-title">Saying About Us</span>
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <Swiper
          className="init-swiper"
          loop={true}
          speed={600}
          autoplay={{ delay: 5000 }}
          slidesPerView="auto"
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-item">
                <div className="row gy-4 justify-content-center">
                  <div className="col-lg-6">
                    <div className="testimonial-content">
                      <p>
                        <i className="bi bi-quote quote-icon-left"></i>
                        <span>{item.text}</span>
                        <i className="bi bi-quote quote-icon-right"></i>
                      </p>
                      <h3>{item.name}</h3>
                      <h4>{item.role}</h4>
                      <div className="stars">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 text-center">
                    <img src={item.image} className="img-fluid testimonial-img" alt={item.name} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};

export default Testimonials;
