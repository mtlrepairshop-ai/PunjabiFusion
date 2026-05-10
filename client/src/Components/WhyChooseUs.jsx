import React from 'react';
import foodShape2 from '../assets/img/food-shape-2.png';
import { FaRegStar, FaUtensils, FaShippingFast, FaLeaf } from 'react-icons/fa';

const whyChooseData = [
  {
    icon: <FaRegStar size={40} />,
    title: 'Super Quality Food',
    description: 'We use the finest ingredients and expert chefs to serve dishes that are both delicious and healthy.',
    delay: '.3s',
  },
  {
    icon: <FaUtensils size={40} />,
    title: 'Original Recipes',
    description: 'Our menu features authentic recipes crafted with love, tradition, and creativity.',
    delay: '.5s',
  },
  {
    icon: <FaShippingFast size={40} />,
    title: 'Quick Fast Delivery',
    description: 'Get your food delivered hot and fresh — fast and on time, every time.',
    delay: '.7s',
  },
  {
    icon: <FaLeaf size={40} />,
    title: '100% Fresh Foods',
    description: 'We use only farm-fresh vegetables, meats, and dairy in every dish we prepare.',
    delay: '.9s',
  },
];

const WhyChooseUs = () => {
  return (
    <section id="whyChooseUs" className="choose-us fix section-padding pt-0 section-bg">
      <div className="container">
        <div className="food-icon-wrapper bg-cover" style={{ backgroundImage: `url(${foodShape2})` }}>
          <div className="row g-4">
            {whyChooseData.map((item, index) => (
              <div key={index} className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={item.delay}>
                <div className="single-food-icon">
                  <div className="icon">{item.icon}</div>
                  <div className="content">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
