import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xanorrdo', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            placeholder="Your name"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            placeholder="Your email"
          />
        </div>
      </div>
      
      <div className="mb-6">
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          placeholder="What is this regarding?"
        />
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          placeholder="Your message"
        ></textarea>
      </div>

      {status === 'success' && (
        <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-lg">
          Your message has been sent successfully! I'll get back to you soon.
        </div>
      )}

      {status === 'error' && (
        <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded-lg">
          Oops! There was a problem sending your message. Please try again.
        </div>
      )}
      
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center"
      >
        {status === 'submitting' ? (
          <span>Sending...</span>
        ) : (
          <>
            <Send size={18} className="mr-2" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm; 