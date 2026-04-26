import React from 'react';
import { User, MapPin, Briefcase, Award } from 'lucide-react';

const About: React.FC = () => {
  const experiences = [
    {
      year: '2023 - Present',
      role: 'Senior Frontend Developer',
      company: 'Tech Innovations Inc.',
      description: 'Leading frontend architecture for enterprise applications.',
    },
    {
      year: '2021 - 2023',
      role: 'Full Stack Developer',
      company: 'Digital Solutions LLC',
      description: 'Built full-stack web applications with React and Node.js.',
    },
    {
      year: '2019 - 2021',
      role: 'Web Developer',
      company: 'Creative Agency',
      description: 'Developed responsive websites and e-commerce platforms.',
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Technology',
      year: '2015 - 2019',
    },
    {
      degree: 'Frontend Development Certification',
      institution: 'Meta Frontend Developer',
      year: '2022',
    },
  ];

  return (
    <section id='about' className='section-padding bg-white'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold mb-4'>
            About <span className='text-primary-600'>Me</span>
          </h2>
          <p className='text-gray-600 text-xl max-w-3xl mx-auto'>
            Passionate developer with expertise in modern web technologies,
            dedicated to creating impactful digital experiences.
          </p>
        </div>

        <div className='grid lg:grid-cols-3 gap-12'>
          {/* Left Column - Personal Info */}
          <div className='space-y-8'>
            <div className='card'>
              <div className='flex items-center gap-4 mb-6'>
                <div className='w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center'>
                  <User className='w-10 h-10 text-primary-600' />
                </div>
                <div>
                  <h3 className='text-2xl font-bold'>John Doe</h3>
                  <p className='text-gray-600'>Full Stack Developer</p>
                </div>
              </div>

              <div className='space-y-4'>
                <div className='flex items-center gap-3'>
                  <MapPin className='w-5 h-5 text-gray-500' />
                  <span>San Francisco, CA</span>
                </div>
                <div className='flex items-center gap-3'>
                  <Briefcase className='w-5 h-5 text-gray-500' />
                  <span>5+ Years Experience</span>
                </div>
                <div className='flex items-center gap-3'>
                  <Award className='w-5 h-5 text-gray-500' />
                  <span>15+ Certifications</span>
                </div>
              </div>
            </div>

            {/* Resume Images */}
            <div className='card'>
              <h3 className='text-xl font-bold mb-4'>My Resume</h3>
              <div className='space-y-4'>
                <div className='aspect-video bg-gray-100 rounded-lg overflow-hidden'>
                  <img
                    src='/resume/Screenshot 2026-04-26 at 2.55.45 PM.png'
                    alt='Resume page 1'
                    className='w-full h-full object-contain'
                  />
                </div>
                <div className='aspect-video bg-gray-100 rounded-lg overflow-hidden'>
                  <img
                    src='/resume/Screenshot 2026-04-26 at 2.56.05 PM.png'
                    alt='Resume page 2'
                    className='w-full h-full object-contain'
                  />
                </div>
              </div>
              <button className='btn btn-primary w-full mt-6'>
                Download Resume (PDF)
              </button>
            </div>
          </div>

          {/* Middle Column - Experience */}
          <div className='lg:col-span-2 space-y-8'>
            <div className='card'>
              <h3 className='text-2xl font-bold mb-8 flex items-center gap-2'>
                <Briefcase className='w-6 h-6' />
                Work Experience
              </h3>
              <div className='space-y-8'>
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className='relative pl-8 border-l-2 border-primary-200'
                  >
                    <div className='absolute -left-2 top-0 w-4 h-4 bg-primary-600 rounded-full'></div>
                    <div className='mb-2'>
                      <span className='inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium'>
                        {exp.year}
                      </span>
                    </div>
                    <h4 className='text-xl font-bold'>{exp.role}</h4>
                    <p className='text-primary-600 font-medium'>
                      {exp.company}
                    </p>
                    <p className='text-gray-600 mt-2'>{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className='card'>
              <h3 className='text-2xl font-bold mb-8 flex items-center gap-2'>
                <Award className='w-6 h-6' />
                Education & Certifications
              </h3>
              <div className='grid md:grid-cols-2 gap-6'>
                {education.map((edu, index) => (
                  <div key={index} className='p-4 bg-gray-50 rounded-xl'>
                    <h4 className='font-bold text-lg'>{edu.degree}</h4>
                    <p className='text-primary-600'>{edu.institution}</p>
                    <p className='text-gray-500 text-sm mt-2'>{edu.year}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal Statement */}
            <div className='card bg-gradient-to-r from-primary-50 to-blue-50'>
              <h3 className='text-2xl font-bold mb-4'>My Philosophy</h3>
              <p className='text-gray-700'>
                I believe in writing clean, maintainable code and creating
                user‑centric designs. Technology should solve real problems
                while providing delightful experiences. I'm constantly learning
                and adapting to new tools and methodologies to stay at the
                forefront of web development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
