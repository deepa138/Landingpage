import React from 'react';
import aboutphoneicon from '../images/about__phone__icon.png';
import aboutthumb from '../images/about__thumb.jpg';
import overlap from '../images/overlap.png';
import ava from '../images/ava.png';



const aboutphonebgicon = {
    backgroundImage: `url(${aboutphoneicon})`,
    backgroundSize: 'auto',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
};

function App() {
    return (
        <section className="about-area py-36 bg-white">
            <div className="container mx-auto px-40">
                <div className="flex flex-wrap">
                    <div className="lg:w-6/12 md:w-full">
                        <div className="about-thumb ">
                            <img src={aboutthumb} alt="" />
                            <div style={aboutphonebgicon} className="bg-green py-7 px-10 -mt-16 ml-14 w-fit-content z-10 relative">
                                <a href="#contact" className="text-2xl font-bold text-white" >
                               <span>Call : 012 (963) 15632</span>
                                </a>
                            </div>
                            <div className='flex justify-end -mt-62'><img src={overlap} alt="" className="text-left" /></div>
                            
                        </div>
                    </div>
                    <div className="lg:w-6/12 md:w-full pl-10">
                        <div className="about-right-side h4about-right mb-30">
                            <div className="about-title">
                                <h5 className="text-primary font-semibold text-lg">About Medidove</h5>
                                <h1 className="text-6xl font-semibold my-8">25+ Years We Provide Services</h1>
                            </div>
                            <div className="about-text">
                                <p className="text-theme mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod temponcididunt ut labore dolore magna aliqua. Ut enim ad minimveniam, quis nos exercitation ullamco laboris nisi ut aliquip</p>
                                <p className="text-theme mb-5">At vero eos et accusamus et iusto odio dignissimos ducimus qui bladitiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                            </div>
                            <div className="about-author flex items-center gap-5">
                                <div className="author-ava">
                                    <img className="p-1 rounded-full box-shadow-custom bg-white" src={ava} alt="" />
                                </div>
                                <div className="author-desination">
                                    <p>Consectetur adipisicing elit, sed do eiusmod temponc ididunt ut labore dolore magna aliqua.</p>
                                    <h4 className="font-semibold text-xl pt-1">Annie J. Fisher</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default App

