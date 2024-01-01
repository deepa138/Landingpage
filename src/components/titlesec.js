// /COMPONENTS/titlesec.js
import React from 'react';


const TeamSection = ({ teamTitle, mainTitle, imageSrc }) => {
  return (
    <div className="flex flex-col items-center mb-12 py-10 lg:mx-56 titlebg">
      <div className="text-center">
        <h5 className="text-lg font-bold pb-5">{teamTitle}</h5>
        <h1 className="2xl:text-7xl xl:text-6xl md:text-5xl text-4xl font-bold pb-5">{mainTitle}</h1>
      </div>
      <div className="mt-5">
        <img src={imageSrc} alt="" />
      </div>
    </div>
  );
};

export default TeamSection;