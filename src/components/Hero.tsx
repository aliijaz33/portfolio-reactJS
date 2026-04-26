import React from 'react';
import { ArrowRight, Code, Palette, Database } from 'lucide-react';

const Hero: React.FC = () => {
  const skills = [
    { icon: Code, label: 'Frontend Development', color: 'text-blue-600' },
    { icon: Palette, label: 'UI/UX Design', color: 'text-purple-600' },
    { icon: Database, label: 'Backend Development', color: 'text-green-600' },
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
              <h1 className='text-5xl md:text-7xl font-bold tracking-tight'>
                <span className='text-gray-900'>Full Stack</span>
                <br />
                <span className='text-primary-600'>Developer</span>
              </h1>
              <p className='text-xl text-gray-600 max-w-2xl'>
                I craft beautiful, functional web experiences with React,
                TypeScript, and modern technologies. Passionate about clean
                code, intuitive design, and scalable solutions.
              </p>
            </div>

            <div className='flex flex-wrap gap-4'>
              <button className='btn btn-primary flex items-center gap-2'>
                View My Work
                <ArrowRight size={20} />
              </button>
              <button className='btn btn-secondary'>Contact Me</button>
            </div>

            {/* Quick Stats */}
            <div className='grid grid-cols-3 gap-6 pt-8'>
              <div className='text-center'>
                <div className='text-3xl font-bold text-primary-700'>50+</div>
                <div className='text-gray-600'>Projects</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-primary-700'>5+</div>
                <div className='text-gray-600'>Years Experience</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-primary-700'>100%</div>
                <div className='text-gray-600'>Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Content - Profile & Skills */}
          <div className='space-y-8'>
            {/* Profile Image Placeholder */}
            <div className='relative'>
              <div className='w-full h-96 bg-gradient-to-br from-primary-500 to-purple-500 rounded-3xl overflow-hidden shadow-2xl'>
                <div className='absolute inset-0 flex items-center justify-center'>
                  <div className='text-white text-center'>
                    <div className='text-6xl mb-4'>👨‍💻</div>
                    <p className='text-xl font-semibold'>Your Profile Photo</p>
                    <p className='text-sm opacity-90'>Add your photo here</p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className='absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20'></div>
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
