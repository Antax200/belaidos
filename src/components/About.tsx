import React from 'react';

const getSkillTagColor = (skill: string) => {
  // Development tools - Blue theme
  if (['React', 'TypeScript', 'Node.js'].includes(skill)) {
    return 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300';
  }
  // Design tools - Purple theme
  if (['Figma', 'Adobe CC'].includes(skill)) {
    return 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300';
  }
  // Video tools - Teal theme
  if (['Premiere Pro', 'After Effects'].includes(skill)) {
    return 'bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300';
  }
  // Default
  return 'bg-gray-100 dark:bg-gray-900/30 text-gray-800 dark:text-gray-300';
};

const About: React.FC = () => {
  const skills = [
    'React',
    'TypeScript',
    'Node.js',
    'Figma',
    'Adobe CC',
    'Premiere Pro',
    'After Effects'
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10 animate-on-scroll" data-animation="animate-fadeInLeft">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden mx-auto">
                <picture>
                  <source srcSet="/me.optimized.webp" type="image/webp" />
                  <source srcSet="/me.png" type="image/png" />
                  <img 
                    src="/me.png"
                    alt="Profile" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-teal-400 dark:bg-teal-400 rounded-full opacity-20"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-teal-500 dark:bg-teal-500 rounded-full opacity-20"></div>
            </div>
          </div>
          
          <div className="md:w-1/2 animate-on-scroll" data-animation="animate-fadeInRight">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              About <span className="text-teal-400 dark:text-teal-400">Me</span>
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a passionate creative professional with expertise in web development, graphic design, and video editing. With over 7 years of experience in the digital space, I've helped numerous clients bring their visions to life through compelling design and seamless functionality.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              My approach combines technical precision with artistic innovation, ensuring that each project not only meets functional requirements but also creates a memorable experience. I believe in the power of visual storytelling and user-centered design to create meaningful connections between brands and their audiences.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Education</h3>
                <p className="text-gray-700 dark:text-gray-300">Bachelor of Design, Digital Media</p>
                <p className="text-gray-600 dark:text-gray-400">University of Creative Arts</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Experience</h3>
                <p className="text-gray-700 dark:text-gray-300">7+ Years Professional Experience</p>
                <p className="text-gray-600 dark:text-gray-400">20+ Major Projects Completed</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span 
                  key={index} 
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${getSkillTagColor(skill)}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;