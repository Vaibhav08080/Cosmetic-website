import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, ChevronRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-2xl font-serif mb-4">Glow</h4>
            <p className="text-gray-400">Your daily dose of natural beauty</p>
          </div>
          <div>
            <h5 className="font-medium mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white">FAQs</Link></li>
              <li><Link to="/shipping" className="text-gray-400 hover:text-white">Shipping</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium mb-4">Follow Us</h5>
            <div className="flex space-x-4">
              <Instagram className="h-6 w-6 cursor-pointer hover:text-rose-500" />
              <Facebook className="h-6 w-6 cursor-pointer hover:text-rose-500" />
              <Twitter className="h-6 w-6 cursor-pointer hover:text-rose-500" />
            </div>
          </div>
          <div>
            <h5 className="font-medium mb-4">Newsletter</h5>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-gray-800 text-white px-4 py-2 rounded-l focus:outline-none"
              />
              <button className="bg-rose-600 px-4 rounded-r hover:bg-rose-700 transition">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Glow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}