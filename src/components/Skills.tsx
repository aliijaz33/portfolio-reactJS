import React from 'react';
import { Code, Database, Palette, Cloud, Cpu, Server } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'JavaScript (ES6+)', level: 95 },
      ],
    },
    {
      title: 'Backend',
      icon: Database,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Express', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'PostgreSQL', level: 82 },
        { name: 'MongoDB', level: 78 },
      ],
    },
    {
      title: 'UI/UX Design',
      icon: Palette,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      skills: [
        { name: 'Figma', level: 90 },
        { name: 'Adobe XD', level: 75 },
        { name: 'Prototyping', level: 85 },
        { name: 'User Research', level: 70 },
        { name: 'Design Systems', level: 80 },
      ],
    },
    {
      title: 'DevOps & Cloud',
      icon: Cloud,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      skills: [
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'CI/CD', level: 80 },
        { name: 'Git', level: 95 },
        { name: 'Linux', level: 85 },
      ],
    },
  ];

  const tools = [
    'VS Code',
    'GitHub',
    'Postman',
    'Jira',
    'Notion',
    'Slack',
    'Figma',
    'Docker',
    'Webpack',
    'Vite',
    'Jest',
    'Cypress',
    'Storybook',
    'GraphQL',
    'Redis',
  ];

  return (
    <section id='skills' className='section-padding bg-gray-50'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold mb-4'>
            My <span className='text-primary-600'>Skills</span>
          </h2>
          <p className='text-gray-600 text-xl max-w-3xl mx-auto'>
            A comprehensive toolkit of technologies and methodologies I use to
            bring ideas to life.
          </p>
        </div>

        {/* Skill Categories */}
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16'>
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className={`${category.bgColor} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow`}
            >
              <div className='flex items-center gap-3 mb-6'>
                <div className={`p-3 rounded-lg ${category.bgColor}`}>
                  <category.icon className={`w-6 h-6 ${category.color}`} />
                </div>
                <h3 className='text-2xl font-bold'>{category.title}</h3>
              </div>

              <div className='space-y-4'>
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className='flex justify-between mb-1'>
                      <span className='font-medium'>{skill.name}</span>
                      <span className='text-gray-600'>{skill.level}%</span>
                    </div>
                    <div className='h-2 bg-gray-200 rounded-full overflow-hidden'>
                      <div
                        className={`h-full ${category.color.replace('text-', 'bg-')} rounded-full`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <div className='card'>
          <h3 className='text-2xl font-bold mb-8 flex items-center gap-2'>
            <Cpu className='w-6 h-6' />
            Tools & Technologies
          </h3>
          <div className='flex flex-wrap gap-3'>
            {tools.map((tool) => (
              <span
                key={tool}
                className='px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-700 hover:bg-primary-50 hover:border-primary-300 hover:text-primary-700 transition-colors'
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Methodology */}
        <div className='grid md:grid-cols-3 gap-8 mt-12'>
          <div className='card text-center'>
            <Server className='w-12 h-12 text-primary-600 mx-auto mb-4' />
            <h4 className='text-xl font-bold mb-2'>Agile Development</h4>
            <p className='text-gray-600'>
              Experience with Scrum and Kanban methodologies for efficient
              project delivery.
            </p>
          </div>
          <div className='card text-center'>
            <Code className='w-12 h-12 text-primary-600 mx-auto mb-4' />
            <h4 className='text-xl font-bold mb-2'>Clean Code</h4>
            <p className='text-gray-600'>
              Emphasis on readable, maintainable code with comprehensive
              documentation.
            </p>
          </div>
          <div className='card text-center'>
            <Cloud className='w-12 h-12 text-primary-600 mx-auto mb-4' />
            <h4 className='text-xl font-bold mb-2'>Performance Focus</h4>
            <p className='text-gray-600'>
              Optimizing for speed, accessibility, and SEO to deliver
              exceptional user experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
