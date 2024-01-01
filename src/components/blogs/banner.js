import React from 'react';
import BreadcrumbSection from '../TopBanner';
import Bannerbg from '../../images/page-bg.jpg';
import { FaHome, FaBriefcase } from 'react-icons/fa';

const Topbanner = () => {
  const pageData = {
    smallText: 'We are here for your care.',
    title: 'Our Blogs',
    backgroundImage: Bannerbg,
    breadcrumbLinks: [
      { label: 'Home', url: '/', icon: FaHome , active: false },
      { label: 'Blog', url: '/blogs', icon: FaBriefcase , active: true },
    ],
  };

  return (
    <div>
      <BreadcrumbSection
        smallText={pageData.smallText}
        title={pageData.title}
        breadcrumbLinks={pageData.breadcrumbLinks}
        backgroundImage={pageData.backgroundImage}
      />
    </div>
  );
};

export default Topbanner;
