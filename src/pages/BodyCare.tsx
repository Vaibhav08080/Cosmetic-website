import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

export function BodyCare() {
  const categories = [
    { name: 'Body Lotions', image: '/images/body-lotion.jpg' },
    { name: 'Body Scrubs', image: '/images/body-scrub.jpg' },
    { name: 'Body Oils', image: '/images/body-oil.jpg' },
    { name: 'Bath & Shower', image: '/images/bath.jpg' },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: 'Coconut Body Butter',
      price: '$24.99',
      image: '/images/coconut-butter.jpg',
      rating: 5,
      description: 'Rich and nourishing body butter with organic coconut oil'
    },
    {
      id: 2,
      name: 'Rose Body Scrub',
      price: '$19.99',
      image: '/images/rose-scrub.jpg',
      rating: 4,
      description: 'Gentle exfoliating scrub with rose petals'
    },
    {
      id: 3,
      name: 'Lavender Bath Salts',
      price: '$16.99',
      image: '/images/bath-salts.jpg',
      rating: 5,
      description: 'Relaxing bath salts with pure lavender essential oil'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-gradient-to-r from-rose-100 to-rose-200">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-serif mb-4">Body Care Collection</h1>
            <p className="text-gray-700 max-w-xl mx-auto">
              Indulge in luxurious body care products made with natural ingredients
              to nourish and pamper your skin.
            </p>
          </div>
        </div>
      </div>

      {/* Categories */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-serif text-center mb-12">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div key={category.name} className="group relative overflow-hidden rounded-lg">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <h3 className="text-white text-xl font-medium">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-center mb-12">Bestsellers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <Link to={`/product/${product.id}`}>
                  <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                </Link>
                <div className="p-4">
                  <Link to={`/product/${product.id}`}>
                    <h3 className="text-lg font-medium hover:text-rose-600">{product.name}</h3>
                  </Link>
                  <p className="text-gray-600 mt-2">{product.description}</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-rose-600 font-medium">{product.price}</span>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < product.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beauty Tips */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-serif text-center mb-12">Body Care Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💧</span>
            </div>
            <h3 className="font-medium mb-2">Stay Hydrated</h3>
            <p className="text-gray-600">Drink plenty of water for healthy, glowing skin</p>
          </div>
          <div className="text-center">
            <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🧴</span>
            </div>
            <h3 className="font-medium mb-2">Daily Moisturizing</h3>
            <p className="text-gray-600">Apply body lotion right after showering</p>
          </div>
          <div className="text-center">
            <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">✨</span>
            </div>
            <h3 className="font-medium mb-2">Weekly Exfoliation</h3>
            <p className="text-gray-600">Gently exfoliate for smooth, renewed skin</p>
          </div>
        </div>
      </section>
    </div>
  );
} 