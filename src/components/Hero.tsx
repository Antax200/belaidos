import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heading = headingRef.current;
    const subtitle = subtitleRef.current;
    const button = buttonRef.current;

    if (heading && subtitle && button) {
      heading.style.opacity = '0';
      subtitle.style.opacity = '0';
      button.style.opacity = '0';
      
      setTimeout(() => {
        heading.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
        heading.style.opacity = '1';
        heading.style.transform = 'translateY(0)';
      }, 300);
      
      setTimeout(() => {
        subtitle.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
        subtitle.style.opacity = '1';
        subtitle.style.transform = 'translateY(0)';
      }, 600);
      
      setTimeout(() => {
        button.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
        button.style.opacity = '1';
        button.style.transform = 'translateY(0)';
      }, 900);
    }
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .fade-in-up {
            opacity: 0;
            animation: fadeInUp 0.8s ease-out forwards;
          }
          .delay-300 {
            animation-delay: 0.3s;
          }
          .delay-600 {
            animation-delay: 0.6s;
          }
        `}
      </style>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-400/30 via-teal-500/20 to-teal-600/10 dark:opacity-100 opacity-0"></div>
        <div className="absolute inset-0 bg-[url('Prince V.optimized.jpg')] bg-cover bg-center bg-no-repeat opacity-80 dark:opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 z-10 text-center">
        <h1 
          ref={headingRef}
          className="text-4xl md:text-3xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6"
          style={{ opacity: 0, transform: 'translateY(20px)' }}
        >
          <div className="relative flex flex-col items-center">
            <div className="fade-in-up delay-300 transform hover:-translate-y-1 transition-transform">
              <span className="relative">
                Bringing <span className="text-indigo-600 dark:text-indigo-400">Creative Ideas</span>
              </span>
            </div>
            <div className="fade-in-up delay-600 mt-2 md:mt-4 transform hover:-translate-y-1 transition-transform">
              <span className="relative inline-block">
                to Life
              </span>
            </div>
          </div>
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl text-white dark:text-gray-300 max-w-3xl mx-auto mb-10"
          style={{ opacity: 0, transform: 'translateY(20px)' }}
        >
          Web Developer. Graphic Designer. Video Editor.
        </p>
        
        <div 
          ref={buttonRef}
          className="flex justify-center space-x-4"
          style={{ opacity: 0, transform: 'translateY(20px)' }}
        >
          <a 
            href="#portfolio" 
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-full transition-colors duration-300"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 border border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-400 dark:hover:text-gray-900 font-medium rounded-full transition-colors duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
          <ChevronDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;