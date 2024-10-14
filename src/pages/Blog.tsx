import React from 'react';
import { Link } from 'react-router-dom';

const BlogPost: React.FC<{ title: string; excerpt: string; date: string; image: string }> = ({ title, excerpt, date, image }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-2">{excerpt}</p>
      <p className="text-sm text-gray-500">{date}</p>
      <Link to="#" className="text-blue-600 hover:underline mt-2 inline-block">Read more</Link>
    </div>
  </div>
);

const Blog: React.FC = () => {
  const blogPosts = [
    {
      title: "5 SEO Strategies for 2023",
      excerpt: "Stay ahead of the curve with these cutting-edge SEO techniques.",
      date: "May 15, 2023",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "The Power of Social Media Marketing",
      excerpt: "Learn how to leverage social platforms to grow your brand.",
      date: "April 28, 2023",
      image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Web Design Trends to Watch",
      excerpt: "Discover the latest design trends shaping the digital landscape.",
      date: "April 10, 2023",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Maximizing ROI on PPC Campaigns",
      excerpt: "Tips and tricks to get the most out of your pay-per-click advertising.",
      date: "March 22, 2023",
      image: "https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {blogPosts.map((post, index) => (
          <BlogPost key={index} {...post} />
        ))}
      </div>
    </div>
  );
};

export default Blog;