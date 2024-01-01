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
        <div className="appoinment-thumb md:w-6/12 lg:w-6/12  w-full lg:px-5 px-5" style={appoimentthumb}></div>
        <div className="md:w-6/12 lg:w-6/12 w-full xl:px-20  lg:px-10 md:px-5 px-5 lg:py-32 py-10 ">
          <div className="appoinment-wrapper">
            <div className="about-title mb-20">
              <h5 className="text-primary font-semibold text-lg">Make An Appointment</h5>
              <h1 className="xl:text-6xl md:text-5xl lg:text-4xl text-4xl font-semibold my-8 ">Get An Appointment <br /> For Get Release</h1>
            </div>
            <form className="appoinment-form mb-4">
              <div class="grid xl:grid-cols-2  lg:grid-cols-2 sm:grid-cols-2 gap-8 md:gap-4">
                <div className="appoinment-input flex items-center mb-4 border-b-2 pb-4">
                  <FaUser className='text-xl text-primary me-5 md:me-2' /> <input type="text" placeholder="Enter Your Name" />
                </div>
                <div className="appoinment-input flex items-center mb-4 border-b-2 pb-4">
                  <FaEnvelopeOpen className='text-xl text-primary me-5 md:me-2' /><input type="text" placeholder="Enter Your Email" />
                </div>
                <div className="appoinment-input flex items-center mb-4 border-b-2 pb-4">
                  <FaPhone className='text-xl text-primary me-5 md:me-2' /><input type="text" placeholder="Enter Your Phone" />
                </div>
                <div className="appoinment-input flex items-center mb-4 border-b-2 pb-4">
                  <FaFileMedicalAlt className='text-xl text-primary me-5 md:me-2' /><input type="text" placeholder="Choose A Service" />
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
