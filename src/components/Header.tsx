import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-800">Your Name</Link>
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="text-gray-600 hover:text-gray-800">Home</Link>
          <Link to="/about" className="text-gray-600 hover:text-gray-800">About</Link>
          <Link to="/services" className="text-gray-600 hover:text-gray-800">Services</Link>
          <Link to="/portfolio" className="text-gray-600 hover:text-gray-800">Portfolio</Link>
          <Link to="/blog" className="text-gray-600 hover:text-gray-800">Blog</Link>
          <Link to="/contact" className="text-gray-600 hover:text-gray-800">Contact</Link>
        </nav>
        <button className="md:hidden">
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;