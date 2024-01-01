import React from 'react';
import { TfiEmail } from "react-icons/tfi";
import { MdOutlinePhoneEnabled } from "react-icons/md";
import { FaRegClock } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";


function Beforehead() {
    return (
        <div className="row top-bar white-bg py-6 px-14 md:flex justify-between text-sm hidden">
            <div className="header-info flex items-center xl:w-6/12 lg:w-8/12 md:w-full justify-start gap-5">
                <span className='flex items-center text-gray'><TfiEmail className='text-primary mr-1' /><a href="mailtoo:infomail@medidove.com" >infomail@medidove.com</a></span>
                <span className='flex items-center text-gray'><MdOutlinePhoneEnabled className='text-primary mr-1' /><a href="mailtoo:infomail@medidove.com" >+87 (676) 6765 764</a></span>
                <span className='flex items-center text-gray'><FaRegClock className='text-primary mr-1' /><p>Sun - Thursday, 09:00 am - 08:00 pm</p></span>
            </div>
            <div className="top-right lg:flex items-center justify-end xl:w-6/12 md:hidden">
                <div className="top-menu mr-5">
                    <ul className="flex flex-row">
                        <li className='mx-2 text-primary underline'><a className="need-help" href="/help">Needs Help?</a></li>
                        <li className='mx-2 text-gray'><a href="/privacy">Setting &amp; Privacy</a></li>
                        <li className='mx-2 text-gray'><a href="/media">Media</a></li>
                    </ul>
                </div>

                <div className="header-social-icons xl:flex ml-4 md:hidden">
                    <ul className="flex">
                        <li className='mx-1 text-gray' ><a href="#facebook"><FaFacebookF /></a></li>
                        <li className='mx-1 text-gray'><a href="#behance"><FaFacebookF /></a></li>
                        <li className='mx-1 text-gray'><a href="#youtube"><FaFacebookF /></a></li>
                        <li className='mx-1 text-gray'><a href="#linkedin"><FaFacebookF /></a></li>
                        <li className='mx-1 text-gray'><a href="#pinterest"><FaFacebookF /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Beforehead;
