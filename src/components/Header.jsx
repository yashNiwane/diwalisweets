import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/Logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-gray-900 p-4 sticky top-0 z-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="" className="w-10 h-10 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full mr-3 shadow-lg"/>
          <h1 className="text-2xl font-bold">Sunanda&apos;s Kitchen</h1>
        </div>
        <button onClick={toggleMenu} className="md:hidden">
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-white">Home</Link>
          <Link to="/about" className="hover:text-white">About Us</Link>
          <Link to="/contact" className="hover:text-white">Contact</Link>
        </nav>
      </div>
      {isMenuOpen && (
        <nav className="mt-4 md:hidden">
          <Link to="/" className="block py-2 hover:text-white">Home</Link>
          <Link to="/about" className="block py-2 hover:text-white">About Us</Link>
          <Link to="/contact" className="block py-2 hover:text-white">Contact</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
