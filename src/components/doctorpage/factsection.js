import React from 'react';
import { FaUser, FaThumbsUp } from 'react-icons/fa';
import { FaCirclePlus } from "react-icons/fa6";
import bgmap from '../../images/footer-map.png';

const FactSection = () => {
  const availabilityText = 'We are available 24/7';
  const challengeText = 'We Always Ready For A Challenge.';
  const makeAppointmentLink = '/contact';

  const stats = [
    {
      id: 1,
      value: '1M+',
      icon: FaUser,
      title: 'Satisfied Patients',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 2,
      value: '100+',
      icon: FaThumbsUp,
      title: 'World Awards',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

  const mapbg = {
    backgroundImage: `url(${bgmap})`,
    backgroundSize: 'auto',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <section className="fact-area bg-blue py-10" style={mapbg}>
      <div className="lg:container container-fluid mx-auto px-5 2xl:px-40 xl:px-14 md:px-14 lg:px-5">
        <div className="lg:flex items-center text-white">
          <div className="lg:w-6/12 w-full mx-auto">
            <div className="section-title ">
              <div className="section-text">
                <h5 className='text-offwhite font-bold text-lg py-5'>{availabilityText}</h5>
                <h1 className="text-white py-5 lg:mb-0 text-4xl lg:text-6xl font-bold">{challengeText}</h1>
              </div>
            </div>
            <div className="section-button flex items-center py-5">
              <a
                className="primary_btn bg-primary btn-icon py-2 pr-10 pl-2 rounded-full mr-4 flex items-center font-semibold text-base uppercase"
                href={makeAppointmentLink}
              >
                <FaCirclePlus className="text-5xl text-white mr-10" />
                <p className="text-white">Make Appointment</p>
              </a>
            </div>
          </div>
          <div className="lg:w-6/12 w-full mx-auto lg:px-20 px-5 lg:py-20 py-10">
            <div className="cta-satisfied">
              {stats.map((stat) => (
                <div key={stat.id} className="single-satisfied mb-10 flex items-center gap-5">
                  <h1 className="text-green py-5 lg:mb-0 text-4xl lg:text-6xl font-bold">{stat.value}</h1>
                  <div className=''>
                    <h5 className='flex items-center gap-3 text-xl font-bold mb-3'>
                      {React.createElement(stat.icon)} {stat.title}
                    </h5>
                    <p className='text-offwhite text-base'>
                      {stat.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FactSection;
