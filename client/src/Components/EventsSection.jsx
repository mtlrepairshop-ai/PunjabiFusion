// src/components/Events.jsx

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import img1 from '../assets/img/events-1.jpg';
import img2 from '../assets/img/events-2.jpg';
import img3 from '../assets/img/events-3.jpg';
import img4 from '../assets/img/events-4.jpg';



const eventsData = [
  {
    title: 'Custom Parties',
    price: '',
    image: img1,
    description:
      '',
  },
  {
    title: 'Private Parties',
    price: '',
    image: img2,
    description:
      '',
  },
  {
    title: 'Birthday Parties',
    price: '',
    image: img3,
    description:
      '',
  },
  {
    title: 'Wedding Parties',
    price: '',
    image: img4,
    description:
      '',
  },
];

const Events = () => {
  return (
    <section id="events" className="events section">
      <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">
        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          speed={600}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 1,
            },
          }}
        >
          {eventsData.map((event, index) => (
            <SwiperSlide key={index}>
              <div
                className="swiper-slide event-item d-flex flex-column justify-content-end"
                style={{ backgroundImage: `url(${event.image})` }}
              >
                <h3>{event.title}</h3>
                <div className="price align-self-start">{event.price}</div>
                <p className="description">{event.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};

export default Events;