import React from 'react';
 import Topbanner from '../components/servicebanner'; 
import AboutSection from '../components/aboutsec';
import CalculateSection from '../components/calculatesec';
import HiringSection from '../components/servicehiring';

const Departmentpage = () => {
  return (
    <div className='page'>
        <Topbanner/>
      <AboutSection />
      <CalculateSection/>
      <HiringSection/>
    </div>
  );
};

export default Departmentpage;
