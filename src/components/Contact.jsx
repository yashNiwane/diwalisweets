import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-100 to-orange-100 text-gray-800 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4">
                We&apos;d love to hear from you! For orders, inquiries, or feedback, please contact us at:
              </p>
              <p className="mb-4">
                Phone: +91 7038719588
              </p>
              <p className="mb-4">
                Email: niwanesunanda@.com
              </p>
              <p className="mb-4">
                Address: Gatha Mindir road,Dehu,Pune,Maharashtra 412109
              </p>
              <div className="flex space-x-4 mt-6">
                <a href="https://www.facebook.com/sunandaskitchen" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                  <FaFacebook size={24} />
                </a>
                <a href="https://www.instagram.com/sunandaskitchen" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
            <div>
              <form action="https://formspree.io/f/mwpkkjgv" method="POST" className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1">Name</label>
                  <input type="text" id="name" name="name" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1">Email</label>
                  <input type="email" id="email" name="email" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-1">Message</label>
                  <textarea id="message" name="message" rows="4" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"></textarea>
                </div>
                <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition duration-300">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
