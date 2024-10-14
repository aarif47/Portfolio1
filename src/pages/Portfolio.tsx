import React from 'react';

const PortfolioItem: React.FC<{ title: string; description: string; image: string }> = ({ title, description, image }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const Portfolio: React.FC = () => {
  const portfolioItems = [
    {
      title: "E-commerce Redesign",
      description: "Increased conversions by 50% through UX improvements and optimized product pages.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Social Media Campaign",
      description: "Boosted engagement by 200% for a local restaurant chain through targeted content strategy.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "SEO Optimization",
      description: "Achieved first page rankings for key terms, resulting in a 75% increase in organic traffic.",
      image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Brand Identity Design",
      description: "Created a cohesive brand identity for a tech startup, including logo, website, and marketing materials.",
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Portfolio</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {portfolioItems.map((item, index) => (
          <PortfolioItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;