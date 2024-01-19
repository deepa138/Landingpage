import React from 'react';
import Titlesec from './titlesec';
import titleline from '../images/section-title-line.png';
import icon1 from '../images/icon1.png';
import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';
import moveicon from '../images/move-icon.png';


const HowItWorks = () => {
    const teamData = {
      teamTitle: 'How It Works',
      mainTitle: 'You Will Be Able To Access Our Services Following 3 Steps',
      imageSrc: titleline,
    };
  
    const steps = [
      {
        icon: icon1,
        title: 'Have A Coffee',
        description: 'Lorem ipsum dolor sit amet, consecte turadipisicing elit, sed do eiusmod tempor incididunt ut lab.',
        moveimgicon: moveicon,
      },
      {
        icon: icon2,
        title: 'Choose Doctor',
        description: 'Lorem ipsum dolor sit amet, consecte turadipisicing elit, sed do eiusmod tempor incididunt ut lab.',
        moveimgicon: moveicon,
      },
      {
        icon: icon3,
        title: 'Admission Now',
        description: 'Lorem ipsum dolor sit amet, consecte turadipisicing elit, sed do eiusmod tempor incididunt ut lab.',
      },
    ];
  
    return (
      <section className="pt-16 pb-16 lg:pt-28 ">
        <div className="lg:container container-fluid mx-auto px-5 2xl:px-20 xl:px-14 md:px-14 lg:px-5">
          <Titlesec {...teamData} />
        </div>
        <div className="lg:container container-fluid mx-auto px-5 2xl:px-20 xl:px-14 md:px-14 lg:px-5 grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="col-span-1">
              <div className="howit-box text-center flex justify-center flex-col items-center pb-10 relative">
                <div className="icon mb-5"><img src={step.icon} alt="" /></div>
                <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray">{step.description}</p>
                <img src={step.moveimgicon} alt="" className="move-icon absolute transform -translate-y-1/2 -right-16 hidden md:block"></img>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default HowItWorks;
