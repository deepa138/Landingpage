import React from 'react';
import { FaPlay } from 'react-icons/fa';
import aboutImg from '../../images/about-img.jpg';
// import aboutShape from '../../images/about-shape.png';
import destinationIcon1 from '../../images/destination-icon-1.png';
import destinationIcon2 from '../../images/destination-icon-2.png';

const AboutSection = () => {
  const missionData = {
    icon: destinationIcon1,
    title: 'Our Mission',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.',
  };

  const visionData = {
    icon: destinationIcon2,
    title: 'Our Vision',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.',
  };

  return (
    <section className="about-area py-20">
      <div className="lg:container container-fluid mx-auto px-5 2xl:px-40 xl:px-14 md:px-14 lg:px-5">
        <div className="lg:flex flex-wrap">
          <div className="w-full lg:w-6/12 px-5">
            <div className="about-left-side">
              <div className="about-front-img relative">
                <img src={aboutImg} alt="About Us" className='w-full'/>
                <button className="popup-video bg-white hover:bg-primary hover:text-white p-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full">
                  <FaPlay />
                </button>
              </div>
              <div className="about-shape">
                {/* <img src={aboutShape} alt="" /> */}
              </div>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-5">
            <div className="about-right-side pt-55 mb-30">
              <div className="about-title">
                <h5 className="text-offwhite font-semibold text-lg">About Us</h5>
                <h1 className="xl:text-6xl md:text-5xl lg:text-4xl text-4xl font-semibold my-8">Short Story About MediDove Clinic.</h1>
              </div>
              <div className="about-text pb-8">
                <p>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
                </p>
              </div>
              <div className="our-destination">
                <div className="single-item mb-10 flex items-start gap-5">
                  <div className="mv-icon w-3/12">
                    <img src={missionData.icon} alt="" />
                  </div>
                  <div className="mv-title">
                    <h3 className='text-2xl font-bold mb-4'>{missionData.title}</h3>
                    <p className='text-base text-offwhite'>{missionData.description}</p>
                  </div>
                </div>
                <div className="single-item mb-10 flex items-start gap-5">
                  <div className="mv-icon w-3/12">
                    <img src={visionData.icon} alt="" />
                  </div>
                  <div className="mv-title ">
                  <h3 className='text-2xl font-bold mb-4'>{visionData.title}</h3>
                  <p className='text-base text-offwhite'>{visionData.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
