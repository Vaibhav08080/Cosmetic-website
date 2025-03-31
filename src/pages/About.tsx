import React from 'react';

export function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-serif text-center mb-12">About Glow</h1>
      
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <img 
            src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=1200&q=80"
            alt="Our Story"
            className="w-full h-[400px] object-cover rounded-xl mb-8"
          />
          
          <h2 className="text-2xl font-serif mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded in 2020, Glow began with a simple mission: to create clean, effective beauty products that enhance your natural radiance.
          </p>
          <p className="text-gray-600 mb-4">
            We believe in the power of natural ingredients and sustainable practices to deliver exceptional results while caring for our planet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <h3 className="text-xl font-medium mb-2">Natural Ingredients</h3>
            <p className="text-gray-600">Sourced from sustainable suppliers worldwide</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-medium mb-2">Cruelty Free</h3>
            <p className="text-gray-600">Never tested on animals</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-medium mb-2">Eco-Friendly</h3>
            <p className="text-gray-600">100% recyclable packaging</p>
          </div>
        </div>
      </div>
    </div>
  );
} 