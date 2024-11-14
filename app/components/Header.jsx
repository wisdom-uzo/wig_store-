"use client"
import React, { useState, useEffect } from 'react';
import { 
  Search, 
  ShoppingBag, 
  User, 
  Menu, 
  X, 
  Heart, 
  ChevronDown,
  Phone
} from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3); // Demo count
  const [wishlistCount, setWishlistCount] = useState(2); // Demo count

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Categories for dropdown
  const categories = [
    "Human Hair Wigs",
    "Lace Front Wigs",
    "Hair Extensions",
    "Synthetic Wigs",
    "Closures & Frontals",
    "Hair Bundles"
  ];

  return (
    <>
      {/* Top announcement bar */}
      <div className="bg-purple-600 text-white py-2 px-4 text-center text-sm">
        <p>🌟 Free Shipping on Orders Over $150 | Get 10% Off Your First Purchase</p>
      </div>

      {/* Main header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-md'
      }`}>
        {/* Contact bar */}
        <div className="hidden lg:flex items-center justify-between px-6 py-1 bg-gray-50">
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-sm text-gray-600">
              <Phone className="w-4 h-4 mr-2" />
              <span>+1 (234) 567-8900</span>
            </div>
            <span className="text-sm text-gray-600">Mon-Fri: 9:00 AM - 6:00 PM EST</span>
          </div>
          <div className="flex items-center space-x-4 text-sm">
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Track Order</a>
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Find a Store</a>
          </div>
        </div>

        {/* Main navigation */}
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                  GLAM WIGS
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 transition-colors">
                  <span>Shop</span>
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="p-4">
                    {categories.map((category, index) => (
                      <a
                        key={index}
                        href="#"
                        className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-md transition-colors"
                      >
                        {category}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">New Arrivals</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Best Sellers</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Sale</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Contact</a>
            </div>

            {/* Search, Cart, Account */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-gray-700 hover:text-purple-600 transition-colors relative group"
              >
                <Search className="w-6 h-6" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Search
                </span>
              </button>

              <div className="relative group">
                <button className="p-2 text-gray-700 hover:text-purple-600 transition-colors">
                  <Heart className="w-6 h-6" />
                  {wishlistCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {wishlistCount}
                    </span>
                  )}
                </button>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Wishlist
                </span>
              </div>

              <div className="relative group">
                <button className="p-2 text-gray-700 hover:text-purple-600 transition-colors">
                  <ShoppingBag className="w-6 h-6" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </button>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Cart
                </span>
              </div>

              <button className="hidden md:block p-2 text-gray-700 hover:text-purple-600 transition-colors relative group">
                <User className="w-6 h-6" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Account
                </span>
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-gray-700 hover:text-purple-600 transition-colors"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Search bar */}
          <div className={`overflow-hidden transition-all duration-300 ${
            isSearchOpen ? 'max-h-24 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}>
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
              <button 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-purple-600 transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile menu */}
        <div className={`lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-4 py-2 space-y-2 bg-white border-t">
            {categories.map((category, index) => (
              <a
                key={index}
                href="#"
                className="block py-2 text-gray-700 hover:text-purple-600 transition-colors"
              >
                {category}
              </a>
            ))}
            <div className="border-t border-gray-100 pt-2">
              <a href="#" className="block py-2 text-gray-700 hover:text-purple-600 transition-colors">New Arrivals</a>
              <a href="#" className="block py-2 text-gray-700 hover:text-purple-600 transition-colors">Best Sellers</a>
              <a href="#" className="block py-2 text-gray-700 hover:text-purple-600 transition-colors">Sale</a>
              <a href="#" className="block py-2 text-gray-700 hover:text-purple-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-32" />
    </>
  );
};

export default Header;