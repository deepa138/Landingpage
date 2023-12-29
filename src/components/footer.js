import React from 'react';
import { FaFacebookF } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { SlEnvolope } from "react-icons/sl";
import { FaRegClone } from "react-icons/fa";
import { CiFlag1 } from "react-icons/ci";
import footerthumb1 from '../images/feeds-thumb-1.jpg';
import logo from '../images/footer-logo-3.png';
import bgmap from '../images/footer-map.png';

const mapbg = {
    backgroundImage: `url(${bgmap})`,
    backgroundSize: 'auto',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
};

const Footer = () => {
    const footerData = {
        logoSrc: logo,
        contactText:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
        email: 'info@examplemedical.com',
        website: 'examplemedical.com',
        address: '227 Marion Street, Columbia',
        links: [
            { title: 'Surgery and Radiology', href: '/servicesDetails' },
            { title: 'Family Medicine', href: '/servicesDetails' },
            { title: 'Women’s Health', href: '/servicesDetails' },
            { title: 'Optician', href: '/servicesDetails' },
            { title: 'Pediatrics', href: '/servicesDetails' },
            { title: 'Dermatology', href: '/servicesDetails' },
        ],
        recentNews: [
            {
                title: 'Lorem ipsum dolor sit am et, consectetur.',
                date: '14 Feb 2022',
                imageSrc: footerthumb1,
                link: '/blogDetails',
            },
            {
                title: 'Lorem ipsum dolor sit am et, consectetur.',
                date: '14 Feb 2022',
                imageSrc: footerthumb1,
                link: '/blogDetails',
            },
            {
                title: 'Lorem ipsum dolor sit am et, consectetur.',
                date: '14 Feb 2022',
                imageSrc: footerthumb1,
                link: '/blogDetails',
            },
        ],
        openingHours: {
            weekdays: 'Sunday - Friday',
            hours: '08:00 am - 10:00pm',
            closedDay: 'Satarday Closed',
        },
        socialIcons: [
            { icon: <FaFacebookF/>, link: '/facebook' },
            { icon: <TiSocialTwitter/>, link: '/twitter' },
            { icon: <FaGoogle/>, link: '/google' },
        ],
        copyrightText: 'Copyright by@ BasicTheme - 2022',
    };
   

    return (
        <footer>
            <div className="footer bg-blue py-10" style={mapbg}>
                <div className="container mx-auto lg:px-40">
                    <div className="row md:flex justify-content-between">
                        <div className="md:w-6/12 xl:w-3/12">
                            <div className="footer-contact-info footer-contact-info-3 mb-40">
                                <div className="footer-logo mb-3">
                                    <a href="/">
                                        <img src={footerData.logoSrc} alt="" />
                                    </a>
                                </div>
                                <div className="text-offwhite text-base mb-5">
                                    <p className="p-0">{footerData.contactText}</p>
                                </div>
                                <div className="footer-emailing">
                                    <ul>
                                        <li className='text-offwhite flex items-center gap-3 p-1'>
                                            <SlEnvolope />
                                            {footerData.email}
                                        </li >
                                        <li className='text-offwhite flex items-center gap-3  p-1'>
                                            <FaRegClone />
                                            {footerData.website}
                                        </li>
                                        <li className='text-offwhite flex items-center gap-3  p-1'>
                                            <CiFlag1 />
                                            {footerData.address}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-6/12 xl:w-3/12">
                            <div className="footer-widget">
                                <div className="footer-title my-6">
                                    <h3 className='text-2xl text-white font-bold'>More Links</h3>
                                </div>
                                <div className="footer-menu footer-menu-2 text-offwhite">
                                    <ul>
                                        {footerData.links.map((link, index) => (
                                            <li key={index} className='text-offwhite py-2'>
                                                <a href={link.href}>{link.title}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-6/12 xl:w-3/12">
                            <div className="footer-widget">
                                <div className="footer-title my-6">
                                    <h3 className='text-2xl text-white font-bold'>Recent News</h3>
                                </div>
                                <div className="blog-feeds pe-15">
                                    {footerData.recentNews.map((link, index) => (
                                        <div key={index} className="signle-blog-feeds mb-5 flex items-center text-offwhite">
                                            <div className="blog-feeds-thumb mr-2">
                                                <a href={link.link}><img src={link.imageSrc} alt="" /></a>
                                            </div>
                                            <div className="blog-feeds-text">
                                                <h5><a href={link.link}>{link.title}</a></h5>
                                                <span className="feeds-date">{link.date}</span>
                                            </div>
                                        </div>
                                    ))}

                                </div>
                            </div>
                        </div>
                        <div className="md:w-6/12 xl:w-3/12">
                            <div className="footer-widget">
                                <div className="footer-title my-6">
                                    <h3 className='text-2xl text-white font-bold'>Opening Hours</h3>
                                </div>
                                <div class="events-list mb-30">
                                    <ul>
                                        <li className='text-offwhite flex items-center gap-3 p-1'><SlEnvolope/><span>Sunday - Friday <span>08:00 am - 10:00pm</span></span></li>
                                        <li className='text-offwhite flex items-center gap-3 p-1'><SlEnvolope/><span class="close-days">Satarday Closed</span>
                                        </li>
                                    </ul>
                                </div>
                                <div class="footer-social">
                                    <ul class="flex items-center gap-3 ">
                                    {footerData.socialIcons.map((link, index) => (

                                        <li key={index}  className='text-offwhite p-1'><a href={link.link}>{link.icon}</a></li>
                                        ))}                                        
  
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
