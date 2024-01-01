import React from 'react';
 import Topbanner from '../components/doctorpage/banner'; 
 import TeamMember from '../components/doctorpage/teammember'; 
import FactSection from '../components/doctorpage/factsection';
import CounterSection from '../components/doctorpage/countersection';


const Doctorpage = () => {
  return (
    <div className='page'>
        <Topbanner/>
        <TeamMember/>
        <FactSection/>
        <CounterSection/>
    </div>
  );
};

export default Doctorpage;
