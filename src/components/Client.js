// TeamSection.js
import React from 'react';
import Titlesec from './titlesec';
import teamthumb1 from '../images/team__thumb1.png';
import { FaFacebookF } from "react-icons/fa6";
import titleline from '../images/section-title-line.png';
import '../App.css';
import teamthumb2 from '../images/team__thumb2.png';
import teamthumb3 from '../images/team__thumb3.png';
import teamthumb4 from '../images/team__thumb4.png';
const teamMembers = [
  {
    id: 1,
    name: 'Rosalina William',
    role: 'Founder',
    socialLinks: [
      { id: 1, icon: <FaFacebookF />, href: '#facebook' },
      { id: 2, icon: <FaFacebookF />, href: '#twitter' },
      { id: 3, icon: <FaFacebookF />, href: '#behance' },
      { id: 4, icon: <FaFacebookF />, href: '#linkedin' },
      { id: 5, icon: <FaFacebookF />, href: '#youtube' },
    ],
    imageSrc: teamthumb1,

  },
  {
    id: 2,
    name: 'Rosalina William',
    role: 'Founder',
    socialLinks: [
      { id: 1, icon: <FaFacebookF />, href: '#facebook' },
      { id: 2, icon: <FaFacebookF />, href: '#twitter' },
      { id: 3, icon: <FaFacebookF />, href: '#behance' },
      { id: 4, icon: <FaFacebookF />, href: '#linkedin' },
      { id: 5, icon: <FaFacebookF />, href: '#youtube' },
    ],
    imageSrc: teamthumb2,

  },
  {
    id: 3,
    name: 'Rosalina William',
    role: 'Founder',
    socialLinks: [
      { id: 1, icon: <FaFacebookF />, href: '#facebook' },
      { id: 2, icon: <FaFacebookF />, href: '#twitter' },
      { id: 3, icon: <FaFacebookF />, href: '#behance' },
      { id: 4, icon: <FaFacebookF />, href: '#linkedin' },
      { id: 5, icon: <FaFacebookF />, href: '#youtube' },
    ],
    imageSrc: teamthumb3,

  },
  {
    id: 4,
    name: 'Rosalina William',
    role: 'Founder',
    socialLinks: [
      { id: 1, icon: <FaFacebookF />, href: '#facebook' },
      { id: 2, icon: <FaFacebookF />, href: '#twitter' },
      { id: 3, icon: <FaFacebookF />, href: '#behance' },
      { id: 4, icon: <FaFacebookF />, href: '#linkedin' },
      { id: 5, icon: <FaFacebookF />, href: '#youtube' },
    ],
    imageSrc: teamthumb4,

  },
];

const TeamSection = () => {

  const teamData = {
    teamTitle: 'Our Team',
    mainTitle: 'A Professional & Care Provider',
    imageSrc: titleline,

  };

  return (
    <section className="pt-16 lg:pt-28">
      <div className="lg:container container-fluid mx-auto px-5 2xl:px-20 xl:px-14 md:px-14 lg:px-5">
        <Titlesec {...teamData} />
        <div className="team-member">
        <div className="flex flex-wrap">
          {teamMembers.map((member) => (
            <div key={member.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
              <div className="group/item mb-12">
                <div className='sm:text-end text-center sm:mr-5 sm:-mb-12 '>
                  <a className="text-white bg-primary rounded-full text-lg font-semibold py-3 px-5 " href="/doctorDetails">{member.id}</a>
                </div>
                <div className="team-thumb mb-6 flex justify-center">
                  <img className="group border-2 border-dashed rounded-full border-[hsla(90,34%,56%,0.3)] p-1 -z-50 group-hover/item:border-green" src={member.imageSrc} alt="" />
                </div>
                <div className="team-content text-center mb-4">
                  <h3 className="text-2xl font-bold mb-4 ">{member.name}</h3>
                  <h6 className="text-base font-semibold uppercase text-primary">{member.role}</h6>
                </div>
                <div className="group invisible group-hover/item:visible">
                  <ul className="flex justify-center">
                    {member.socialLinks.map((link) => (
                      <li key={link.id} className='text-slate-300'>
                        <a href={link.href}>{link.icon}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;