import React from 'react';

const BreadcrumbSection = ({ smallText, title, breadcrumbLinks, backgroundImage }) => {
  const bannerBackStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
  };

  return (
    <section className="breadcrumb-bg py-40 lg:py-48" style={bannerBackStyle}>
      <div className="container mx-auto lg:px-40">
        <div className="lg:flex flex-col md:flex-row items-center">
          <div className="md:w-3/4 lg:w-2/3">
            <div className="page-title">
              {smallText && <p className="text-lg fond-bold text-gray pb-4 md:pb-8 lg:pb-12">{smallText}</p>}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">{title}</h1>
            </div>
          </div>
          <div className="md:w-1/4 lg:w-1/3 md:flex md:justify-end items-center">
            <div className="page-breadcrumb">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb flex gap-2 divide-x-2 divide-slate-400 ">
                  {breadcrumbLinks.map((link, index) => (
                    <li key={index} className={`breadcrumb-item${link.active ? ' text-primary active' : ''}`} aria-current={link.active ? 'page' : null}>
                      <a href={link.url} className="flex items-center ml-2 text-sm">
                      {link.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadcrumbSection;
