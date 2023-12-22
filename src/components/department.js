import React from 'react';
import Titlesec from './titlesec';
import titleline from '../images/section-title-line.png';
import service1 from '../images/h4__services__thumb1.png';
import service2 from '../images/h4__services__thumb2.png';
import service3 from '../images/h4__services__thumb3.png';
import servicesoverlaybg from '../images/services__overlay__bg.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../App.css';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';


const Departmentsec = () => {
  const teamData = {
    teamTitle: 'Departments',
    mainTitle: 'Managed Your Heathcare Services',
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
  ];

  const settings = {
    dots: true,
    infinite: true,
    arrow:true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <button className="slick-prev slick-arrow" aria-hidden="true" aria-disabled="false" type="button" style={{ display: 'block' }}><FaLongArrowAltLeft/></button>,
    nextArrow: <button className="slick-next slick-arrow" aria-hidden="true" aria-disabled="false" type="button" style={{ display: 'block' }}><FaLongArrowAltRight/></button>,
  };

  return (
    <section className="pt-16 pb-16 lg:pt-28 lg:pb-16">
      <div className="container mx-auto lg:px-40">
        <Titlesec {...teamData} />
      </div>
      <div className='container-fluid relative mx-auto pb-60'>
        <span class="services-bg bg-darkgreen absolute bottom-0"><img src={servicesoverlaybg} alt=""/></span>
        <div className='container mx-auto'>
          <Slider {...settings} className="service-active services_slider">
            {servicesData.map((service, index) => (
              <div key={index} className="service-item bg-darkgreen">
                <div className="service-box bg-white mb-30">
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
                      Read More<FaLongArrowAltRight className='text-base'/>
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
