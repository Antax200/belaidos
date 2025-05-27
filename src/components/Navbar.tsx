import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { NavItem } from '../types';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' }
];

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'
    } ${darkMode ? 'dark' : ''}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#home" className={`text-3xl font-bold ${
            scrolled ? 'text-indigo-600 dark:text-indigo-400' : 'text-white dark:text-indigo-400'
          }`}>
            <img 
              src="./logo antax.png" 
              alt="ANTAX" 
              className="h-10 w-auto"
            />
          </a>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href} 
                    className={`font-medium transition-colors ${
                      scrolled 
                        ? 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                        : 'text-white dark:text-gray-300 hover:text-indigo-200 dark:hover:text-indigo-400'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <button 
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-colors ${
                scrolled 
                  ? 'hover:bg-gray-200 dark:hover:bg-gray-700'
                  : 'hover:bg-white/20 dark:hover:bg-gray-700'
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} className="text-gray-300" /> : <Moon size={20} className={scrolled ? 'text-gray-700' : 'text-white'} />}
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={toggleDarkMode}
              className={`p-2 mr-2 rounded-full transition-colors ${
                scrolled 
                  ? 'hover:bg-gray-200 dark:hover:bg-gray-700'
                  : 'hover:bg-white/20 dark:hover:bg-gray-700'
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} className="text-gray-300" /> : <Moon size={20} className={scrolled ? 'text-gray-700' : 'text-white'} />}
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-full transition-colors ${
                scrolled 
                  ? 'hover:bg-gray-200 dark:hover:bg-gray-700'
                  : 'hover:bg-white/20 dark:hover:bg-gray-700'
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen 
                ? <X size={24} className={scrolled ? 'text-gray-700' : 'text-white'} /> 
                : <Menu size={24} className={scrolled ? 'text-gray-700' : 'text-white'} />
              }
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <ul className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href} 
                    className={`block font-medium transition-colors ${
                      scrolled 
                        ? 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                        : 'text-white dark:text-gray-300 hover:text-indigo-200 dark:hover:text-indigo-400'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;