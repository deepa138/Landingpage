import React from 'react';
import fact_area from '../images/map.png';

const map = {
    backgroundImage: `url(${fact_area})`,
    backgroundSize: 'auto',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
};

const FactArea = () => {
  return (
    <section className="fact-area bg-green py-36" style={map}>
      <div className="container mx-auto">
        <div className="lg:flex lg:items-center">
          <div className="lg:w-10/12 lg:mx-auto">
            <div className="section-title relative">
              <div className="section-text text-white text-center">
                <h5 className="text-white font-semibold">Health Care Services</h5>
                <h1 className="text-white mb-2 lg:mb-0 text-4xl lg:text-6xl font-bold">Don’t Hesitate, Contact <br /> Us For Better Help &amp; Services.</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FactArea;
