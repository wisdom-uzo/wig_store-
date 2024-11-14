'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  PlayCircle, 
  Clock, 
  BookOpen, 
  Video, 
  Ruler, 
  Sparkles, 
  Share2,
  BookmarkPlus,
  ThumbsUp,
  X
} from 'lucide-react';

const educationalContent = {
  featured: {
    title: "How To Make A WIG START TO FINISH!",
    description: "Complete step-by-step guide on creating your own wig. Perfect for beginners and professionals alike.",
    thumbnail: "https://i3.ytimg.com/vi/qSHhSnuUcXc/maxresdefault.jpg",
    videoId: "qSHhSnuUcXc",
    duration: "13:54",
    type: "Video Tutorial",
    likes: 2.1,
    shares: 845
  },
  categories: [
    {
      id: 'tutorials',
      icon: Video,
      name: 'Video Tutorials',
      active: true
    },
    {
      id: 'guides',
      icon: BookOpen,
      name: 'Care Guides',
      active: false
    },
    {
      id: 'measurements',
      icon: Ruler,
      name: 'Size Guide',
      active: false
    },
    {
      id: 'styling',
      icon: Sparkles,
      name: 'Styling Tips',
      active: false
    }
  ],
  articles: [
    {
      id: 1,
      title: "How to Measure for Your Perfect Wig Size",
      description: "Learn the proper techniques for accurate wig measurements.",
      image: "/guide1.jpg",
      duration: "8 min read",
      category: "measurements",
      featured: false
    },
    {
      id: 2,
      title: "Daily Wig Maintenance Tips",
      description: "Essential tips for keeping your wig looking fresh and natural.",
      image: "/guide2.jpg",
      duration: "10 min read",
      category: "guides",
      featured: false
    },
    {
      id: 3,
      title: "Styling Your Lace Front Wig",
      description: "Professional styling techniques for a natural look.",
      image: "/guide3.jpg",
      duration: "12 min read",
      category: "styling",
      featured: false
    }
  ]
};

// YouTube Video Modal Component
const YouTubeModal = ({ isOpen, onClose, videoId }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
      <div className="relative w-full max-w-6xl mx-4 aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
    </div>
  );
};

const EducationalContent = () => {
  const [activeCategory, setActiveCategory] = useState('tutorials');
  const [showAll, setShowAll] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const filteredArticles = showAll 
    ? educationalContent.articles
    : educationalContent.articles.filter(article => article.category === activeCategory);

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Learn & Master
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              {" "}Wig Care
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover expert tips, tutorials, and guides to help you maintain and style your wigs like a professional.
          </p>
        </div>

        {/* Featured Tutorial */}
        <div className="mb-12">
          <div 
            className="relative rounded-2xl overflow-hidden group cursor-pointer"
            onClick={() => setIsVideoModalOpen(true)}
          >
            <div className="aspect-video relative">
              <Image
                src={educationalContent.featured.thumbnail}
                alt={educationalContent.featured.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white/30 backdrop-blur-sm p-4 rounded-full transform group-hover:scale-110 transition-transform duration-300">
                  <PlayCircle className="w-12 h-12 text-white" />
                </button>
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-4 text-white/80 text-sm mb-3">
                  <span className="flex items-center gap-1">
                    <Video className="w-4 h-4" />
                    {educationalContent.featured.type}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {educationalContent.featured.duration}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {educationalContent.featured.title}
                </h3>
                <p className="text-white/90 mb-4">
                  {educationalContent.featured.description}
                </p>
                <div className="flex items-center gap-6 text-white/80">
                  <button className="flex items-center gap-2 hover:text-white transition-colors">
                    <ThumbsUp className="w-5 h-5" />
                    {educationalContent.featured.likes}k
                  </button>
                  <button className="flex items-center gap-2 hover:text-white transition-colors">
                    <Share2 className="w-5 h-5" />
                    {educationalContent.featured.shares}
                  </button>
                  <button className="flex items-center gap-2 hover:text-white transition-colors">
                    <BookmarkPlus className="w-5 h-5" />
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap gap-4 mb-8">
          {educationalContent.categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <category.icon className="w-5 h-5" />
              {category.name}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <Clock className="w-4 h-4" />
                  {article.duration}
                </div>
                <h3 className="text-xl font-semibold mb-2 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {article.description}
                </p>
                <button className="text-purple-600 font-medium hover:text-purple-700 transition-colors">
                  Read More
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        {!showAll && filteredArticles.length > 3 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 px-8 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition-colors duration-300"
            >
              View All Guides
            </button>
          </div>
        )}
      </div>

      {/* YouTube Video Modal */}
      <YouTubeModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoId={educationalContent.featured.videoId}
      />
    </section>
  );
};

export default EducationalContent;