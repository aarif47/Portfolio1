import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Your Name" className="w-32 h-32 rounded-full mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-2">Your Name</h1>
        <p className="text-xl text-gray-600 mb-4">Digital Marketing Expert & Web Developer</p>
        <p className="text-lg mb-6">Helping businesses thrive through innovative digital marketing strategies</p>
        <Link to="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-full inline-flex items-center hover:bg-blue-700 transition duration-300">
          Get in Touch <ArrowRight className="ml-2" size={20} />
        </Link>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Digital Marketing</h2>
          <p className="text-gray-600">Boost your online presence with our expert digital marketing services.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Web Development</h2>
          <p className="text-gray-600">Create stunning, responsive websites that convert visitors into customers.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">SEO Optimization</h2>
          <p className="text-gray-600">Improve your search engine rankings and drive organic traffic to your site.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;