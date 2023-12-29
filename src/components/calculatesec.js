import React from 'react';
import calculatorbg from '../images/calculate-bg.png';
import { FaCirclePlus } from "react-icons/fa6";


const CalculateSection = () => {

  const bannerBackStyle = {
    backgroundImage: `linear-gradient(rgba(34, 54, 69, 0.9), rgba(34, 54, 69, 0.9)), url(${calculatorbg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
  };

  // Dynamic data for the selects
  const supportOptions = ['When would you like our support?', 'Option 2', 'Option 3'];
  const arrivalOptions = ['When would you like us to arrive?', 'Option 2', 'Option 3'];
  const stayOptions = ['How long should we stay?', 'Option 2', 'Option 3'];
  const locateOptions = ['Where are you located?', 'Option 2', 'Option 3'];


  return (
    <section className="calculate-area py-28 bg-overlay" style={bannerBackStyle}>
      <div className="container mx-auto lg:px-40">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="col-left ">
            <div className="section-title ">
              <div className="section-text my-10">
                <h5 className="text-lg font-bold pb-8 uppercase text-white">make a call</h5>
                <h1 className="text-4xl lg:text-6xl font-bold pb-8 leading-snug text-white">Quote Calculator</h1>
                <p className='text-3xl font-semibold text-white mb-8'>If you require services on a public holiday, overnight services or live-in services, please call (+00)888.666.88 so we can discuss prices with you.</p>
              </div>
            </div>
            <div className="section-button flex items-center my-10">
              <a className="primary_btn bg-green btn-icon py-2 pr-10 pl-2 rounded-full flex items-center font-semibold text-xl capitalize" href="/appoinment">
                <FaCirclePlus className='text-5xl text-white  mr-10' /> <p className='text-white'> Make Appointment</p></a>
            </div>
          </div>
          <div className="col-right">
            <div className="calculate-box bg-white">
              <div className="calculate-content">
                <div className="form row p-10">
                  <div className="col ">
                    <select className="form-select select_style my-suto border h-16 w-full px-3 my-3">
                      {supportOptions.map((option, index) => (
                        <option key={index}>{option}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col">
                    <select className="form-select select_style my-suto border h-16 w-full px-3 my-3">
                      {arrivalOptions.map((option, index) => (
                        <option key={index}>{option}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col">
                    <select className="form-select select_style my-suto border h-16 w-full px-3 my-3">
                      {stayOptions.map((option, index) => (
                        <option key={index}>{option}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col">
                    <select className="form-select select_style my-suto border h-16 w-full px-3 my-3">
                      {locateOptions.map((option, index) => (
                        <option key={index}>{option}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col">
                    <form className="calculate-form" action="#">
                      <input type="text" placeholder="Your Phone number" className='my-suto border h-16 w-full px-3' />
                      <i className="fas fa-phone"></i>
                    </form>
                  </div>
                </div>
                <div className='form-btn bg-primary p-5 w-full text-center'>
                  <a href="/submit" className="text-base text-white font-bold  uppercase">submit query</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculateSection;
