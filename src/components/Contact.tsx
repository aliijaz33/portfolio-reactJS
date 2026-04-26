import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@example.com',
      link: 'mailto:hello@example.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'San Francisco, CA',
      link: 'https://maps.google.com',
    },
  ];

  return (
    <section id='contact' className='section-padding bg-gray-50'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold mb-4'>
            Get In <span className='text-primary-600'>Touch</span>
          </h2>
          <p className='text-gray-600 text-xl max-w-3xl mx-auto'>
            Have a project in mind? Let's collaborate and create something
            amazing together.
          </p>
        </div>

        <div className='grid lg:grid-cols-3 gap-12'>
          {/* Contact Information */}
          <div className='space-y-8'>
            <h3 className='text-2xl font-bold'>Contact Information</h3>
            <p className='text-gray-600'>
              Feel free to reach out through any of the channels below. I
              typically respond within 24 hours.
            </p>

            <div className='space-y-6'>
              {contactInfo.map((info) => (
                <a
                  key={info.title}
                  href={info.link}
                  className='flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <div className='p-3 bg-primary-100 text-primary-600 rounded-lg'>
                    <info.icon className='w-6 h-6' />
                  </div>
                  <div>
                    <div className='font-medium'>{info.title}</div>
                    <div className='text-gray-600'>{info.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className='text-xl font-bold mb-4'>Connect on Social</h4>
              <div className='flex gap-4'>
                {['GitHub', 'LinkedIn', 'Twitter', 'Instagram'].map(
                  (platform) => (
                    <a
                      key={platform}
                      href={`https://${platform.toLowerCase()}.com`}
                      className='px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-primary-50 hover:border-primary-300 transition-colors'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {platform}
                    </a>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className='lg:col-span-2'>
            <div className='card'>
              {isSubmitted ? (
                <div className='text-center py-12'>
                  <CheckCircle className='w-16 h-16 text-green-500 mx-auto mb-6' />
                  <h3 className='text-2xl font-bold mb-2'>Message Sent!</h3>
                  <p className='text-gray-600'>
                    Thank you for reaching out. I'll get back to you as soon as
                    possible.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className='text-2xl font-bold mb-6'>Send a Message</h3>
                  <form onSubmit={handleSubmit} className='space-y-6'>
                    <div className='grid md:grid-cols-2 gap-6'>
                      <div>
                        <label
                          htmlFor='name'
                          className='block text-sm font-medium mb-2'
                        >
                          Your Name
                        </label>
                        <input
                          type='text'
                          id='name'
                          name='name'
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent'
                          placeholder='John Doe'
                        />
                      </div>
                      <div>
                        <label
                          htmlFor='email'
                          className='block text-sm font-medium mb-2'
                        >
                          Email Address
                        </label>
                        <input
                          type='email'
                          id='email'
                          name='email'
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent'
                          placeholder='john@example.com'
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor='subject'
                        className='block text-sm font-medium mb-2'
                      >
                        Subject
                      </label>
                      <input
                        type='text'
                        id='subject'
                        name='subject'
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent'
                        placeholder='Project Inquiry'
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='message'
                        className='block text-sm font-medium mb-2'
                      >
                        Message
                      </label>
                      <textarea
                        id='message'
                        name='message'
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent'
                        placeholder='Tell me about your project...'
                      />
                    </div>
                    <button
                      type='submit'
                      disabled={isSubmitting}
                      className='btn btn-primary w-full flex items-center justify-center gap-2'
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          <Send className='w-5 h-5' />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* Additional Info */}
            <div className='mt-8 grid md:grid-cols-2 gap-6'>
              <div className='p-6 bg-primary-50 rounded-xl'>
                <h4 className='font-bold text-lg mb-2'>Response Time</h4>
                <p className='text-gray-700'>
                  I aim to respond to all inquiries within 24 hours during
                  weekdays.
                </p>
              </div>
              <div className='p-6 bg-gray-100 rounded-xl'>
                <h4 className='font-bold text-lg mb-2'>Availability</h4>
                <p className='text-gray-700'>
                  Currently available for freelance projects and full‑time
                  opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
