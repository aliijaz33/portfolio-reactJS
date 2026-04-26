import React from 'react';
import { ExternalLink, Star, GitFork, Eye, GitBranch } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-featured online store with cart, checkout, and admin dashboard.',
      tags: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Stripe'],
      githubStars: 42,
      githubForks: 18,
      liveUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/username/ecommerce',
      featured: true,
    },
    {
      title: 'Task Management App',
      description:
        'Collaborative project management tool with real-time updates and drag‑and‑drop.',
      tags: ['Next.js', 'Tailwind', 'Socket.io', 'PostgreSQL'],
      githubStars: 28,
      githubForks: 9,
      liveUrl: 'https://tasks.demo.com',
      githubUrl: 'https://github.com/username/taskapp',
      featured: true,
    },
    {
      title: 'Weather Dashboard',
      description:
        'Beautiful weather application with forecasts, maps, and historical data.',
      tags: ['React', 'Chart.js', 'OpenWeather API', 'PWA'],
      githubStars: 15,
      githubForks: 5,
      liveUrl: 'https://weather.demo.com',
      githubUrl: 'https://github.com/username/weather',
      featured: false,
    },
    {
      title: 'Portfolio Website',
      description:
        'Modern, responsive portfolio website with dark mode and animations.',
      tags: ['React', 'Tailwind', 'Framer Motion', 'TypeScript'],
      githubStars: 36,
      githubForks: 12,
      liveUrl: 'https://portfolio.demo.com',
      githubUrl: 'https://github.com/username/portfolio',
      featured: false,
    },
    {
      title: 'AI Chat Assistant',
      description:
        'Chatbot powered by OpenAI API with custom personality and context memory.',
      tags: ['Python', 'FastAPI', 'React', 'OpenAI'],
      githubStars: 51,
      githubForks: 23,
      liveUrl: 'https://chat.demo.com',
      githubUrl: 'https://github.com/username/aichat',
      featured: true,
    },
    {
      title: 'Fitness Tracker',
      description:
        'Mobile‑first fitness application with workout plans and progress analytics.',
      tags: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
      githubStars: 19,
      githubForks: 7,
      liveUrl: 'https://fitness.demo.com',
      githubUrl: 'https://github.com/username/fitness',
      featured: false,
    },
  ];

  return (
    <section id='projects' className='section-padding bg-white'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold mb-4'>
            Featured <span className='text-primary-600'>Projects</span>
          </h2>
          <p className='text-gray-600 text-xl max-w-3xl mx-auto'>
            A selection of my recent work showcasing technical expertise and
            creative problem‑solving.
          </p>
        </div>

        {/* Project Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
          {projects.map((project, index) => (
            <div
              key={index}
              className={`card group hover:scale-[1.02] transition-transform ${
                project.featured ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              {/* Project Header */}
              <div className='flex justify-between items-start mb-4'>
                <div>
                  <h3 className='text-2xl font-bold'>{project.title}</h3>
                  <div className='flex items-center gap-4 mt-2'>
                    <div className='flex items-center gap-1 text-gray-600'>
                      <Star className='w-4 h-4' />
                      <span className='text-sm'>{project.githubStars}</span>
                    </div>
                    <div className='flex items-center gap-1 text-gray-600'>
                      <GitFork className='w-4 h-4' />
                      <span className='text-sm'>{project.githubForks}</span>
                    </div>
                    <div className='flex items-center gap-1 text-gray-600'>
                      <Eye className='w-4 h-4' />
                      <span className='text-sm'>1.2k</span>
                    </div>
                  </div>
                </div>
                {project.featured && (
                  <span className='px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium'>
                    Featured
                  </span>
                )}
              </div>

              {/* Description */}
              <p className='text-gray-600 mb-6'>{project.description}</p>

              {/* Tags */}
              <div className='flex flex-wrap gap-2 mb-6'>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className='px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm'
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className='flex gap-4'>
                <a
                  href={project.githubUrl}
                  className='flex items-center gap-2 text-gray-700 hover:text-primary-600 font-medium'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <GitBranch className='w-5 h-5' />
                  Code
                </a>
                <a
                  href={project.liveUrl}
                  className='flex items-center gap-2 text-gray-700 hover:text-primary-600 font-medium'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <ExternalLink className='w-5 h-5' />
                  Live Demo
                </a>
              </div>

              {/* Project Image Placeholder */}
              <div className='mt-6 aspect-video bg-gradient-to-r from-primary-500 to-purple-500 rounded-xl overflow-hidden opacity-90 group-hover:opacity-100 transition-opacity'>
                <div className='w-full h-full flex items-center justify-center'>
                  <div className='text-white text-center'>
                    <div className='text-4xl mb-2'>🚀</div>
                    <p className='font-semibold'>Project Preview</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Stats */}
        <div className='card bg-gradient-to-r from-gray-900 to-gray-800 text-white'>
          <div className='grid md:grid-cols-4 gap-8'>
            <div className='text-center'>
              <div className='text-4xl font-bold'>150+</div>
              <div className='text-gray-300'>GitHub Repositories</div>
            </div>
            <div className='text-center'>
              <div className='text-4xl font-bold'>2.5k+</div>
              <div className='text-gray-300'>Total Commits</div>
            </div>
            <div className='text-center'>
              <div className='text-4xl font-bold'>89</div>
              <div className='text-gray-300'>Contributions (30 days)</div>
            </div>
            <div className='text-center'>
              <div className='text-4xl font-bold'>15</div>
              <div className='text-gray-300'>Open Source Projects</div>
            </div>
          </div>
          <div className='mt-8 text-center'>
            <a
              href='https://github.com'
              className='inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100'
              target='_blank'
              rel='noopener noreferrer'
            >
              <GitBranch className='w-5 h-5' />
              View My GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
