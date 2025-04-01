import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Search, Menu, X, User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export function Navbar() {
  const { user, signOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed z-50 w-full bg-white shadow-sm">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 -ml-2 lg:hidden"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <Link to="/" className="font-serif text-3xl font-bold text-rose-600">
              Glow
            </Link>
          </div>
          
          <nav className={`${
            isMenuOpen
              ? 'absolute top-16 left-0 right-0 bg-white border-t border-gray-100 shadow-lg'
              : 'hidden lg:flex'
          } lg:items-center lg:space-x-8`}>
            <div className={`${
              isMenuOpen ? 'px-4 py-2' : ''
            } flex flex-col lg:flex-row lg:items-center lg:space-x-8`}>
              <Link to="/products/skincare" className="py-2 text-gray-700 hover:text-rose-600">
                Skincare
              </Link>
              <Link to="/products/makeup" className="py-2 text-gray-700 hover:text-rose-600">
                Makeup
              </Link>
              <Link to="/body-care" className="py-2 text-gray-700 hover:text-rose-600">
                Body Care
              </Link>
              <Link to="/collections" className="py-2 text-gray-700 hover:text-rose-600">
                Collections
              </Link>
              <Link to="/about" className="py-2 text-gray-700 hover:text-rose-600">
                About
              </Link>
            </div>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-700 hover:text-rose-600">
              <Search className="w-5 h-5" />
            </button>
            <Link to="/favorites" className="p-2 text-gray-700 hover:text-rose-600">
              <Heart className="w-5 h-5" />
            </Link>
            <Link to="/cart" className="p-2 text-gray-700 hover:text-rose-600">
              <ShoppingBag className="w-5 h-5" />
            </Link>
            {user ? (
              <Link to="/account" className="p-2 text-gray-700 hover:text-rose-600">
                <User className="w-5 h-5" />
              </Link>
            ) : (
              <div className="flex flex-row items-center">
                <Link
                  to="/login"
                  className="inline-block px-4 py-2 text-sm font-medium text-white rounded bg-rose-600 hover:bg-rose-700"
                >
                  Sign In
                </Link>
                {/* <p className="ml-2 text-gray-600 mltext-sm ml">
                  New user?{' '}
                  <Link to="/signup" className="font-medium text-rose-600 hover:underline">
                    Sign up
                  </Link>
                </p> */}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
