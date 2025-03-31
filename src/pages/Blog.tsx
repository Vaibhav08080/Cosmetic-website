import React from 'react';
import { Link } from 'react-router-dom';

export function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "10 Skincare Tips for Glowing Skin",
      excerpt: "Discover the secrets to achieving naturally glowing skin with these expert tips...",
      image: "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?auto=format&fit=crop&w=800&q=80",
      date: "2024-03-15",
      category: "Skincare"
    },
    {
      id: 2,
      title: "The Ultimate Guide to Natural Makeup",
      excerpt: "Learn how to create beautiful, natural-looking makeup looks using clean beauty products...",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      date: "2024-03-10",
      category: "Makeup"
    },
    {
      id: 3,
      title: "Understanding Your Skin Type",
      excerpt: "Find out how to identify your skin type and choose the right products for your needs...",
      image: "https://images.unsplash.com/photo-1513263000467-c5cd8c31dd36?auto=format&fit=crop&w=800&q=80",
      date: "2024-03-05",
      category: "Skincare"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-serif text-center mb-12">Beauty Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <div className="text-rose-600 text-sm mb-2">{post.category}</div>
              <h2 className="text-xl font-medium mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link 
                to={`/blog/${post.id}`}
                className="text-rose-600 hover:text-rose-700 font-medium"
              >
                Read More →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
} 