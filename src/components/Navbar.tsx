import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Search, Menu } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export function Navbar() {
  const { user, signOut } = useAuth();

  return (
    <header className="bg-white shadow-sm fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Menu className="h-6 w-6 mr-4 lg:hidden" />
            <Link to="/" className="text-3xl font-serif font-bold text-rose-600">Glow</Link>
          </div>
          
          <nav className="hidden lg:flex space-x-8">
            <Link to="/products/skincare" className="text-gray-700 hover:text-rose-600">Skincare</Link>
            <Link to="/products/makeup" className="text-gray-700 hover:text-rose-600">Makeup</Link>
            <Link to="/products/body-care" className="text-gray-700 hover:text-rose-600">Body Care</Link>
            <Link to="/collections" className="text-gray-700 hover:text-rose-600">Collections</Link>
            <Link to="/about" className="text-gray-700 hover:text-rose-600">About</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Search className="h-5 w-5 text-gray-600 cursor-pointer" />
            <Heart className="h-5 w-5 text-gray-600 cursor-pointer" />
            <Link to="/cart">
              <ShoppingBag className="h-5 w-5 text-gray-600" />
            </Link>
            {user ? (
              <div className="flex items-center space-x-4">
                <Link to="/account" className="text-gray-700 hover:text-rose-600">Account</Link>
                <button
                  onClick={() => signOut()}
                  className="text-gray-700 hover:text-rose-600"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <Link to="/login" className="text-gray-700 hover:text-rose-600">Sign In</Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}