// /COMPONENTS/aboutpage/TestimonialsSection.js
import React from 'react';
import TeamSection from '../titlesec';
import titleline from '../../images/section-title-line.png';
import testibg from '../../images/testi-box-bg.png';
import testiquato from '../../images/testi-quato-icon.png';
import author_icon1 from '../../images/author-icon1.png';
import '../../App.css';

const appoinmentStyle = {
  backgroundImage: `url(${testibg})`,
  backgroundSize: 'auto',
  backgroundPosition: 'center',
  width: '100%',
};

const testimonialsData = [
  {
    id: 1,
    content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem. accusantium doloremque laudantium, totam rem aperiam.',
    author: 'Rosalina D. Williamson',
    designation: 'Founder, uithemes',
  },
  // Add more testimonials as needed
];

const TestimonialsSection = () => {
  const testimonialsSectionData = {
    teamTitle: 'Testimonials',
    mainTitle: 'Our Clients Say About Us',
    imageSrc: titleline,
  };

  return (
    <section className="testimonials-area py-20 bg-gray-100">
      <div className="lg:container container-fluid mx-auto px-5 2xl:px-40 xl:px-14 md:px-14 lg:px-5">
        <TeamSection {...testimonialsSectionData} />

        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} className="single-testi">
            <div className="row">
              <div className="lg:w-10/12 w-full mx-auto">
                <div className="testi-box text-center pt-20" style={appoinmentStyle}>
                  <div className="testi-content">
                    <span className="testi-quato-icon "><img src={testiquato} alt="" className='mx-auto bg-primary flex items-center p-5 rounded-full justify-center '/></span>
                    <div className="text-text-box py-5">
                      <p className='md:text-3xl text-xl text-gray'>{testimonial.content}</p>
                    </div>
                    <span></span>
                  </div>
                  <div className="testi-author pb-5">
                    <h2 className="text-black font-medium text-xl pb-2">{testimonial.author}</h2>
                    <span className="text-green text-base ">{testimonial.designation}</span>
                  </div>
                  <div className="test-author-icon "><img src={author_icon1} alt="" className='mx-auto w-20 h-20'/></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
