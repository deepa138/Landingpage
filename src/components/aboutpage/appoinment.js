import React from 'react';
import { FaCheck } from 'react-icons/fa';
import appoinmentbg from '../../images/appointment-bg.jpg';


const appoinmentStyle = {
    backgroundImage: `url(${appoinmentbg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
  };

const dynamicData = {
  approachTitle: 'Our Approach',
  mainTitle: 'If you are a patient seeking quality.',
  description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.',
  checklist: [
    'Ut enim ad minim veniam, quis nostrud exercit.',
    'Ut enim ad minim veniam, quis nostrud exercit.',
    'Ut enim ad minim veniam, quis nostrud exercit.',
    'Ut enim ad minim veniam, quis nostrud exercit.',
  ],
  buttonText: 'Make Appointment',
  buttonLink: '/contact',
};

const AppointmentSection = () => {
  return (
    <section className="appoinment-section py-20" style={appoinmentStyle}>
      <div className="lg:container container-fluid mx-auto px-5 2xl:px-40 xl:px-14 md:px-14 lg:px-5">
        <div className="lg:flex flex-wrap">
          <div className="w-full lg:w-6/12 bg-white">
            <div className="appoinment-box ">
              <div className="appoinment-content px-5 py-10">
                <span className="text-primary font-semibold text-lg">{dynamicData.approachTitle}</span>
                <h1 className="xl:text-6xl md:text-5xl lg:text-4xl text-4xl font-semibold my-8">{dynamicData.mainTitle}</h1>
                <p className="text-theme mb-5">{dynamicData.description}</p>
                <ul className="professinals-list pt-3 ">
                  {dynamicData.checklist.map((item, index) => (
                    <li className='flex items-center gap-5 pb-2' key={index}>
                        <a class="team-link text-green border border-green rounded-full flex items-center justify-center w-8 h-8 " href="/doctorDetails"> <FaCheck /></a>
                        {item}</li>
                  ))}
                </ul>
              </div>
              <div className="primary_btn bg-primary btn-icon py-4 text-center text-white w-full font-semibold text-base uppercase">
              <a  href={dynamicData.buttonLink}>{dynamicData.buttonText}</a></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
