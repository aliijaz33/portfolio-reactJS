import React from 'react';
import { User, MapPin, Briefcase, Award } from 'lucide-react';

const About: React.FC = () => {
  const experiences = [
    {
      year: 'Dec 2025 – Feb 2026',
      role: 'AI/ML Intern',
      company: 'PakSoft Solutions',
      description:
        'Production Python + backend services (FastAPI), Databases, ML + CV + GenAI, OpenCV + YOLOv8 + pyttsx3, System design thinking.',
    },
    {
      year: 'Feb 2023 – Mar 2023',
      role: 'React Native Intern',
      company: 'Zimo Group UK',
      description:
        'Contributed to their project, Video Component + Animation, Firebase Push Notification.',
    },
    {
      year: 'Jul 2022 – Sep 2022',
      role: 'React Native Intern',
      company: 'BitSol Technologies',
      description:
        'Started with basics, Hooks + Components, Props + Data Handling + State Management, UI/UX/Design.',
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Software Engineering',
      institution: 'Comsats University Islamabad',
      year: '2020 – 2025',
    },
    {
      degree: 'Understanding Machine Learning',
      institution: 'DataCamp',
      year: 'Sep 2025',
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
            Passionate developer with expertise in modern Mobile & web
            technologies, dedicated to creating impactful digital experiences.
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
                  <h3 className='text-2xl font-bold'>ALI IJAZ</h3>
                  <p className='text-gray-600'>
                    Software Engineer | React Native | React
                  </p>
                </div>
              </div>

              <div className='space-y-4'>
                <div className='flex items-center gap-3'>
                  <MapPin className='w-5 h-5 text-gray-500' />
                  <span>Islamabad/Lahore, Pakistan</span>
                </div>
                <div className='flex items-center gap-3'>
                  <Briefcase className='w-5 h-5 text-gray-500' />
                  <span>3+ Years Experience</span>
                </div>
                <div className='flex items-center gap-3'>
                  <Award className='w-5 h-5 text-gray-500' />
                  <span>3 Certifications (DataCamp)</span>
                </div>
              </div>
            </div>

            {/* Resume Download */}
            <div className='card'>
              <h3 className='text-xl font-bold mb-4'>My Resume</h3>
              <div className='space-y-6'>
                <div className='text-center p-6 bg-primary-50 rounded-lg'>
                  <div className='text-5xl mb-4'>📄</div>
                  <h4 className='text-lg font-semibold mb-2'>
                    Professional CV
                  </h4>
                  <p className='text-gray-600 text-sm'>
                    Download my detailed resume with all experience, skills, and
                    projects.
                  </p>
                </div>
                <a
                  href='/resume/Ali-React_Native_CV.pdf'
                  download='Ali_Ijaz_Resume.pdf'
                  className='btn btn-primary w-full flex items-center justify-center gap-2'
                >
                  <svg
                    className='w-5 h-5'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                    />
                  </svg>
                  Download Resume (PDF)
                </a>
              </div>
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
                forefront of mobile & web development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
