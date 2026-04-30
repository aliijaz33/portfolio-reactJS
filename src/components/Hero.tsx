import React from 'react';
import { ArrowRight, Smartphone, Cpu, Globe } from 'lucide-react';

const Hero: React.FC = () => {
  const skills = [
    { icon: Smartphone, label: 'Mobile Development', color: 'text-blue-600' },
    { icon: Globe, label: 'Web Development', color: 'text-green-600' },
    { icon: Cpu, label: 'AI & Robotics', color: 'text-purple-600' },
  ];

  return (
    <section id='home' className='section-padding'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Left Content */}
          <div className='space-y-8'>
            <div className='space-y-4'>
              <span className='inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full font-medium'>
                👋 Hello, I'm
              </span>
              <h1 className='text-5xl md:text-5xl font-bold tracking-tight'>
                <span className='text-gray-900'>ALI IJAZ</span>
                <br />
                <span className='text-primary-600'>Software Engineer</span>
              </h1>
              <p className='text-xl text-gray-600 max-w-2xl'>
                Quick learner, self starter and a results-driven software
                engineer with experience in Mobile and web App development with
                a strong background in various programming languages. Passionate
                about AI and Robotics, always eager to learn new skills and
                technologies.
              </p>
            </div>

            <div className='flex flex-wrap gap-4'>
              <a
                href='#projects'
                className='btn btn-primary flex items-center gap-2'
              >
                View My Work
                <ArrowRight size={20} />
              </a>
              <a href='#contact' className='btn btn-secondary'>
                Contact Me
              </a>
            </div>

            {/* Quick Stats */}
            <div className='grid grid-cols-3 gap-6 pt-8'>
              <div className='text-center'>
                <div className='text-3xl font-bold text-primary-700'>10+</div>
                <div className='text-gray-600'>Projects</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-primary-700'>3+</div>
                <div className='text-gray-600'>Years Experience</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-primary-700'>4</div>
                <div className='text-gray-600'>Internships</div>
              </div>
            </div>
          </div>

          {/* Right Content - Profile & Skills */}
          <div className='space-y-7'>
            {/* Profile Image */}
            <div className='relative w-[300px] h-[380px] ml-40'>
              <img
                src='/images/Profile_Photo.jpeg'
                alt='Ali Ijaz - Software Engineer'
                className='w-full h-full object-contain rounded-3xl'
              />
              <div className='absolute inset-0 bg-gradient-to-br from-primary-300/30 to-purple-400/30 rounded-3xl'></div>

              {/* Decorative elements */}
              <div className='absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20'></div>
              <div className='absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20'></div>
              <div className='absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400 rounded-full opacity-20'></div>
            </div>

            {/* Skills Tags */}
            <div className='space-y-4'>
              <h3 className='text-2xl font-bold'>Expertise</h3>
              <div className='flex flex-wrap gap-3'>
                {skills.map((skill) => (
                  <div
                    key={skill.label}
                    className='flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md'
                  >
                    <skill.icon className={`w-5 h-5 ${skill.color}`} />
                    <span className='font-medium'>{skill.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
