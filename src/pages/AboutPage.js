import React from 'react';
import Topbanner from '../components/aboutpage/banner'; 
import TeamMember from '../components/doctorpage/teammember'; 
import FactSection from '../components/doctorpage/factsection';
import CounterSection from '../components/doctorpage/countersection';
import AboutSection from '../components/aboutpage/about';
import ClientReviewSection  from '../components/aboutpage/TestimonialsSection';
import AppointmentSection from '../components/aboutpage/appoinment';


const AboutPage = () => {
  return (
    <div>
        <Topbanner/>
        <AboutSection/>
        <CounterSection/>
        <AppointmentSection/>

        <TeamMember/>
        <FactSection/>
        <ClientReviewSection />
    </div>
  );
};

export default AboutPage;