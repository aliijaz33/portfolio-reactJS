import React, { useState } from 'react';
import { Menu, X, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      icon: () => <span className='text-xl font-bold'>GH</span>,
      href: 'https://github.com',
      label: 'GitHub',
    },
    {
      icon: () => <span className='text-xl font-bold'>IN</span>,
      href: 'https://linkedin.com',
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      href: 'mailto:example@email.com',
      label: 'Email',
    },
  ];

  return (
    <header className='sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm'>
      <div className='section-padding max-w-7xl mx-auto'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <div className='flex items-center space-x-2'>
            <div className='w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center'>
              <span className='text-white font-bold text-xl'>P</span>
            </div>
            <span className='text-2xl font-bold text-gray-900'>Portfolio</span>
          </div>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center space-x-8'>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className='text-gray-700 hover:text-primary-600 font-medium transition-colors'
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className='hidden md:flex items-center space-x-4'>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className='p-2 text-gray-600 hover:text-primary-600 hover:bg-gray-100 rounded-full transition-colors'
                target='_blank'
                rel='noopener noreferrer'
              >
                <link.icon size={20} />
              </a>
            ))}
            <button className='btn btn-primary ml-4'>Download Resume</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden p-2'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label='Toggle menu'
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='md:hidden mt-6 pb-4 border-t pt-4'>
            <div className='flex flex-col space-y-4'>
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className='text-gray-700 hover:text-primary-600 py-2 font-medium'
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className='flex space-x-4 pt-4'>
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    className='p-2 text-gray-600 hover:text-primary-600 hover:bg-gray-100 rounded-full'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <link.icon size={20} />
                  </a>
                ))}
              </div>
              <button className='btn btn-primary mt-4'>Download Resume</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
