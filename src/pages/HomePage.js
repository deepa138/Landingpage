import React from 'react';
import Banner from '../components/Banner';
import About from '../components/About';
import Testimonials from '../components/Testimonial';
import Clientsec from '../components/Client';
import Department from '../components/department';

const HomePage = () => {
  return (
    <div className='page'>
      <Banner/>
      <About/>
      <Testimonials/>
      <Department/>
      <Clientsec/>
      {/* Add content specific to the home page */}
    </div>
  );
};

export default HomePage;