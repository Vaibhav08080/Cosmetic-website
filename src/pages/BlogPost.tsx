import React from 'react';
import { useParams } from 'react-router-dom';

export function BlogPost() {
  const { id } = useParams<{ id: string }>();

  // Mock blog post data - in a real app, fetch from API
  const post = {
    id: parseInt(id || '1'),
    title: "10 Skincare Tips for Glowing Skin",
    content: `
      <p>Achieving naturally glowing skin requires a consistent skincare routine and healthy habits. Here are our top tips:</p>
      
      <h3>1. Cleanse Properly</h3>
      <p>Always cleanse your face morning and night with a gentle cleanser suitable for your skin type.</p>

      <h3>2. Stay Hydrated</h3>
      <p>Drink plenty of water throughout the day to keep your skin hydrated from within.</p>
    `,
    image: "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?auto=format&fit=crop&w=1200&q=80",
    date: "2024-03-15",
    author: "Sarah Johnson",
    category: "Skincare"
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <article className="max-w-3xl mx-auto">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-[400px] object-cover rounded-xl mb-8"
        />
        
        <div className="mb-8">
          <span className="text-rose-600 text-sm">{post.category}</span>
          <h1 className="text-4xl font-serif mt-2 mb-4">{post.title}</h1>
          <div className="flex items-center text-gray-600">
            <span>{post.author}</span>
            <span className="mx-2">•</span>
            <span>{post.date}</span>
          </div>
        </div>

        <div 
          className="prose prose-rose max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
} 