import React from 'react';
import { Globe, PenTool, BarChart, ShoppingCart } from 'lucide-react';

const ServiceCard: React.FC<{ title: string; description: string; icon: React.ReactNode }> = ({ title, description, icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="text-blue-600 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Services: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <ServiceCard
          title="Social Media Marketing"
          description="Create engaging campaigns, target the right audience, and boost your brand's social presence."
          icon={<Globe size={32} />}
        />
        <ServiceCard
          title="SEO Optimization"
          description="Improve your search engine rankings with keyword research, on-page SEO, and content optimization."
          icon={<BarChart size={32} />}
        />
        <ServiceCard
          title="Web Design & Development"
          description="Build visually appealing, user-friendly websites optimized for conversions and performance."
          icon={<PenTool size={32} />}
        />
        <ServiceCard
          title="E-commerce Solutions"
          description="Develop and optimize online stores to maximize sales and improve customer experience."
          icon={<ShoppingCart size={32} />}
        />
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Custom Packages</h2>
        <p className="text-gray-700 mb-4">
          Need a tailored solution? We offer custom packages designed to meet your specific business needs and goals.
          Our personalized approach ensures that you get the most value from our services.
        </p>
        <a href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-full inline-block hover:bg-blue-700 transition duration-300">
          Get a Custom Quote
        </a>
      </div>
    </div>
  );
};

export default Services;