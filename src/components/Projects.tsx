import React, { useState } from 'react';
import {
  ExternalLink,
  Star,
  GitFork,
  Eye,
  GitBranch,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

// Enhanced Image Carousel Component
interface ImageCarouselProps {
  images: string[];
  title: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
    setIsLoading(true);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
    setIsLoading(true);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
    console.error(`Failed to load image: ${images[currentIndex]}`);
  };

  if (images.length === 0) {
    return (
      <div className='w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800'>
        <div className='text-white text-center p-8'>
          <div className='text-5xl mb-4'>📱</div>
          <p className='font-semibold text-lg'>Project Preview</p>
          <p className='text-gray-400 text-sm mt-2'>No images available</p>
        </div>
      </div>
    );
  }

  return (
    <div className='relative w-full h-full bg-gradient-to-br from-gray-900 to-gray-800'>
      {/* Loading overlay */}
      {isLoading && (
        <div className='absolute inset-0 flex items-center justify-center bg-gray-900/80 z-10'>
          <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500'></div>
        </div>
      )}

      {/* Main image container */}
      <div className='w-full h-full flex items-center justify-center p-2 md:p-3'>
        <img
          src={images[currentIndex]}
          alt={`${title} screenshot ${currentIndex + 1}`}
          className='max-w-[85%] max-h-[85%] object-contain transition-transform duration-300'
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      </div>

      {images.length > 1 && (
        <>
          {/* Navigation buttons */}
          <button
            onClick={goToPrevious}
            className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg'
            aria-label='Previous image'
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={goToNext}
            className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg'
            aria-label='Next image'
          >
            <ChevronRight size={24} />
          </button>

          {/* Image indicators */}
          <div className='absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2'>
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsLoading(true);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary-500 w-8 scale-125'
                    : 'bg-white/50 hover:bg-white/80 hover:scale-110'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>

          {/* Image counter */}
          <div className='absolute top-4 right-4 bg-black/80 text-white text-sm px-3 py-1.5 rounded-full backdrop-blur-sm'>
            <span className='font-medium'>{currentIndex + 1}</span>
            <span className='text-gray-300'> / {images.length}</span>
          </div>

          {/* Image title */}
          <div className='absolute top-4 left-4 bg-black/80 text-white text-sm px-3 py-1.5 rounded-full backdrop-blur-sm'>
            <span className='font-medium'>{title}</span>
          </div>
        </>
      )}

      {/* Image navigation hint for mobile */}
      {images.length > 1 && (
        <div className='absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white/70 text-xs'>
          ← Swipe or use arrows →
        </div>
      )}
    </div>
  );
};

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Rubi Robot',
      description:
        'Building an intelligent mobile robot that understands voice commands, detects objects, and navigates autonomously using computer vision, sensors and natural language processing.',
      tags: ['Python', 'OpenCV', 'YOLOv8', 'Raspberry Pi', 'AI', 'Robotics'],
      githubStars: 15,
      githubForks: 5,
      liveUrl: '#',
      githubUrl: 'https://github.com/aliijaz33/rubi-robot',
      featured: true,
      images: ['/images/projects/robot-ai.jpg'], // placeholder
    },
    {
      title: 'AZ-Pay',
      description:
        'A Binance P2P-inspired mobile app enabling secure peer-to-peer currency exchange and transfers across multiple countries with escrow protection, real-time rates, and multi-currency wallet support.',
      tags: ['React Native', 'Node.js', 'MongoDB', 'Express.js', 'Fintech'],
      githubStars: 28,
      githubForks: 12,
      liveUrl: '#',
      githubUrl: 'https://github.com/aliijaz33/az-pay',
      featured: true,
      images: [
        '/images/projects/az-pay/Dashboard.png',
        '/images/projects/az-pay/Deposit.png',
        '/images/projects/az-pay/Deposit:Withdraw.png',
        '/images/projects/az-pay/P2P Add selection.png',
        '/images/projects/az-pay/P2P Order history.png',
        '/images/projects/az-pay/P2P Profile.png',
        '/images/projects/az-pay/P2P create Add.png',
        '/images/projects/az-pay/P2P currency selection.png',
        '/images/projects/az-pay/Portfolio.png',
        '/images/projects/az-pay/Settings.png',
        '/images/projects/az-pay/Side Bar.png',
        '/images/projects/az-pay/Transfer.png',
      ],
    },
    {
      title: 'AZ-Ride Share',
      description:
        'A ride-sharing mobile application similar to Uber with real-time tracking, payment integration, and driver-passenger matching.',
      tags: ['React Native', 'Google Maps', 'Firebase', 'Payment Gateway'],
      githubStars: 22,
      githubForks: 8,
      liveUrl: '#',
      githubUrl: 'https://github.com/aliijaz33/az-ride',
      featured: false,
      images: ['/images/projects/ride-share.jpg'], // placeholder
    },
    {
      title: 'Mini Trust Wallet',
      description:
        'Web3 Wallet for cryptocurrency with secure transactions, multi-chain support, and NFT display capabilities.',
      tags: ['React Native', 'Web3', 'Blockchain', 'Crypto', 'Ethereum'],
      githubStars: 18,
      githubForks: 6,
      liveUrl: '#',
      githubUrl: 'https://github.com/aliijaz33/mini-trust-wallet',
      featured: false,
      images: [
        '/images/projects/trust-wallet/Welcome.png',
        '/images/projects/trust-wallet/QRCode.png',
        '/images/projects/trust-wallet/addressCopied.png',
        '/images/projects/trust-wallet/createWallet 1.png',
        '/images/projects/trust-wallet/createWallet 2.png',
        '/images/projects/trust-wallet/importWallet 1.png',
        '/images/projects/trust-wallet/importWallet 2.png',
        '/images/projects/trust-wallet/recoveryPhraseHide.png',
        '/images/projects/trust-wallet/recoveryPhraseShown.png',
        '/images/projects/trust-wallet/resetWallet.png',
        '/images/projects/trust-wallet/settings.png',
        '/images/projects/trust-wallet/walletLoading.png',
      ],
    },
    {
      title: 'GymIstan',
      description:
        'Fitness and gym management application with workout tracking, nutrition plans, and progress analytics.',
      tags: ['React Native', 'Firebase', 'Redux', 'Fitness'],
      githubStars: 12,
      githubForks: 4,
      liveUrl: '#',
      githubUrl: 'https://github.com/aliijaz33/gymistan',
      featured: false,
      images: ['/images/projects/fitness-app.jpg'], // placeholder
    },
    {
      title: 'Virtual Stylist',
      description:
        'AI-powered fashion recommendation system that suggests outfits based on user preferences and current trends.',
      tags: ['React Native', 'AI', 'Fashion', 'Recommendation System'],
      githubStars: 10,
      githubForks: 3,
      liveUrl: '#',
      githubUrl: 'https://github.com/aliijaz33/virtual-stylist',
      featured: false,
      images: ['/images/projects/fashion-ai.jpg'], // placeholder
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

              {/* Project Image Carousel */}
              <div className='mt-6 aspect-[3/4] rounded-xl overflow-hidden opacity-90 group-hover:opacity-100 transition-opacity bg-gray-900'>
                <ImageCarousel images={project.images} title={project.title} />
              </div>

              {/* Image count badge */}
              {project.images.length > 1 && (
                <div className='mt-2 text-sm text-gray-500 text-center'>
                  {project.images.length} images available • Use arrows to
                  navigate
                </div>
              )}
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
              href='https://github.com/aliijaz33'
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
