import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Have a question or want to work together? Send us a message!
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact; 