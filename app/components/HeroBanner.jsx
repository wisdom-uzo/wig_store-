// HeroBanner.jsx
'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

// Slides data outside component to avoid re-creation
const slides = [
  {
    image: "/hero1.jpg",
    title: "Premium Human Hair Wigs",
    subtitle: "Experience Natural Beauty & Confidence",
    description: "Discover our collection of high-quality human hair wigs. Hand-crafted for comfort and style.",
    cta: "Shop Collection",
    discount: "Up to 30% Off",
    bgColor: "from-purple-900/90 to-purple-900/70"
  },
  {
    image: "/hero2.jpg",
    title: "Luxury Lace Front Wigs",
    subtitle: "Seamless & Natural Hairline",
    description: "Premium lace front wigs with a natural-looking hairline and comfortable fit.",
    cta: "Explore Now",
    discount: "New Arrivals",
    bgColor: "from-pink-900/90 to-pink-900/70"
  },
  {
    image: "/hero3.jpg",
    title: "Custom Hair Solutions",
    subtitle: "Tailored to Your Style",
    description: "Get personalized hair solutions that match your unique style and preferences.",
    cta: "Book Consultation",
    discount: "Free Styling",
    bgColor: "from-gray-900/90 to-gray-900/70"
  }
];

// Loading placeholder component
const LoadingPlaceholder = () => (
  <div className="h-screen max-h-[800px] min-h-[600px] bg-gradient-to-r from-gray-100 to-gray-200 animate-pulse" />
);

// Separate slide content component for better control
const SlideContent = ({ slide }) => (
  <div className="relative h-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col justify-center h-full text-white">
      <div className="max-w-xl space-y-6">
        <div className="inline-block">
          <span className="inline-flex items-center px-4 py-1 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium">
            {slide.discount}
          </span>
        </div>
        
        <div className="space-y-2">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            {slide.title}
          </h2>
          <p className="text-xl md:text-2xl text-gray-200">
            {slide.subtitle}
          </p>
        </div>
        
        <p className="text-lg text-gray-300 max-w-lg">
          {slide.description}
        </p>
        
        <div className="flex flex-wrap gap-4">
          <button className="px-8 py-3 bg-white text-purple-900 rounded-full font-semibold hover:bg-purple-100 transition-colors duration-300">
            {slide.cta}
          </button>
          <button className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  </div>
);

function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isClient, setIsClient] = useState(false);
 
  useEffect(() => {
    setIsClient(true);
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  if (!isClient) {
    return <LoadingPlaceholder />;
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen max-h-[800px] min-h-[600px] w-full overflow-hidden">
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.title}
            className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out ${
              currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            aria-hidden={currentSlide !== index}
          >
            <div className="absolute inset-0">
              <div className="relative w-full h-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  sizes="100vw"
                  priority={index === 0}
                  quality={90}
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />
              </div>
              <div 
                className={`absolute inset-0 bg-gradient-to-r ${slide.bgColor}`}
                aria-hidden="true"
              />
            </div>
            <SlideContent slide={slide} />
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="absolute inset-0 z-20 flex items-center justify-between px-4">
        <button
          type="button"
          onClick={prevSlide}
          className="p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors duration-300 backdrop-blur-sm group focus:outline-none focus:ring-2 focus:ring-white/60"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          className="p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors duration-300 backdrop-blur-sm group focus:outline-none focus:ring-2 focus:ring-white/60"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={`indicator-${index}`}
            type="button"
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/60 ${
              currentSlide === index 
                ? 'bg-white w-8' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={currentSlide === index}
          />
        ))}
      </div>
    </section>
  );
}

// Export the component
export default HeroBanner;