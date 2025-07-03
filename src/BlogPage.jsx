import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import image from './assets/image.svg';

// Extended blog data for the full blog page
const allBlogPosts = [
  {
    id: 1,
    title: "Daily Tarot Reading: The Fool's Journey",
    excerpt: "Discover what the Fool card reveals about new beginnings and taking leaps of faith in your spiritual journey. This card represents innocence, spontaneity, and the courage to step into the unknown...",
    content: "The Fool card in Tarot is a symbol of new beginnings, innocence, and adventure. It encourages you to embrace the unknown with an open heart and a sense of wonder. When this card appears, it's a sign to take a leap of faith, trust your instincts, and not be afraid of making mistakes. The journey ahead may be uncertain, but it's filled with opportunities for growth and self-discovery. Remember, every expert was once a beginner. Let go of fear and step forward with confidence!",
    category: "Tarot Reading",
    date: "March 15, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
    tags: ["tarot", "new beginnings", "spiritual journey"]
  },
  {
    id: 2,
    title: "Yoga for Spiritual Awakening: 7 Essential Poses",
    excerpt: "Transform your practice with these powerful yoga poses designed to enhance your spiritual connection. Each pose is carefully selected to open your chakras and align your energy...",
    content: "Yoga is a powerful tool for spiritual awakening. The following seven poses are essential for opening your chakras and aligning your energy: 1. Mountain Pose, 2. Downward Dog, 3. Warrior II, 4. Tree Pose, 5. Bridge Pose, 6. Seated Forward Bend, 7. Corpse Pose. Practice these regularly to deepen your spiritual connection and promote inner peace.",
    category: "Yoga & Meditation",
    date: "March 12, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=250&fit=crop",
    tags: ["yoga", "meditation", "chakras", "spiritual awakening"]
  },
  {
    id: 3,
    title: "Numerology: Understanding Your Life Path Number",
    excerpt: "Calculate and interpret your life path number to unlock the secrets of your soul's purpose. This ancient practice reveals the lessons you're meant to learn in this lifetime...",
    content: "Numerology is the study of numbers and their spiritual significance. Your Life Path Number is calculated from your birth date and reveals your soul's purpose. To calculate, add all the digits of your birth date until you get a single digit. Each number has a unique meaning and offers insight into your strengths, challenges, and destiny.",
    category: "Numerology",
    date: "March 10, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=400&h=250&fit=crop",
    tags: ["numerology", "life path", "soul purpose", "destiny"]
  },
  {
    id: 4,
    title: "Mudra Therapy: Healing Through Hand Gestures",
    excerpt: "Learn powerful mudras that can balance your energy, reduce stress, and promote healing. These ancient hand gestures have been used for centuries in spiritual practices...",
    content: "Mudra therapy uses specific hand gestures to channel energy and promote healing. Common mudras include Gyan Mudra for knowledge, Prana Mudra for vitality, and Apana Mudra for detoxification. Practice these mudras daily to experience their full benefits in your spiritual and physical well-being.",
    category: "Mudra Therapy",
    date: "March 8, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
    tags: ["mudra", "healing", "energy balance", "stress relief"]
  },
];

const categories = [
  "All",
  "Tarot Reading",
  "Yoga & Meditation", 
  "Numerology",
  "Mudra Therapy",
  "Astrology",
  "Crystal Healing",
  "Spiritual Healing"
];

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const [expandedPostId, setExpandedPostId] = useState(null);

  // Filter posts based on category and search
  const filteredPosts = allBlogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-16 lg:px-24 py-8">
          <div className="text-center">
            <h1 className="font-philosopher text-4xl md:text-5xl font-semibold mb-4 text-gray-800">
              Our Blog
            </h1>
            <img src={image} alt="decorative underline" className="mx-auto w-36 sm:w-48 mb-6" />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover spiritual insights, daily horoscopes, and wellness tips to enhance your journey
            </p>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-16 lg:px-24 py-12">
        {/* Filters and Search */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mb-12"
        >
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-purple-600 text-white"
                    : "bg-white text-gray-600 hover:bg-purple-100"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mb-8"
        >
          <p className="text-gray-600">
            Showing {filteredPosts.length} of {allBlogPosts.length} articles
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          <AnimatePresence initial={false}>
            {expandedPostId
              ? currentPosts
                  .filter((post) => post.id === expandedPostId)
                  .map((post) => {
                    // expanded card only
                    return (
                      <motion.article
                        key={post.id}
                        layoutId={`blog-card-${post.id}`}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1.04, zIndex: 20, boxShadow: '0 8px 40px 8px rgba(80,0,120,0.18)' }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 30 }}
                        className="bg-white rounded-2xl shadow-2xl overflow-hidden group cursor-pointer ring-4 ring-purple-300 z-50 fixed top-[15%] left-[30%] -translate-x-[60%] max-w-xl w-full max-h-[80vh] flex flex-col"
                      >
                        {/* Blog Image */}
                        <div className="relative overflow-hidden h-64 md:h-80 flex-shrink-0">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-500 block scale-105"
                            onError={e => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/400x250?text=Image+Not+Found'; }}
                          />
                          <div className="absolute top-4 left-4">
                            <span className="bg-purple-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                              {post.category}
                            </span>
                          </div>
                        </div>
                        {/* Blog Content (scrollable only for content) */}
                        <div className="p-8 flex-1 overflow-y-auto">
                          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                            <span>{post.date}</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                          </div>
                          <h3 className="font-philosopher text-2xl font-bold text-gray-800 mb-4">
                            {post.title}
                          </h3>
                          <p className="text-gray-700 text-base leading-relaxed mb-6 whitespace-pre-line">
                            {post.content}
                          </p>
                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mb-6">
                            {post.tags.map((tag) => (
                              <span
                                key={tag}
                                className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                          <button
                            className="absolute top-4 left-4 z-20 bg-white/90 hover:bg-purple-100 text-purple-700 font-semibold px-4 py-2 rounded-full shadow transition"
                            onClick={() => setExpandedPostId(null)}
                          >
                            ← Back
                          </button>
                        </div>
                      </motion.article>
                    );
                  })
              : currentPosts.map((post) => (
                  <motion.article
                    key={post.id}
                    layoutId={`blog-card-${post.id}`}
                    variants={cardVariants}
                    whileHover="hover"
                    className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer relative"
                  >
                    {/* Blog Image */}
                    <div className="relative overflow-hidden h-48">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 block"
                        onError={e => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/400x250?text=Image+Not+Found'; }}
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-purple-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    {/* Blog Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="font-philosopher text-xl font-semibold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-purple-600 font-medium text-sm hover:text-purple-700 transition-colors"
                        onClick={() => setExpandedPostId(post.id)}
                      >
                        Read More →
                      </motion.button>
                    </div>
                  </motion.article>
                ))}
          </AnimatePresence>
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center items-center gap-2"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                currentPage === 1
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-purple-600 text-white hover:bg-purple-700"
              }`}
            >
              Previous
            </motion.button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <motion.button
                key={page}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  currentPage === page
                    ? "bg-purple-600 text-white"
                    : "bg-white text-gray-600 hover:bg-purple-100"
                }`}
              >
                {page}
              </motion.button>
            ))}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                currentPage === totalPages
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-purple-600 text-white hover:bg-purple-700"
              }`}
            >
              Next
            </motion.button>
          </motion.div>
        )}

        {/* Back to Home */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-800 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-900 transition-colors shadow-lg"
            >
              ← Back to Home
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPage; 