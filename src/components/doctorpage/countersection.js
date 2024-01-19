import React from 'react';
import { FaGlobe, FaHospital, FaHandshake } from 'react-icons/fa';
import counterIcon1 from '../../images/counter-icon-1.png';
import counterIcon2 from '../../images/counter-icon-2.png';
import counterIcon3 from '../../images/counter-icon-3.png';

const CounterSection = () => {
  const counters = [
    {
      id: 1,
      icon: FaGlobe,
      image: counterIcon1,
      count: 358,
      title: 'Worldwide Branches',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 2,
      icon: FaHospital,
      image: counterIcon2,
      count: 358,
      title: 'Hospital Formed',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 3,
      icon: FaHandshake,
      image: counterIcon3,
      count: 238,
      title: 'Local Partners',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

  return (
    <section className="counter-wraper bg-greenlight py-20">
      <div className="lg:container container-fluid mx-auto px-5 2xl:px-20 xl:px-14 md:px-14 lg:px-5">
        <div className="sm:flex flex-wrap">
          {counters.map((counter) => (
            <div key={counter.id} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="single-couter mb-30">
                <img src={counter.image} alt="" />
                <div className="counter-text-box ">
                  <h1 className='py-3'>
                    <span className="counter text-primary xl:text-6xl text-4xl font-light ">
                      <span>{counter.count}+</span>
                    </span>
                  </h1>
                  <h3 className='text-2xl font-bold py-3'>{counter.title}</h3>
                  <p className='text-offwhite text-base'>{counter.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
