import React from 'react';
import { Link } from 'react-router-dom';

export function Collections() {
  const collections = [
    {
      id: 1,
      name: 'Summer Glow',
      description: 'Light and refreshing products for the summer season',
      image: '/images/summer-collection.jpg',
      products: 12
    },
    {
      id: 2,
      name: 'Natural Essentials',
      description: 'Clean beauty products made with organic ingredients',
      image: '/images/natural-collection.jpg',
      products: 8
    },
    {
      id: 3,
      name: 'Luxury Spa',
      description: 'Premium spa-quality products for home pampering',
      image: '/images/spa-collection.jpg',
      products: 10
    },
    {
      id: 4,
      name: 'Korean Beauty',
      description: 'Innovative K-beauty products for glowing skin',
      image: '/images/kbeauty-collection.jpg',
      products: 15
    }
  ];

  const seasonalCollection = {
    name: 'Spring Renewal',
    description: 'Revitalize your beauty routine with our fresh spring collection featuring brightening and renewal products.',
    image: '/images/spring-collection.jpg'
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[500px]">
        <img
          src={seasonalCollection.image}
          alt={seasonalCollection.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="container mx-auto px-4 pb-16 text-white">
            <h1 className="text-4xl font-serif mb-4">{seasonalCollection.name}</h1>
            <p className="max-w-xl text-lg">{seasonalCollection.description}</p>
            <button className="mt-6 bg-white text-black px-8 py-3 rounded-full hover:bg-rose-50 transition">
              Shop Collection
            </button>
          </div>
        </div>
      </div>

      {/* Featured Collections */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-serif text-center mb-12">Our Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map((collection) => (
            <Link
              key={collection.id}
              to={`/collections/${collection.id}`}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-80 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white text-lg font-medium">View Collection</span>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-medium">{collection.name}</h3>
                <p className="text-gray-600 mt-1">{collection.description}</p>
                <p className="text-rose-600 mt-2">{collection.products} Products</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="font-medium mb-2">Natural Ingredients</h3>
              <p className="text-gray-600">Carefully curated products with clean ingredients</p>
            </div>
            <div className="text-center">
              <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="font-medium mb-2">Expert Selection</h3>
              <p className="text-gray-600">Handpicked by beauty experts for maximum results</p>
            </div>
            <div className="text-center">
              <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💝</span>
              </div>
              <h3 className="font-medium mb-2">Value Sets</h3>
              <p className="text-gray-600">Save more with our curated collection sets</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 