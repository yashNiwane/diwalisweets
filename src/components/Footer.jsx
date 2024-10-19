import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-800 via-indigo-800 to-purple-900 text-yellow-100 p-6 mt-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center">
            <Phone className="mr-2 text-yellow-300" />
            <p>WhatsApp: +91 9834401591</p>
          </div>
          <div className="flex items-center">
            <Mail className="mr-2 text-yellow-300" />
            <p>Email: niwanesunanda@gmail.com</p>
          </div>
          <div className="flex items-center">
            <MapPin className="mr-2 text-yellow-300" />
            <p>Address: Gatha Mindir Road, Dehugaon</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;