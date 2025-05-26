import React from 'react';
import { Code, PenTool, Video } from 'lucide-react';
import { services } from '../data/services';

const getServiceColor = (icon: string) => {
  switch (icon) {
    case 'code':
      return {
        bg: 'bg-blue-100 dark:bg-blue-900/30',
        text: 'text-blue-500',
        hover: 'group-hover:bg-blue-200 dark:group-hover:bg-blue-800/40',
        border: 'border-blue-200 dark:border-blue-800/40'
      };
    case 'pen-tool':
      return {
        bg: 'bg-purple-100 dark:bg-purple-900/30',
        text: 'text-purple-500',
        hover: 'group-hover:bg-purple-200 dark:group-hover:bg-purple-800/40',
        border: 'border-purple-200 dark:border-purple-800/40'
      };
    case 'video':
      return {
        bg: 'bg-teal-100 dark:bg-teal-900/30',
        text: 'text-teal-500',
        hover: 'group-hover:bg-teal-200 dark:group-hover:bg-teal-800/40',
        border: 'border-teal-200 dark:border-teal-800/40'
      };
    default:
      return {
        bg: 'bg-gray-100 dark:bg-gray-900/30',
        text: 'text-gray-500',
        hover: 'group-hover:bg-gray-200 dark:group-hover:bg-gray-800/40',
        border: 'border-gray-200 dark:border-gray-800/40'
      };
  }
};

const icons: Record<string, React.ReactNode> = {
  'code': <Code size={24} className="text-blue-500 dark:text-blue-400" />,
  'pen-tool': <PenTool size={24} className="text-purple-500 dark:text-purple-400" />,
  'video': <Video size={24} className="text-teal-500 dark:text-teal-400" />
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-indigo-600 dark:text-indigo-400">Services</span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            I offer a range of creative services to help bring your ideas to life, combining technical expertise with artistic vision.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const colors = getServiceColor(service.icon);
            return (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-8 group border border-transparent hover:border-opacity-50 hover:border-current"
              >
                <div className={`w-16 h-16 ${colors.bg} ${colors.hover} rounded-full flex items-center justify-center mb-6 transition-colors`}>
                  {icons[service.icon]}
                </div>
                
                <h3 className={`text-xl font-semibold mb-4 ${colors.text}`}>
                  {service.title}
                </h3>
                
                <p className="text-gray-700 dark:text-gray-300">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;