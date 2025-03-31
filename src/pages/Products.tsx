import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: string;
  category: string;
  image: string;
  rating: number;
}

export function Products() {
  const { category } = useParams<{ category: string }>();
  const [sortBy, setSortBy] = useState('featured');

  const products: Product[] = [
    {
      id: 1,
      name: "Radiance Serum",
      price: "$42",
      category: "skincare",
      image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80",
      rating: 5
    },
    {
      id: 2,
      name: "Hydrating Cream",
      price: "$38",
      category: "skincare",
      image: "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80",
      rating: 4
    },
    {
      id: 3,
      name: "Rose Toner",
      price: "$28",
      category: "skincare",
      image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80",
      rating: 5
    },
    {
      id: 4,
      name: "Lip Treatment",
      price: "$24",
      category: "makeup",
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80",
      rating: 4
    }
  ];

  const filteredProducts = products.filter(product => 
    !category || product.category === category
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-serif capitalize">
          {category || 'All Products'}
        </h1>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border rounded-md px-4 py-2"
        >
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
            </Link>
            <div className="p-4">
              <Link to={`/product/${product.id}`}>
                <h3 className="text-lg font-medium hover:text-rose-600">{product.name}</h3>
              </Link>
              <div className="flex items-center justify-between mt-2">
                <span className="text-rose-600 font-medium">{product.price}</span>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < product.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
              </div>
              <button className="w-full mt-4 bg-gray-900 text-white py-2 rounded hover:bg-gray-800 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}