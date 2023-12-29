import React from 'react';
import factIcon1 from '../images/icon1_1.png';
import factIcon2 from '../images/icon2_1.png';
import factIcon3 from '../images/icon3 _1.png';
import factIcon4 from '../images/icon4_1.png';
import factImage from '../images/facti_right_thumb.jpg';
import playIcon from '../images/play-icon.png';
import brandIcon from '../images/brand__logo__icon.png';

const factbgImage = {
    backgroundImage: `url(${factImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
};

const FactSection = () => {
    return (
        <div className="fact bg-greenlight">
            <div className="container-fluid p-0 flex flex-wrap">
                <div className="lg:w-5/12 md:w-full mx-auto lg:px-20 py-20">
                    <div className="fact-wrapper">
                        <div class="grid grid-cols-2 gap-10">
                            <div>
                                <div className="facts-single border rounded-xl  text-center mb-30 flex flex-col items-center p-12">
                                    <div className="facts-icon bg-pinklight rounded-full p-5 mb-4">
                                        <img src={factIcon1} alt="Medical Branch" />
                                    </div>
                                    <span className="counter text-green text-5xl font-bold mb-3">
                                        <span>3624</span>
                                    </span>
                                    <h5 className="text-base">Medical Branch</h5>
                                </div>
                            </div>
                            <div>
                                <div className="facts-single border rounded-xl text-center mb-30 flex flex-col items-center p-12">
                                    <div className="facts-icon bg-icon_bg_light rounded-full p-5 mb-4">
                                        <img src={factIcon2} alt="MBBS Doctors" />
                                    </div>
                                    <span className="counter text-green text-5xl font-bold mb-3">
                                        <span>1230</span>
                                    </span>
                                    <h5 className="text-base">MBBS Doctors</h5>
                                </div>
                            </div>
                            <div>
                                <div className="h4facts-single border rounded-xl text-center mb-30 flex flex-col items-center p-12">
                                    <i className="facts-icon bg-icon_bg_light rounded-full p-5 mb-4">
                                        <img src={factIcon3} alt="Local Partners" />
                                    </i>
                                    <span className="counter text-green text-5xl font-bold mb-3">
                                        <span>7620</span>
                                    </span>
                                    <h5 className="text-base">Local Partners</h5>
                                </div>
                            </div>
                            <div>
                                <div className="facts-single border rounded-xl text-center mb-30 flex flex-col items-center p-12">
                                    <i className="facts-icon bg-pinklight rounded-full p-5 mb-4">
                                        <img src={factIcon4} alt="Experience Nurse" />
                                    </i>
                                    <span className="counter text-green text-5xl font-bold mb-3">
                                        <span>2430</span>
                                    </span>
                                    <h5 className="text-base">Experience Nurse</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-7/12 lg:flex items-center flex-row relative justify-center" style={factbgImage}>                        
                        <div className="facts-thumb">
                            <button className="facts-playicon popup-video">
                                    <img src={playIcon} alt="Play Icon" />
                            </button>
                         </div>
                         <div>
                            <div className="facts-brandicon bg-primary rounded-full p-5 max-w-max absolute -left-12 top-1/2">
                                <img src={brandIcon} alt="Brand Logo Icon" />
                            </div>
                        </div>
                </div>
            </div>
        </div >
    );
}; export default FactSection;
