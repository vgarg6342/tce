import React from 'react';
import Contactus from '@/component/contactus';

const ContactPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Get in Touch
        </h2>
        <p className="mt-4 text-lg text-gray-500">
          Have a question or just want to say hi? We'd love to hear from you.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Left Column: Contact Information */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
          
          <div className="space-y-6">
            {/* Phone */}
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-lg font-medium text-gray-900">Phone</p>
                <p className="text-gray-600">+91 9030349342</p>
                <p className="text-sm text-gray-500">Mon-Fri 9am to 6pm IST</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-lg font-medium text-gray-900">Email</p>
                <p className="text-gray-600">hello@thecompleteequation.com</p>
                <p className="text-sm text-gray-500">We usually reply within 24 hours.</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-lg font-medium text-gray-900">Address</p>
                <p className="text-gray-600">Diya Deep kutter-1, Road-43</p>
                <p className="text-gray-600">Uppal, HDMA Layout</p>
                <p className="text-gray-600">hyderabad, 500039</p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-6 border-t border-gray-200">
               <p className="text-sm font-medium text-gray-500 mb-3">Connect with us:</p>
               <div className="flex space-x-4">
                  {/* Social Icons Placeholders */}
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition">Twitter/X</a>
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition">LinkedIn</a>
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition">Instagram</a>
               </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <Contactus />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;