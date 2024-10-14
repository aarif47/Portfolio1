import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">About Me</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">My Story</h2>
          <p className="text-gray-700 mb-4">
            With over a decade of experience in digital marketing and web development, I've helped numerous businesses
            achieve their online goals. My journey began with a passion for technology and a desire to help companies
            navigate the ever-changing digital landscape.
          </p>
          <p className="text-gray-700 mb-4">
            Throughout my career, I've worked with startups, small businesses, and large corporations, giving me a
            unique perspective on the challenges and opportunities that exist in the digital world.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Skills & Expertise</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Digital Marketing (SEO, PPC, Social Media)</li>
            <li>Web Development (HTML, CSS, JavaScript, React)</li>
            <li>Content Creation & Strategy</li>
            <li>E-commerce Optimization</li>
            <li>Data Analysis & Reporting</li>
            <li>Project Management</li>
          </ul>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">My Mission</h2>
        <p className="text-gray-700">
          My mission is to empower businesses with the digital tools and strategies they need to succeed in today's
          competitive online marketplace. I believe in creating tailored solutions that not only meet immediate goals
          but also set the foundation for long-term growth and success.
        </p>
      </div>
    </div>
  );
};

export default About;