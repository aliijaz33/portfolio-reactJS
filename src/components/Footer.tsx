import React from 'react';
import { Heart, Coffee, Copyright } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Navigation',
      links: [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Skills', href: '#skills' },
        { label: 'Projects', href: '#projects' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Resume', href: '#resume' },
        { label: 'GitHub', href: 'https://github.com' },
        { label: 'Blog', href: '#blog' },
        { label: 'Case Studies', href: '#case-studies' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '#privacy' },
        { label: 'Terms of Service', href: '#terms' },
        { label: 'Cookie Policy', href: '#cookies' },
      ],
    },
  ];

  return (
    <footer className='bg-gray-900 text-white'>
      <div className='section-padding'>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-12'>
          {/* Brand Column */}
          <div className='space-y-6'>
            <div className='flex items-center gap-3'>
              <div className='w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center'>
                <span className='text-white font-bold text-2xl'>P</span>
              </div>
              <div>
                <div className='text-2xl font-bold'>Portfolio</div>
                <div className='text-gray-400'>Full Stack Developer</div>
              </div>
            </div>
            <p className='text-gray-400'>
              Crafting digital experiences with passion, precision, and modern
              technologies.
            </p>
            <div className='flex gap-4'>
              {['GitHub', 'LinkedIn', 'Twitter', 'Dribbble'].map((platform) => (
                <a
                  key={platform}
                  href={`https://${platform.toLowerCase()}.com`}
                  className='w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={platform}
                >
                  {platform.charAt(0)}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className='text-xl font-bold mb-6'>{column.title}</h3>
              <ul className='space-y-3'>
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className='text-gray-400 hover:text-white transition-colors'
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className='border-t border-gray-800 my-12'></div>

        {/* Bottom Bar */}
        <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
          <div className='flex items-center gap-2 text-gray-400'>
            <Copyright className='w-4 h-4' />
            <span>{currentYear} Portfolio. All rights reserved.</span>
          </div>

          <div className='flex items-center gap-6'>
            <a href='/privacy' className='text-gray-400 hover:text-white'>
              Privacy Policy
            </a>
            <a href='/terms' className='text-gray-400 hover:text-white'>
              Terms of Service
            </a>
            <a href='/sitemap' className='text-gray-400 hover:text-white'>
              Sitemap
            </a>
          </div>

          <div className='flex items-center gap-2 text-gray-400'>
            <span>Made with</span>
            <Heart className='w-4 h-4 text-red-500 fill-red-500' />
            <span>and</span>
            <Coffee className='w-4 h-4 text-amber-600' />
            <span>by You</span>
          </div>
        </div>

        {/* Back to Top */}
        <div className='text-center mt-12'>
          <a
            href='/'
            className='inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors'
          >
            ↑ Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
