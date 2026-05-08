import React, { useState } from 'react';
import {
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
    return null;
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
      type: 'web',
      video:
        '/images/projects/rubi-robot/Screen Recording 2026-04-14 at 10.47.01 AM.mov',
      images: [],
    },
    {
      title: 'Thumbnail Genius',
      description:
        'An AI-powered thumbnail generator that creates stunning YouTube thumbnails using advanced models. Features include multiple AI model selection, light/dark mode, and customizable templates for different content types.',
      tags: [
        'React',
        'Material-UI',
        'AI',
        'Image Generation',
        'Responsive Design',
      ],
      githubStars: 5,
      githubForks: 2,
      liveUrl: '#',
      githubUrl: 'https://github.com/aliijaz33/thumbnail-genius',
      featured: true,
      type: 'web',
      images: [
        '/images/projects/thumbnail-genius/modelSelection1.png',
        '/images/projects/thumbnail-genius/lightDarkMode2.png',
        '/images/projects/thumbnail-genius/thumbnail3.png',
        '/images/projects/thumbnail-genius/thumbnail4.png',
        '/images/projects/thumbnail-genius/meme5.png',
        '/images/projects/thumbnail-genius/meme6.png',
        '/images/projects/thumbnail-genius/simmple7.png',
      ],
    },
    {
      title: 'Portfolio Website',
      description:
        'A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features include dark mode, interactive components, and smooth animations.',
      tags: [
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Vite',
        'Responsive Design',
      ],
      githubStars: 8,
      githubForks: 3,
      liveUrl: '#',
      githubUrl: 'https://github.com/aliijaz33/portfolio',
      featured: false,
      type: 'web',
      images: ['/images/projects/portfolio/home.png'],
    },

    {
      title: 'AZ-Pay',
      description:
        'A Binance P2P-inspired mobile app enabling secure peer-to-peer currency exchange and transfers across multiple countries with escrow protection, real-time rates, and multi-currency wallet support.',
      tags: ['React Native', 'Node.js', 'MongoDB', 'Express.js', 'Fintech'],
      githubStars: 28,
      githubForks: 12,
      liveUrl: '#',
      githubUrl:
        'https://github.com/aliijaz33/AZ_Pay-P2P-currency-exchange-App-RN',
      featured: true,
      type: 'mobile',
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
      title: 'Mini Trust Wallet',
      description:
        'Web3 Wallet for cryptocurrency with secure transactions, multi-chain support, and NFT display capabilities.',
      tags: ['React Native', 'Web3', 'Blockchain', 'Crypto', 'Ethereum'],
      githubStars: 18,
      githubForks: 6,
      liveUrl: '#',
      githubUrl: 'https://github.com/aliijaz33/mini-trust-wallet',
      featured: false,
      type: 'mobile',
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
      type: 'mobile',
      images: [
        '/images/projects/gymistan/login.png',
        '/images/projects/gymistan/dashboard.png',
        '/images/projects/gymistan/excersises.png',
        '/images/projects/gymistan/specificExcersises.png',
        '/images/projects/gymistan/excersiseDetails.png',
        '/images/projects/gymistan/excersiseDetails2.png',
        '/images/projects/gymistan/play.png',
        '/images/projects/gymistan/settings.png',
        '/images/projects/gymistan/settings2.png',
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
      type: 'mobile',
      images: [
        '/images/projects/az-rideshare/splash.png',
        '/images/projects/az-rideshare/register.png',
        '/images/projects/az-rideshare/register2.png',
        '/images/projects/az-rideshare/register3.png',
        '/images/projects/az-rideshare/register4.png',
        '/images/projects/az-rideshare/register5.png',
        '/images/projects/az-rideshare/register6.png',
        '/images/projects/az-rideshare/map.png',
        '/images/projects/az-rideshare/inCity.png',
        '/images/projects/az-rideshare/inCity2.png',
        '/images/projects/az-rideshare/citytocity.png',
        '/images/projects/az-rideshare/profile.png',
        '/images/projects/az-rideshare/shareRide.png',
      ],
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
      type: 'mobile',
      images: [], // No images available
    },
  ];

  // Separate projects by type
  const webProjects = projects.filter((project) => project.type === 'web');
  const mobileProjects = projects.filter(
    (project) => project.type === 'mobile',
  );

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

        {/* Two-Column Project Layout */}
        <div className='grid lg:grid-cols-8 gap-8 mb-12'>
          {/* Left Column - Web Projects (5/8 width - reduced) */}
          <div className='lg:col-span-5 space-y-8'>
            {webProjects.map((project, index) => (
              <div
                key={index}
                className={`card group hover:scale-[1.02] transition-transform ${
                  project.featured ? 'border-2 border-primary-500' : ''
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

                {/* Project Links - Only GitHub link */}
                <div className='flex gap-4'>
                  <a
                    href={project.githubUrl}
                    className='flex items-center gap-2 text-gray-700 hover:text-primary-600 font-medium'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <GitBranch className='w-5 h-5' />
                    View on GitHub
                  </a>
                </div>

                {/* Project Media - Video for Rubi Robot, Images for others */}
                <div className='mt-6 aspect-video rounded-xl overflow-hidden opacity-90 group-hover:opacity-100 transition-opacity bg-gray-900'>
                  {project.video ? (
                    <div className='relative w-full h-full'>
                      <video
                        className='w-full h-full object-cover'
                        controls
                        autoPlay
                        muted
                        loop
                        playsInline
                      >
                        <source src={project.video} type='video/quicktime' />
                        <source src={project.video} type='video/mp4' />
                        Your browser does not support the video tag.
                      </video>
                      <div className='absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm'>
                        Demo Video
                      </div>
                    </div>
                  ) : project.images.length > 0 ? (
                    <ImageCarousel
                      images={project.images}
                      title={project.title}
                    />
                  ) : (
                    <div className='w-full h-full flex items-center justify-center text-gray-400'>
                      No media available
                    </div>
                  )}
                </div>

                {/* Media info badge */}
                {project.video ? (
                  <div className='mt-2 text-sm text-gray-500 text-center'>
                    Interactive demo video with sound • Click to play
                  </div>
                ) : project.images.length > 1 ? (
                  <div className='mt-2 text-sm text-gray-500 text-center'>
                    {project.images.length} images available • Use arrows to
                    navigate
                  </div>
                ) : null}
              </div>
            ))}
          </div>

          {/* Right Column - Mobile Projects (3/8 width - increased) */}
          <div className='lg:col-span-3'>
            {/* Mobile Projects Title */}
            <div className='mb-8'>
              <h3 className='text-2xl font-bold text-gray-800'>
                Mobile Projects
              </h3>
              <p className='text-gray-600 mt-2'>
                Native and cross‑platform mobile applications built with React
                Native
              </p>
            </div>

            <div className='space-y-8'>
              {mobileProjects.map((project, index) => (
                <div
                  key={index}
                  className={`card group hover:scale-[1.02] transition-transform ${
                    project.featured ? 'border-2 border-primary-500' : ''
                  }`}
                >
                  {/* Project Header */}
                  <div className='flex justify-between items-start mb-4'>
                    <div>
                      <h3 className='text-xl font-bold'>{project.title}</h3>
                      <div className='flex items-center gap-4 mt-2'>
                        <div className='flex items-center gap-1 text-gray-600'>
                          <Star className='w-4 h-4' />
                          <span className='text-sm'>{project.githubStars}</span>
                        </div>
                        <div className='flex items-center gap-1 text-gray-600'>
                          <GitFork className='w-4 h-4' />
                          <span className='text-sm'>{project.githubForks}</span>
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
                  <p className='text-gray-600 mb-4 text-sm'>
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className='flex flex-wrap gap-2 mb-4'>
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className='px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs'
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className='px-2 py-1 bg-gray-200 text-gray-600 rounded-full text-xs'>
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Project Links - Only GitHub link */}
                  <div className='flex gap-3 mb-4'>
                    <a
                      href={project.githubUrl}
                      className='flex items-center gap-1 text-gray-700 hover:text-primary-600 font-medium text-sm'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <GitBranch className='w-4 h-4' />
                      View on GitHub
                    </a>
                  </div>

                  {/* Project Image Carousel - Only show if images exist */}
                  {project.images.length > 0 && (
                    <>
                      <div className='mt-4 aspect-[3/4] rounded-xl overflow-hidden opacity-90 group-hover:opacity-100 transition-opacity bg-gray-900'>
                        <ImageCarousel
                          images={project.images}
                          title={project.title}
                        />
                      </div>

                      {/* Image count badge */}
                      {project.images.length > 1 && (
                        <div className='mt-2 text-xs text-gray-500 text-center'>
                          {project.images.length} screenshots • Swipe to view
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* GitHub Stats */}
        <div className='card bg-gradient-to-r from-gray-900 to-gray-800 text-white'>
          <div className='grid md:grid-cols-4 gap-8'>
            <div className='text-center'>
              <div className='text-4xl font-bold'>31</div>
              <div className='text-gray-300'>Contributions (2026)</div>
            </div>
            <div className='text-center'>
              <div className='text-4xl font-bold'>28</div>
              <div className='text-gray-300'>Public Repositories</div>
            </div>
            <div className='text-center'>
              <div className='text-4xl font-bold'>1.2k+</div>
              <div className='text-gray-300'>Total Commits</div>
            </div>
            <div className='text-center'>
              <div className='text-4xl font-bold'>85</div>
              <div className='text-gray-300'>Stars Received</div>
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
