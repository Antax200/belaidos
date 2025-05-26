import React from 'react';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold text-indigo-400">
              Portfolio
            </a>
            <p className="mt-2 text-gray-400 max-w-xs">
              Creating innovative digital experiences through design, development, and video.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row md:space-x-12 space-y-6 md:space-y-0">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="#home" 
                    className="text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a 
                    href="#about" 
                    className="text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a 
                    href="#services" 
                    className="text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a 
                    href="#portfolio" 
                    className="text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    className="text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="p-2 bg-gray-800 rounded-full hover:bg-indigo-600 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="#" 
                  className="p-2 bg-gray-800 rounded-full hover:bg-indigo-600 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a 
                  href="#" 
                  className="p-2 bg-gray-800 rounded-full hover:bg-indigo-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="#" 
                  className="p-2 bg-gray-800 rounded-full hover:bg-indigo-600 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;