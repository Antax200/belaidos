import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../data/testimonials';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Client <span className="text-indigo-600 dark:text-indigo-400">Testimonials</span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            What my clients have to say about working with me and the results we achieved together.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute top-0 left-0 transform -translate-x-6 -translate-y-6">
            <Quote size={48} className="text-indigo-200 dark:text-indigo-800 absolute -top-8 -left-4" />
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 md:p-10 relative z-10">
            <div className="mb-8 text-gray-700 dark:text-gray-300 text-lg italic leading-relaxed">
              "{testimonials[currentIndex].content}"
            </div>
            
            <div className="flex items-center">
              <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                <img 
                  src={testimonials[currentIndex].avatar} 
                  alt={testimonials[currentIndex].name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} className="text-gray-700 dark:text-gray-300" />
            </button>
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex 
                      ? 'bg-indigo-600 dark:bg-indigo-400' 
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} className="text-gray-700 dark:text-gray-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;