import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, X } from 'lucide-react';

interface CartItem {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
}

export function Cart() {
  // Mock cart data - in a real app, this would come from a cart context or state management
  const cartItems: CartItem[] = [
    {
      id: 1,
      name: "Radiance Serum",
      price: "$42",
      image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80",
      quantity: 1
    },
    {
      id: 2,
      name: "Hydrating Cream",
      price: "$38",
      image: "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80",
      quantity: 2
    }
  ];

  const subtotal = "$118";
  const shipping = "$5";
  const total = "$123";

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-serif mb-8">Shopping Cart</h1>

      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center border-b py-4">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded"
                />
                <div className="flex-1 ml-4">
                  <Link to={`/product/${item.id}`} className="hover:text-rose-600">
                    <h3 className="font-medium">{item.name}</h3>
                  </Link>
                  <p className="text-rose-600 mt-1">{item.price}</p>
                </div>
                <div className="flex items-center border rounded-md">
                  <button className="px-3 py-2 hover:bg-gray-100">
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 border-x">{item.quantity}</span>
                  <button className="px-3 py-2 hover:bg-gray-100">
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <button className="ml-4 text-gray-400 hover:text-gray-600">
                  <X className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 p-6 rounded-lg h-fit">
            <h2 className="text-xl font-medium mb-4">Order Summary</h2>
            <div className="space-y-2 text-gray-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{shipping}</span>
              </div>
              <div className="border-t pt-2 mt-2 font-medium text-black flex justify-between">
                <span>Total</span>
                <span>{total}</span>
              </div>
            </div>
            <button className="w-full bg-gray-900 text-white py-3 rounded-md mt-6 hover:bg-gray-800 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600 mb-4">Your cart is empty</p>
          <Link 
            to="/products"
            className="bg-gray-900 text-white px-8 py-3 rounded-md hover:bg-gray-800 transition"
          >
            Continue Shopping
          </Link>
        </div>
      )}
    </div>
  );
}