import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { FaCirclePlus } from "react-icons/fa6";
import hire__thumb from '../images/hire__thumb.jpg';

const hirethumb = {
    backgroundImage: `url(${hire__thumb})`,
    backgroundSize: 'auto',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
};

const HiringArea = () => {
    return (
        <section className="hiring-area ">
            <div className="hiring-bottom ">
                <div className="container-fluid flex flex-wrap ">
                    <div className="lg:w-6/12 md:w-full px-40 py-32">
                        <div className="hire-text ">
                            <div className="about-title mb-8">
                                <h5 className="text-primary font-semibold text-lg">Why Choose Us</h5>
                                <h1 className="text-6xl font-semibold my-8">Short Story About <br/>MediDove Clinic.</h1>
                            </div>
                            <div className="about-text">
                                <p className="text-base lg:text-lg">
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
                                </p>
                            </div>
                            <ul className="professinals-list pt-5 lg:pt-10 pb-10 lg:pb-20">
                                <li className='flex items-center mb-3'><div className='icon p-1 mr-2 border rounded-full border-green text-green text-base'><FaCheck className=""/></div>Ut enim ad minim veniam, quis nostrud exercit.</li>
                                <li className='flex items-center  mb-3'><div className='icon p-1 mr-2 border rounded-full border-green text-green text-base'><FaCheck className=""/></div>Ut enim ad minim veniam, quis nostrud exercit.</li>
                                <li className='flex items-center  mb-3'><div className='icon p-1 mr-2 border rounded-full border-green text-green text-base'><FaCheck className=""/></div>Ut enim ad minim veniam, quis nostrud exercit.</li>
                                <li className='flex items-center  mb-3'><div className='icon p-1 mr-2 border rounded-full border-green text-green text-base'><FaCheck className=""/></div>Ut enim ad minim veniam, quis nostrud exercit.</li>
                            </ul>
                            <div className="hiring-button flex items-center">
                                <a className="primary_btn bg-green btn-icon py-2 pr-10 pl-2 rounded-full flex items-center font-semibold text-xl capitalize" href="/appoinment">
                                    <FaCirclePlus className='text-5xl text-white  mr-10' /> <p className='text-white'>Apply Today</p></a>
                            </div>
                        </div>
                    </div>
                    <div className="hire-right-img lg:w-6/12 md:w-full px-20" style={hirethumb}></div>

                </div>
            </div>
        </section>
    );
};

export default HiringArea;
