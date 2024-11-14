'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 1,
    title: 'Human Hair Wigs',
    description: 'Premium quality human hair wigs for a natural look',
    image: '/category1.jpg',
    itemCount: '150+ Items',
    discount: '20% OFF',
    link: '/category/human-hair-wigs'
  },
  {
    id: 2,
    title: 'Lace Front Wigs',
    description: 'Seamless hairline with natural-looking lace front wigs',
    image: '/category2.jpeg',
    itemCount: '120+ Items',
    discount: 'New In',
    link: '/category/lace-front-wigs'
  },
  {
    id: 3,
    title: 'Hair Extensions',
    description: 'Premium clip-in and tape-in hair extensions',
    image: '/category3.jpg',
    itemCount: '200+ Items',
    discount: 'From $99',
    link: '/category/hair-extensions'
  },
  {
    id: 4,
    title: 'Synthetic Wigs',
    description: 'Stylish and affordable synthetic wigs',
    image: '/category4.jpg',
    itemCount: '180+ Items',
    discount: '15% OFF',
    link: '/category/synthetic-wigs'
  },
  {
    id: 5,
    title: 'Closures & Frontals',
    description: 'High-quality closures and frontal pieces',
    image: '/category5.jpg',
    itemCount: '90+ Items',
    discount: 'Best Sellers',
    link: '/category/closures-frontals'
  },
  {
    id: 6,
    title: 'Hair Bundles',
    description: 'Premium virgin hair bundles in various textures',
    image: '/category6.jpg',
    itemCount: '100+ Items',
    discount: 'Bundle Deals',
    link: '/category/hair-bundles'
  }
];

const CategoryCard = ({ category }) => (
  <div className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-xl">
    {/* Image Container */}
    <div className="relative h-64 w-full overflow-hidden">
      <Image
        src={category.image}
        alt={category.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      
      {/* Discount Tag */}
      <div className="absolute right-4 top-4">
        <span className="rounded-full bg-white px-4 py-1 text-sm font-semibold text-purple-600 shadow-lg">
          {category.discount}
        </span>
      </div>
    </div>

    {/* Content */}
    <div className="relative p-6">
      {/* Item Count */}
      <div className="mb-2">
        <span className="text-sm font-medium text-gray-500">{category.itemCount}</span>
      </div>

      {/* Title */}
      <h3 className="mb-2 text-xl font-bold text-gray-900">{category.title}</h3>

      {/* Description */}
      <p className="mb-4 text-sm text-gray-600">{category.description}</p>

      {/* Shop Link */}
      <a
        href={category.link}
        className="inline-flex items-center space-x-2 text-purple-600 transition-colors duration-300 hover:text-purple-700"
      >
        <span className="font-medium">Shop Now</span>
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </div>
  </div>
);

const FeaturedCategories = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block rounded-full bg-purple-100 px-4 py-1 text-sm font-semibold text-purple-600">
            Our Collections
          </span>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Featured Categories
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Explore our wide range of premium wigs, extensions, and hair accessories. 
            Each category offers high-quality products designed to enhance your natural beauty.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-12 text-center">
          <a
            href="/categories"
            className="group inline-flex items-center space-x-2 rounded-full bg-purple-600 px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-purple-700"
          >
            <span>View All Categories</span>
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;