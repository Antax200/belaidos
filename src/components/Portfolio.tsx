import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';
import type { Project } from '../types';

const categories = [
  { id: 'all', label: 'All Work' },
  { id: 'web', label: 'Web Development' },
  { id: 'graphic', label: 'Graphic Design' },
  { id: 'video', label: 'Video Editing' }
];

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter((project: Project) => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-indigo-600 dark:text-indigo-400">Portfolio</span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Explore my recent projects showcasing web development, graphic design, and video editing work.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 mx-2 mb-4 rounded-full transition-colors ${
                activeCategory === category.id 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="relative overflow-hidden rounded-lg shadow-md group"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 dark:bg-gray-700">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 object-cover"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/640x360?text=Image+Not+Found';
                  }}
                />
              </div>
              
              <div 
                className={`absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent p-6 flex flex-col justify-end transition-opacity duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-90'
                }`}
              >
                <div className={`transform transition-transform duration-300 ${
                  hoveredProject === project.id ? 'translate-y-0' : 'translate-y-4'
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink size={16} className="text-white" />
                      </a>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="text-xs px-2 py-1 bg-white/20 rounded-full text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <p className={`text-sm text-gray-200 transition-opacity duration-300 ${
                    hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    {project.description}
                  </p>
                </div>
              </div>
              
              {project.featured && (
                <div className="absolute top-4 left-4 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full">
                  Featured
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;