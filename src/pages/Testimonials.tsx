import React from 'react';
import { Star } from 'lucide-react';

const TestimonialCard: React.FC<{ name: string; company: string; testimonial: string; rating: number }> = ({ name, company, testimonial, rating }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} />
      ))}
    </div>
    <p className="text-gray-600 mb-4">{testimonial}</p>
    <div>
      <p className="font-semibold">{name}</p>
      <p className="text-sm text-gray-500">{company}</p>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "John Doe",
      company: "Tech Innovators Inc.",
      testimonial: "Working with this team has been a game-changer for our online presence. Their expertise in digital marketing and web development has helped us achieve remarkable growth.",
      rating: 5
    },
    {
      name: "Jane Smith",
      company: "E-commerce Solutions",
      testimonial: "The SEO optimization services provided were top-notch. We've seen a significant increase in organic traffic and conversions since implementing their strategies.",
      rating: 4
    },
    {
      name: "Mike Johnson",
      company: "Local Business Network",
      testimonial: "Their social media marketing campaign exceeded our expectations. We've gained a substantial following and increased customer engagement across all platforms.",
      rating: 5
    },
    {
      name: "Sarah Williams",
      company: "StartUp Ventures",
      testimonial: "The web design team created a beautiful, user-friendly website that perfectly represents our brand. We've received numerous compliments from our clients.",
      rating: 5
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Client Testimonials</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;