import React from "react";
import SectionTitleLine from "../../images/section-title-line.png";
import member1 from "../../images/member1.png";
import member2 from "../../images/member2.png";
import member3 from "../../images/member3.png";
import { FaCirclePlus } from "react-icons/fa6";
import { GoPlus } from "react-icons/go";

const TeamMember = ({ name, role, image }) => {
  return (
    <div className="team-box text-center">
      <div className="team-thumb relative">
        <img src={image} alt={name} className="mx-auto "/>
        <a className="team-link bg-green hover:bg-primary rounded-full flex items-center justify-center absolute bottom-10 right-12 w-14 h-14" href="/doctorDetails">
        <GoPlus className=" text-2xl font-bold text-white"/>
        </a>
      </div>
      <div className="team-content">
        <h3 className="text-2xl font-bold mb-4" >{name}</h3>
        <h6 className="text-base font-semibold uppercase text-primary">{role}</h6>
      </div>
    </div>
  );
};

const TeamSection = () => {
  const teamData = [
    { id: 1, name: "Rosalina D. Williamson", role: "Founder", image: member1 },
    { id: 2, name: "Diconda PIran Will", role: "Dentist", image: member2 },
    { id: 3, name: "Hulk M. Kenbon", role: "Neurologist", image: member3 },
    { id: 4, name: "Rosalina D. Williamson", role: "Founder", image: member1 },
    { id: 5, name: "Diconda PIran Will", role: "Dentist", image: member2 },
    { id: 6, name: "Hulk M. Kenbon", role: "Neurologist", image: member3 },
  ];

  return (
    <section className="team-area py-20">
      <div className="lg:container container-fluid mx-auto px-5 2xl:px-40 xl:px-14 md:px-14 lg:px-5">
        <div className="md:flex items-center justify-between">
          <div className="md:w-6/12 lg:w-6/12 w-full  px-5 ">
            <div className="py-10 titleleftbg ">
              <div className="md:text-left text-center">
                <h5 className="text-lg font-bold pb-5">Our Team</h5>
                <h1 className="2xl:text-7xl xl:text-6xl md:text-5xl text-4xl font-bold pb-5">
                  A Professional & Care Provider{" "}
                </h1>
              </div>
              <div className="mt-5">
                <img src={SectionTitleLine} className='mx-0 ' alt="" />
              </div>
            </div>
          </div>
          <div className="md:w-6/12 lg:w-6/12 w-full  px-5 ">
            <div className="section-button flex items-center lg:justify-end justify-center">
              <a
                className="primary_btn bg-primary btn-icon py-2 pr-10 pl-2 rounded-full mr-4 flex items-center font-semibold text-base uppercase"
                href="/appoinment"
              >
                <FaCirclePlus className="text-5xl text-white mr-10" />
                <p className="text-white">Make Appointment</p>
              </a>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-10">
          {teamData.map((member) => (
            <div key={member.id} className="team-details">
              <TeamMember
                name={member.name}
                role={member.role}
                image={member.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
