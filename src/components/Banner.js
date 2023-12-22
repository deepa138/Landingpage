import React from 'react';
import backgroundImage from '../images/home-banner.jpg'; 
import { FaCirclePlus } from "react-icons/fa6";
import { FaRegArrowAltCircleRight } from "react-icons/fa";


const containerStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  width: '100%',
  // Add other styles as needed
};

function App() {
  return (
    <div className="banner flex items-center py-60" style={containerStyle}>
      <div className="container mx-auto">
        <div className="row">
          <div className="lg:w-8/12 md:w-10/12">
            <div className="hero-content">
              <div className="">
                <h1 className="text-white text-7xl font-bold pb-8">Health & Doctor</h1>
                <p className="text-white pr-80 pb-8">Avoids pleasure itself, because it is pleasure, but because those who do not know how rationally encounter consequences that extremely system weathe.</p>
                <div className="row pb-8">
                  <div className="text-white pb-2 flex items-center"><FaRegArrowAltCircleRight className='text-white  mr-4'/><p>Digital Laboratory & Computerized System</p></div>
                  <div className="text-white pb-2 flex items-center"><FaRegArrowAltCircleRight className='text-white  mr-4' /><p>Digital Laboratory & Computerized System</p></div>
                </div>
              </div>
              <div className="flex items-center hero-btn">
                <a className="primary_btn bg-primary btn-icon py-2 pr-10 pl-2 rounded-full mr-4 flex items-center font-semibold text-xl capitalize" href="/appoinment">  
                <FaCirclePlus className='text-5xl text-white mr-10'/><p className='text-white'>Learn More </p></a>

                <a className="primary_btn bg-green btn-icon py-2 pr-10 pl-2 rounded-full flex items-center font-semibold text-xl capitalize" href="/appoinment"> 
                <FaCirclePlus className='text-5xl text-white  mr-10'/> <p className='text-white'>Our Services</p></a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App
