import React from 'react';
import { Code, PenTool, Video } from 'lucide-react';
import { Skill } from '../types';

const getSkillColor = (category: string) => {
  switch (category) {
    case 'development':
      return {
        bg: 'bg-blue-100 dark:bg-blue-900/30',
        text: 'text-blue-500',
        bar: 'bg-blue-500'
      };
    case 'design':
      return {
        bg: 'bg-purple-100 dark:bg-purple-900/30',
        text: 'text-purple-500',
        bar: 'bg-purple-500'
      };
    case 'video':
      return {
        bg: 'bg-teal-100 dark:bg-teal-900/30',
        text: 'text-teal-500',
        bar: 'bg-teal-500'
      };
    default:
      return {
        bg: 'bg-gray-100 dark:bg-gray-900/30',
        text: 'text-gray-500',
        bar: 'bg-gray-500'
      };
  }
};

const skills: Skill[] = [
  // Development Skills
  { name: 'React', level: 90, category: 'development' },
  { name: 'TypeScript', level: 85, category: 'development' },
  { name: 'Node.js', level: 80, category: 'development' },
  // Design Skills
  { name: 'Figma', level: 95, category: 'design' },
  { name: 'Adobe Photoshop', level: 90, category: 'design' },
  { name: 'Adobe Illustrator', level: 85, category: 'design' },
  // Video Skills
  { name: 'Premiere Pro', level: 90, category: 'video' },
  { name: 'After Effects', level: 85, category: 'video' },
  { name: 'DaVinci Resolve', level: 75, category: 'video' },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-on-scroll" data-animation="animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-indigo-600 dark:text-indigo-400">Skills</span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical proficiency and expertise across different tools and technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Development Skills */}
          <div className="animate-on-scroll" data-animation="animate-fadeInLeft">
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-2 ${getSkillColor('development').bg} rounded-lg`}>
                <Code size={24} className={getSkillColor('development').text} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Development</h3>
            </div>
            <div className="space-y-6">
              {skills
                .filter(skill => skill.category === 'development')
                .map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className={getSkillColor('development').text}>{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${getSkillColor('development').bar} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%`, transform: 'translateX(-100%)', animation: 'slideRight 1.5s ease-out forwards' }}
                      ></div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Design Skills */}
          <div className="animate-on-scroll" data-animation="animate-fadeInUp">
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-2 ${getSkillColor('design').bg} rounded-lg`}>
                <PenTool size={24} className={getSkillColor('design').text} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Design</h3>
            </div>
            <div className="space-y-6">
              {skills
                .filter(skill => skill.category === 'design')
                .map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className={getSkillColor('design').text}>{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${getSkillColor('design').bar} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%`, transform: 'translateX(-100%)', animation: 'slideRight 1.5s ease-out forwards' }}
                      ></div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Video Skills */}
          <div className="animate-on-scroll" data-animation="animate-fadeInRight">
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-2 ${getSkillColor('video').bg} rounded-lg`}>
                <Video size={24} className={getSkillColor('video').text} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Video</h3>
            </div>
            <div className="space-y-6">
              {skills
                .filter(skill => skill.category === 'video')
                .map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className={getSkillColor('video').text}>{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${getSkillColor('video').bar} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%`, transform: 'translateX(-100%)', animation: 'slideRight 1.5s ease-out forwards' }}
                      ></div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;