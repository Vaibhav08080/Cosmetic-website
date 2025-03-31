import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Heart, Trash2 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export function Favorites() {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      name: 'Rose Quartz Facial Roller',
      price: '$28.99',
      image: '/images/facial-roller.jpg',
      rating: 5,
      category: 'Tools'
    },
    {
      id: 2,
      name: 'Vitamin C Serum',
      price: '$34.99',
      image: '/images/vitamin-c.jpg',
      rating: 4,
      category: 'Skincare'
    },
    {
      id: 3,
      name: 'Hydrating Face Mist',
      price: '$22.99',
      image: '/images/face-mist.jpg',
      rating: 5,
      category: 'Skincare'
    }
  ]);

  const recommendations = [
    {
      id: 4,
      name: 'Green Tea Cleanser',
      price: '$24.99',
      image: '/images/cleanser.jpg',
      rating: 4,
      category: 'Skincare'
    },
    {
      id: 5,
      name: 'Jade Gua Sha',
      price: '$18.99',
      image: '/images/gua-sha.jpg',
      rating: 5,
      category: 'Tools'
    }
  ];

  const removeFromFavorites = (productId: number) => {
    setFavorites(favorites.filter(item => item.id !== productId));
  };

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif mb-4">My Favorites</h1>
          <p className="text-gray-600">
            {user ? `${favorites.length} items in your wishlist` : 'Sign in to save your favorite items'}
          </p>
        </div>

        {user ? (
          <>
            {/* Favorites Grid */}
            {favorites.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {favorites.map((product) => (
                  <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="relative">
                      <Link to={`/product/${product.id}`}>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-64 object-cover"
                        />
                      </Link>
                      <button
                        onClick={() => removeFromFavorites(product.id)}
                        className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-rose-50 transition"
                      >
                        <Trash2 className="h-5 w-5 text-gray-600" />
                      </button>
                    </div>
                    <div className="p-4">
                      <span className="text-sm text-gray-500">{product.category}</span>
                      <Link to={`/product/${product.id}`}>
                        <h3 className="text-lg font-medium mt-1 hover:text-rose-600">
                          {product.name}
                        </h3>
                      </Link>
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
            ) : (
              <div className="text-center py-16">
                <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h2 className="text-xl font-medium mb-2">No favorites yet</h2>
                <p className="text-gray-600 mb-8">
                  Start adding products to your wishlist by clicking the heart icon
                </p>
                <Link
                  to="/products/all"
                  className="inline-block bg-rose-600 text-white px-8 py-3 rounded-full hover:bg-rose-700 transition"
                >
                  Browse Products
                </Link>
              </div>
            )}

            {/* Recommended Products */}
            {favorites.length > 0 && (
              <section>
                <h2 className="text-2xl font-serif mb-8">You Might Also Like</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {recommendations.map((product) => (
                    <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                      <Link to={`/product/${product.id}`}>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-64 object-cover"
                        />
                      </Link>
                      <div className="p-4">
                        <span className="text-sm text-gray-500">{product.category}</span>
                        <Link to={`/product/${product.id}`}>
                          <h3 className="text-lg font-medium mt-1 hover:text-rose-600">
                            {product.name}
                          </h3>
                        </Link>
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
              </section>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-xl font-medium mb-4">Sign in to view your favorites</h2>
            <Link
              to="/login"
              className="inline-block bg-rose-600 text-white px-8 py-3 rounded-full hover:bg-rose-700 transition"
            >
              Sign In
            </Link>
          </div>
        )}
      </div>
    </div>
  );
} 