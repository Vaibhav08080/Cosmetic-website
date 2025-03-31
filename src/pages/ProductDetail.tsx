import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Minus, Plus, Heart } from 'lucide-react';

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);

  // Mock product data - in a real app, this would come from an API or database
  const product = {
    id: parseInt(id || '1'),
    name: "Radiance Serum",
    price: "$42",
    description: "A lightweight, fast-absorbing serum that helps brighten and even skin tone while providing deep hydration.",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80",
    rating: 5,
    reviews: 124,
    ingredients: "Water, Niacinamide, Glycerin, Propanediol, Butylene Glycol, Vitamin C (Ascorbic Acid), Hyaluronic Acid",
    size: "30ml",
    benefits: [
      "Brightens skin tone",
      "Reduces dark spots",
      "Hydrates deeply",
      "Improves texture"
    ]
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        
        <div className="space-y-6">
          <h1 className="text-3xl font-serif">{product.name}</h1>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i}
                  className={`h-5 w-5 ${i < product.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                />
              ))}
            </div>
            <span className="text-gray-600">({product.reviews} reviews)</span>
          </div>

          <p className="text-2xl font-medium text-rose-600">{product.price}</p>
          
          <p className="text-gray-600">{product.description}</p>

          <div>
            <h3 className="font-medium mb-2">Size</h3>
            <p>{product.size}</p>
          </div>

          <div>
            <h3 className="font-medium mb-2">Key Benefits</h3>
            <ul className="list-disc list-inside space-y-1">
              {product.benefits.map((benefit, index) => (
                <li key={index} className="text-gray-600">{benefit}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-2">Ingredients</h3>
            <p className="text-gray-600">{product.ingredients}</p>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center border rounded-md">
              <button 
                onClick={decreaseQuantity}
                className="px-3 py-2 hover:bg-gray-100"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="px-4 py-2 border-x">{quantity}</span>
              <button 
                onClick={increaseQuantity}
                className="px-3 py-2 hover:bg-gray-100"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            
            <button className="flex-1 bg-gray-900 text-white py-3 rounded-md hover:bg-gray-800 transition">
              Add to Cart
            </button>
            
            <button className="p-3 border rounded-md hover:bg-gray-100">
              <Heart className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}