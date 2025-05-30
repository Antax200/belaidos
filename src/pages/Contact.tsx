import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get in <span className="text-indigo-600 dark:text-indigo-400">Touch</span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you!
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row max-w-5xl mx-auto">
          <div className="md:w-1/3 mb-10 md:mb-0 md:pr-8">
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full">
                    <Mail size={20} className="text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Email</h4>
                    <p className="text-gray-600 dark:text-gray-400">contact@belaido.art</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full">
                    <Phone size={20} className="text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Phone</h4>
                    <p className="text-gray-600 dark:text-gray-400">+212 643306702</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full">
                    <MapPin size={20} className="text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Location</h4>
                    <p className="text-gray-600 dark:text-gray-400">Morocco, MR</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Send Me a Message
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 