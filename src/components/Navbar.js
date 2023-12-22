import React, { useState } from 'react';
import logo from '../images/logo-4.png';
import { FaCirclePlus } from "react-icons/fa6";

const Dropdown = ({ isOpen, items }) => {
  return (
    <ul className={`submenu border-t-4 border-primary absolute top-28 w-60 p-6 bg-white ${isOpen ? 'block' : 'hidden'}`}>
      {items.map((item, index) => (
        <li key={index}><a href={item.url}>{item.label}</a></li>
      ))}
    </ul>
  );
};

const NavItem = ({ label, onClick, isOpen, dropdownItems }) => {
  return (
    <li>
      <a href="/" onClick={onClick}>
        {label} {isOpen ? '-' : '+'}
      </a>
      <Dropdown isOpen={isOpen} items={dropdownItems} />
    </li>
  );
};

const Navbar = () => {
  const [dropdowns, setDropdowns] = useState({
    home: false,
    services: false,
    doctor: false,
    shop: false,
    news: false,
    pages: false,
  });

  const toggleDropdown = (dropdown, event) => {
    event.preventDefault();

    setDropdowns((prevDropdowns) => ({
      ...Object.fromEntries(Object.entries(prevDropdowns).map(([key]) => [key, key === dropdown ? !prevDropdowns[key] : false])),
    }));
  };

  const navItems = [
    { label: 'Home', onClick: (e) => toggleDropdown('home', e), isOpen: dropdowns.home, dropdownItems: [
      { label: 'Home style 1', url: '/home' },
      { label: 'Home style 2', url: '/homeTwo' },
      { label: 'Home style 3', url: '/homeThree' },
      { label: 'Home style 4', url: '/homeFour' },
      { label: 'Home style 5', url: '/homeFive' },
    ]},
    { label: 'Department', onClick: (e) => toggleDropdown('services', e), isOpen: dropdowns.services, dropdownItems: [
      { label: 'Services 01', url: '/services' },
      { label: 'Services 02', url: '/servicesTwo' },
      { label: 'Services Details', url: '/servicesDetails' },
    ]},
    { label: 'Doctors', onClick: (e) => toggleDropdown('doctor', e), isOpen: dropdowns.doctor, dropdownItems: [
      { label: 'Doctors 01', url: '/doctor' },
      { label: 'Doctors 02', url: '/doctorTwo' },
      { label: 'Doctors Details', url: '/doctorDetails' },
      
    ]},
    { label: 'Shop', onClick: (e) => toggleDropdown('shop', e), isOpen: dropdowns.shop, dropdownItems: [
      { label: 'Shop Page', url: '/shop' },
      { label: 'Shop Details', url: '/shopDetails' },
      { label: 'Shopping Cart', url: '/shopCart' },
    ]},
    { label: 'News', onClick: (e) => toggleDropdown('news', e), isOpen: dropdowns.news, dropdownItems: [
      { label: 'Blog Right Sidebar', url: '/newsright' },
      { label: 'Blog Left Sidebar', url: '/newsleft' },
      { label: 'Blog No Sidebar', url: '/newsnosidebar' },
    ]},
    { label: 'Pages', onClick: (e) => toggleDropdown('pages', e), isOpen: dropdowns.pages, dropdownItems: [
      { label: 'Appoinment', url: '/appoinment' },
      { label: 'Portfolio 2 column', url: '/portfolio2col' },
      { label: 'Portfolio 3 column', url: '/portfolio3col' },
    ]},
  ];

  return (
    <div className="header-menu-area menu-area4 py-6 px-14  border-t relative">
      <div className="container-fluid">
        <div className="flex items-center">
          <div className="header-info flex items-center lg:w-2/12 md:w-full justify-between">
            <div class="logo">
              <a href="/"> <img src={logo} alt="" /></a>
            </div>
          </div>
          <div className="top-right flex items-center justify-start lg:w-7/12 md:w-full ">
            <div className="header-menu pl-6">
              <nav id="mobile-menu">
                <ul className='flex items-center justify-start gap-8 text-base	font-semibold'>
                  {navItems.map((item, index) => (
                    <NavItem key={index} {...item} />
                  ))}
                  <li><i className="fal fa-search"></i></li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="top-right flex items-center justify-end lg:w-3/12 md:w-full ">
            <a className="primary_btn bg-primary btn-icon py-2 pr-10 pl-2 rounded-full mr-4 flex items-center font-semibold text-xl capitalize" href="/appoinment">
              <FaCirclePlus className='text-5xl text-white mr-10' /><p className='text-white'>Make Appointment </p></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
