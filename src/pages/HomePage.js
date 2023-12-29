import React from 'react';
import Banner from '../components/Banner';
import About from '../components/About';
import Testimonials from '../components/Testimonial';
import Clientsec from '../components/Client';
import Department from '../components/department';
import Appoinment from '../components/appoinment';
import Factarea from '../components/factarea';
import Hiringarea from '../components/hiringarea';
import HowItWorks from '../components/howitworks';
import PhotoGallery from '../components/photogallery';
import FactSection from '../components/factsection';
import NewsSection from '../components/newssection';

const HomePage = () => {
  return (
    <div className='page'>
      <Banner />
      <About />
      <Department />
      <Clientsec />
      <Appoinment />
      <Factarea />
      <Hiringarea />
      <HowItWorks/>
      <Testimonials />
      <PhotoGallery/>
      <FactSection/>
      <NewsSection/>

      {/* Add content specific to the home page */}
    </div>
  );
};

export default HomePage;