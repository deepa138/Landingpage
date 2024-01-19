import React, { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import Titlesec from './titlesec';
import titleline from '../images/section-title-line.png';
import blog__thumb1 from '../images/blog__thumb1.png';
import adminthumb from '../images/news-admin1.png';
import { GoPlus } from "react-icons/go";


const NewsSection = () => {

  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const getLatestNewsboxStyles = (index) => {
    const baseStyles = {
      backgroundSize: 'auto',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      transition: 'transform 0.3s ease-in-out',
    };

    const hoverStyles = {
      ...baseStyles,
      backgroundImage: `linear-gradient(0deg, rgba(34,54,69,0.9), rgba(34,54,69,0.9)), url(${blog__thumb1})`,
    };

    return hoveredItem === index ? hoverStyles : baseStyles;
  };

  const teamData = {
    teamTitle: 'News',
    mainTitle: 'Get Every Single Updates Here.',
    imageSrc: titleline,
  };

  const newsData = [
    {
      tags: [
        { name: 'Medical', link: '/blogDetails' },
        { name: 'Medicine', link: '/blogDetails' },
      ],
      title: 'Working Together How Designers & Develop',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
      adminThumb: adminthumb,
      adminName: 'Barbara',
      date: '05 January 2022',
      link: '/blogDetails',
    },
    {
      tags: [
        { name: 'Medical', link: '/blogDetails' },
        { name: 'Medicine', link: '/blogDetails' },
      ],
      title: 'Sharing Code Between Projects Lessons Learned',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
      adminThumb: adminthumb,
      adminName: 'Barbara',
      date: '05 January 2022',
      link: '/blogDetails',

    },
    {
      tags: [
        { name: 'Medical', link: '/blogDetails' },
        { name: 'Medicine', link: '/blogDetails' },
      ],
      title: 'Working Together How Designers & Develop',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
      adminThumb: adminthumb,
      adminName: 'Barbara',
      date: '05 January 2022',
      link: '/blogDetails',

    },
  ];


  return (
    <section className="latest-news-area">
      <div className="lg:container container-fluid mx-auto px-5 2xl:px-20 xl:px-14 md:px-14 lg:px-5 py-20">
        <Titlesec {...teamData} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  {newsData.map((newsItem, index) => (
    <div
      key={index}
      className="latestnews/box  mb-8 border"
      style={getLatestNewsboxStyles(index)}
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="mb-8 p-8">
        <div className="news-tag mb-2">
          {newsItem.tags.map((tag, tagIndex) => (
            <span key={tagIndex} className="mr-2">
              <a className="font-semibold text-green" href={tag.link}>
                {tag.name}
              </a>
            </span>
          ))}
        </div>
        <div className={`news-content latestnews latestnews-hover/box ${hoveredItem === index ? 'text-white' : ''}`}>
          <h4 className={`font-semibold text-xl mb-2 text-black latestnews latestnews-hover/box ${hoveredItem === index ? 'text-white' : ''}`}>
            <a href={newsItem.link}>{newsItem.title}</a>
          </h4>
          <p className='py-4'>{newsItem.content}</p>
        </div>
        <div className={`news-admin flex justify-between py-8 border-t latestnews latestnews-hover/box ${hoveredItem === index ? 'text-white' : ''}`}>
          <div className="adminnews-thumb mr-2">
            <span className="flex justify-between">
              <img className="rounded-full w-8 h-8" src={newsItem.adminThumb} alt="" />
              <span className="font-semibold ml-2">{newsItem.adminName}</span>
            </span>
          </div>
          <div className={`adminnews-date text-gray latestnews latestnews-hover/box ${hoveredItem === index ? 'text-white' : ''}`}>
            <span className="flex items-center">
              <FaCalendarAlt className="mr-1" />
              {newsItem.date}
            </span>
          </div>
        </div>
        <div className="news-button flex items-center">
          <a className="primary_btn bg-greenlight btn-icon py-2 pr-10 pl-2 rounded-full flex items-center font-semibold text-xl capitalize hover:bg-primary hover:text-white" href="/appoinment">
            <GoPlus className='text-5xl text-black bg-white rounded-full  mr-10' /> <p className='text-back'>Read More</p>
          </a>
        </div>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default NewsSection;
