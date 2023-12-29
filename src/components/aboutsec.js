import React from 'react';
import service1 from '../images/service1.png';
import service2 from '../images/service2.png';
import service3 from '../images/service3.png';
import service4 from '../images/service4.png';
import service5 from '../images/service5.png';
import service6 from '../images/service6.png';

const servicesData = [
    {
        id: 1,
        title: 'Body Surgery',
        imageUrl: service1,
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
        link: '/servicesDetails',
    },
    {
        id: 2,
        title: 'Dental Care',
        imageUrl: service2,
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
        link: '/servicesDetails',
    },
    {
        id: 3,
        title: 'Service Content',
        imageUrl: service3,
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
        link: '/servicesDetails',
    },
    {
        id: 4,
        title: 'Blood Cancer',
        imageUrl: service4,
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
        link: '/servicesDetails',
    },
    {
        id: 5,
        title: 'Neurology Surgery',
        imageUrl: service5,
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
        link: '/servicesDetails',
    },
    {
        id: 6,
        title: 'Allergic Issue',
        imageUrl: service6,
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
        link: '/servicesDetails',
    },
];

const AboutSection = () => {
    return (
        <section className="about-area py-10">
            <div className="container mx-auto lg:px-40 py-5">
                <div className="row md:flex gap-10">
                    <div className="md:w-1/2 titlesecbg pt-10">
                        <div className="section-title section-title-m-0 pos-rel mb-50 text-end">
                            <div className="section-icon">
                                <img className="section-back-icon back-icon-right" src="img/section/section-back-icon.png" alt="" />
                            </div>
                            <div className="section-text section-text-small pos-rel">
                                <h5 className="text-lg font-bold pb-5 uppercase text-primary">health care facility</h5>
                                <h1 className="text-2xl lg:text-5xl font-bold pb-5 leading-snug">Would you rather stay at home than go into a health care facility?</h1>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 my-auto">
                        <div className="facalty-text mb-50">
                            <p className='text-base leading-6 text-gray'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nost rud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="services py-14  grid md:grid-cols-3 gap-x-5 gap-y-8">
                    {servicesData.map((service) => (
                        <div key={service.id} className="service-box p-10">
                            <div className="text-center ">
                                <div className="service-thumb pb-5">
                                    <img className="mx-auto" src={service.imageUrl} alt="" />
                                </div>
                                <div className="service-content">
                                    <h3 className='text-2xl text-black mb-4 font-bold'><a href={service.link}>{service.title}</a></h3>
                                    <p className='mb-4'>{service.description}</p>
                                    <a className="service-link font-semibold text-base text-gray" href={service.link}>Read More</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
