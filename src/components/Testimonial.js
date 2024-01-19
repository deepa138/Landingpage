import React from 'react';
import { FaStar } from "react-icons/fa";
import { LuQuote } from "react-icons/lu";
import teastimonialbg from '../images/testimonials-bg.jpg';
import author_icon1 from '../images/author-icon1.png';

const testimonialStyle = {
  backgroundImage: `url(${teastimonialbg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  width: '100%',
};

const Testimonial = ({ rating, content, author, role, image }) => {
  return (
    <div className="testimonials-content bg-white p-8 relative">
      <span className="testi-iconquato absolute bg-primary text-white p-3 right-5 -top-5 rounded-full"><LuQuote /></span>
      <div className="testimonials-ratings">
        <ul className="flex">
          {[...Array(rating).keys()].map((key) => (
            <li key={key}><FaStar className='text-yellow' /></li>
          ))}
        </ul>
      </div>
      <div className="testimonials-content text-sm py-5 leading-6 text-gray-400">
        <p>{content}</p>
      </div>
      <div className="testimonials-author flex items-center gap-4">
        <div className="testimonials--author__icon"><img src={image} alt="" /></div>
        <div className="testimonials--author__info">
          <h5 className="text-black font-medium text-xl">{author}</h5>
          <span className="text-primary text-sm ">{role}</span>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonialsData = [
    { rating: 5, content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do it on eiusmod tempor incididunt me ut labore et dolore.", author: "Hiliam D. Pawlu", role: "Founder, TrashTheme", image: author_icon1 },
    { rating: 5, content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do it on eiusmod tempor incididunt me ut labore et dolore.", author: "Hiliam D. Pawlu", role: "Founder, TrashTheme", image: author_icon1 },
    { rating: 5, content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do it on eiusmod tempor incididunt me ut labore et dolore.", author: "Hiliam D. Pawlu", role: "Founder, TrashTheme", image: author_icon1 },
    { rating: 5, content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do it on eiusmod tempor incididunt me ut labore et dolore.", author: "Hiliam D. Pawlu", role: "Founder, TrashTheme", image: author_icon1 },
  ];

  return (
    <div className="testimonials py-40" style={testimonialStyle}>
      <div className="container mx-auto plg:container container-fluid px-5 2xl:px-20 xl:px-14 md:px-14 lg:px-5x-40">
        <div className="row flex flex-wrap">
          <div className="xl:w-5/12 md:w-full"></div>
          <div className="xl:w-7/12 md:w-full gap-y-4">
            <div className='grid gap-x-8 gap-y-12 sm:grid-cols-2 grid-cols-1'>
              {testimonialsData.map((testimonial, index) => (
                <Testimonial key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
