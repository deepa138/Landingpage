import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import gallery__thumb from '../images/gallery__thumb.jpg';
import gallery__thumb2 from '../images/gallery__thumb2.jpg';

const PhotoGallery = () => {

    const galleryData = [
        { image: gallery__thumb, title: 'Trusted Partner' },
        { image: gallery__thumb2, title: 'Our Hospitality' },
        { image: gallery__thumb, title: 'Trusted Partner' },
        { image: gallery__thumb2, title: 'Our Hospitality' },
        { image: gallery__thumb, title: 'Trusted Partner' },
        { image: gallery__thumb2, title: 'Our Hospitality' },

    ];
    const CustomSliderArrow = ({ className, onClick, icon }) => (
        <button
          className={`slick-slider-arrow bg-green absolute top-0 right-0 ${className}`}
          onClick={onClick}
          type="button"
        >
          {icon}
        </button>
      );
    
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: <CustomSliderArrow className="mr-4 mt-4" icon={<FaArrowLeft />} />,
    nextArrow: <CustomSliderArrow className="mt-4" icon={<FaArrowRight />} />,
        customPaging: (i) => (
            <button
                className="dot-style focus:outline-none bg-yellow rounded-full w-2 h-2 mx-2"
                aria-label={`Slide ${i + 1}`}
            />),
    };

    return (
        <section className="photogallery pt-16 pb-16 lg:pt-28 lg:pb-16">
            <div className="container mx-auto lg:px-40">
                <div className="row">
                    <div className="lg:w-1/2 md:w-full">
                        <div className="about-title mb-65">
                            <h5 className="text-primary font-semibold text-lg">Photo Gallery</h5>
                            <h1 className="text-7xl font-semibold my-8">Let’s See Latest Photo Album</h1>
                        </div>
                    </div>
                    <div className="lg:w-1/2"></div>
                </div>
                <Slider {...settings} className="slick-slider gallery-active services_slider photogallery ">
                    {galleryData.map((item, index) => (
                        <div key={index} className="slick-slide pb-24">
                            <div className="gallery-box relative" style={{ margin: '0 20px' }}>
                                <img src={item.image} alt="" className='mx-auto' />
                                <div className="gallery-content relative z-0">
                                    <h2 className="text-center mx-auto z-10 -my-14 bg-white px-5 py-8 rounded-lg shadow-xl text-3xl max-w-max">{item.title}</h2>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default PhotoGallery;
