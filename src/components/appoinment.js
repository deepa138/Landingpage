import React from 'react';
import { FaUser, FaEnvelopeOpen, FaPhone, FaFileMedicalAlt } from 'react-icons/fa';
import { FaCirclePlus } from "react-icons/fa6";
import appoiment_thumb from '../images/appoinment__thumb.jpg';



const appoimentthumb = {
    backgroundImage: `url(${appoiment_thumb})`,
    backgroundSize: 'auto',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
};

const AppointmentSection = () => {
  return (
    <section className="appoinment">
      <div className="container-fluid flex flex-wrap">
        <div className="appoinment-thumb lg:w-6/12 md:w-full px-20 " style={appoimentthumb}></div>
        <div className="lg:w-6/12 md:w-full px-20 py-32">
          <div className="appoinment-wrapper">
            <div className="about-title mb-20">
              <h5 className="text-primary font-semibold text-lg">Make An Appointment</h5>
              <h1 className="text-7xl font-semibold my-8">Get An Appointment <br /> For Get Release</h1>
            </div>
            <form className="appoinment-form mb-4">
              <div class="grid grid-cols-2 gap-8">
                <div className="appoinment-input flex items-center mb-4 border-b-2 pb-4">
                  <FaUser className='text-xl text-primary me-5' /> <input type="text" placeholder="Enter Your Name" />
                </div>
                <div className="appoinment-input flex items-center mb-4 border-b-2 pb-4">
                  <FaEnvelopeOpen className='text-xl text-primary me-5' /><input type="text" placeholder="Enter Your Email" />
                </div>
                <div className="appoinment-input flex items-center mb-4 border-b-2 pb-4">
                  <FaPhone className='text-xl text-primary me-5' /><input type="text" placeholder="Enter Your Phone" />
                </div>
                <div className="appoinment-input flex items-center mb-4 border-b-2 pb-4">
                  <FaFileMedicalAlt className='text-xl text-primary me-5' /><input type="text" placeholder="Choose A Service" />
                </div>
              </div>
            </form>
            <div className="appoinment-button flex items-center">
              <a className="primary_btn bg-primary btn-icon py-2 pr-10 pl-2 rounded-full flex items-center font-semibold text-xl capitalize" href="/appoinment">
                <FaCirclePlus className='text-5xl text-white  mr-10' /> <p className='text-white'>Make Appointment</p></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
