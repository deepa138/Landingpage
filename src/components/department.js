import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';
import Titlesec from './titlesec';
import titleline from '../images/section-title-line.png';
import service1 from '../images/h4__services__thumb1.png';
import service2 from '../images/h4__services__thumb2.png';
import service3 from '../images/h4__services__thumb3.png';
import servicesoverlaybg from '../images/services__overlay__bg.png';

const Departmentsec = () => {
  const teamData = {
    teamTitle: 'Departments',
    mainTitle: 'Managed Your Healthcare Services',
    imageSrc: titleline,
  };

  const servicesData = [
    {
      tag: 'dental',
      title: 'Dental Fillings',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
      image: service1,
      link: '/servicesDetails',
    },
    {
      tag: 'neurology',
      title: 'Neurology Surgery',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
      image: service2,
      link: '/servicesDetails',
    },
    {
      tag: 'surgery',
      title: 'Body Surgery',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
      image: service3,
      link: '/servicesDetails',
    },
    {
      tag: 'dental',
      title: 'Dental Fillings',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
      image: service1,
      link: '/servicesDetails',
    },
    {
      tag: 'neurology',
      title: 'Neurology Surgery',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
      image: service2,
      link: '/servicesDetails',
    },
    {
      tag: 'surgery',
      title: 'Body Surgery',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
      image: service3,
      link: '/servicesDetails',
    },
  ];

  const CustomSliderArrow = ({ className, onClick, icon }) => (
    <button
      className={`custom-arrow bg-green  text-white ${className}`}
      onClick={onClick}
      type="button"
    >
      {icon}
    </button>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomSliderArrow className="mr-4 mt-4" icon={<FaLongArrowAltLeft />} />,
    nextArrow: <CustomSliderArrow className="mt-4" icon={<FaLongArrowAltRight />} />,
    responsive: [
      {
        breakpoint: 768, // Adjust the breakpoint as needed
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dats:true,
          prevArrow:false,
          nextArrow:false,

        },
      },
      {
        breakpoint: 1024, // Adjust the breakpoint as needed
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="pt-16 lg:pt-28">
      <div className="lg:container container-fluid mx-auto px-5 2xl:px-40 xl:px-14 md:px-14 lg:px-5">
        <Titlesec {...teamData} />
      </div>
      <div className='container-fluid relative pb-20'>
        <span className="services-bg bg-darkgreen absolute bottom-0 left-0 h-72"><img src={servicesoverlaybg} alt="" /></span>
        <div className='lg:container container-fluid mx-auto px-5 2xl:px-40 xl:px-14 md:px-5 '>
          <Slider {...settings} className="service-active services_slider">
            {servicesData.map((service, index) => (
              <div key={index} className="service-item">
                <div className="service-box bg-white mb-30 mx-5">
                  <div className="service-thumb mb-0 relative">
                    <img src={service.image} alt="" />
                    <div className='service-tag absolute bg-green py-2 px-4 mx-5 -bottom-3 '>
                      <a className="text-white uppercase font-bold text-base " href={service.link}>
                        {service.tag}
                      </a>
                    </div>
                  </div>
                  <div className="service-content p-5">
                    <h3 className='text-2xl text-black font-bold'>
                      <a href={service.link}>{service.title}</a>
                    </h3>
                    <p className="my-6 text-base text-gray">{service.description}</p>
                    <a className="service-link flex items-center" href={service.link}>
                      Read More<FaLongArrowAltRight className='text-base' />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Departmentsec;
