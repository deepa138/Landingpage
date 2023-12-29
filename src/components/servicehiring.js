import React from 'react';
import hire1 from '../images/hire1.jpg';
import hire2 from '../images/hire2.jpg';
import { FaCirclePlus } from "react-icons/fa6";

const HiringSection = () => {
    const hiringData = [
        {
            image: hire1,
            title: 'For Employers',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            buttonLink: '/contact',
            buttonText: 'Contact us',
            buttonGreen: true,
        },
        {
            image: hire2,
            title: 'For Employers',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            buttonLink: '/contact',
            buttonText: 'Apply Today',
            buttonGreen: false,
        },
    ];

    return (
        <section className="hiring-area py-20">
            <div className="container mx-auto lg:px-40">
                {hiringData.map((item, index) => (
                    <div key={index} className='grid md:grid-cols-2 gap-0' style={{ boxShadow: index % 2 === 0 ? '5px -6px 16px -2px rgba(197,191,255,.2)' : '0 8px 16px 0 rgba(197,191,255,.2)' }}>
                        <div className={`col-left ${index % 2 === 0 ? 'order-first' : 'order-last'}`}>
                            <div className="hire-img">
                                <img className="img w-full p-0 m-0" src={item.image} alt='' />
                            </div>
                        </div>
                        <div className={`col-right my-auto p-8 ${index % 2 === 0 ? 'order-last' : 'order-first'}`}>
                            <div className="hire-text">
                                <h1 className="text-black text-5xl font-bold pb-8">{item.title}</h1>
                                <p className="text-black text-base pb-8">{item.description}</p>
                                <div className='flex items-center'>
                                    <a className={`primary_btn ${item.buttonGreen ? 'bg-green' : 'bg-primary'} btn-icon py-2 pr-10 pl-2 rounded-full flex items-center font-semibold text-xl capitalize`} href={item.buttonLink}>
                                        <FaCirclePlus className='text-5xl text-white  mr-10' /> <p className='text-white'><span>{item.buttonText}</span></p></a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HiringSection;
