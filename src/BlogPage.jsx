import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import image from './assets/image.svg';

// Extended blog data for the full blog page
const allBlogPosts = [
  {
    id: 1,
    title: "Daily Tarot Reading: The Fool's Journey",
    excerpt: "Discover what the Fool card reveals about new beginnings and taking leaps of faith in your spiritual journey. This card represents innocence, spontaneity, and the courage to step into the unknown...",
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
    category: "Mudra Therapy",
    date: "March 8, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
    tags: ["mudra", "healing", "energy balance", "stress relief"]
  },
  {
    id: 5,
    title: "Weekly Horoscope: March 10-16, 2025",
    excerpt: "Your weekly cosmic forecast is here! Discover what the stars have in store for your zodiac sign this week. From love and career to health and spirituality...",
    category: "Astrology",
    date: "March 7, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&h=250&fit=crop",
    tags: ["horoscope", "weekly", "zodiac", "astrology"]
  },
  {
    id: 6,
    title: "Crystal Healing: Choosing Your First Crystal",
    excerpt: "Begin your crystal healing journey with this comprehensive guide to selecting your first crystal. Learn about different types and their unique properties...",
    category: "Crystal Healing",
    date: "March 5, 2025",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
    tags: ["crystals", "healing", "energy", "spiritual tools"]
  },
  {
    id: 7,
    title: "Meditation Techniques for Beginners",
    excerpt: "Start your meditation practice with these simple yet powerful techniques. Perfect for beginners who want to experience the benefits of mindfulness...",
    category: "Yoga & Meditation",
    date: "March 3, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
    tags: ["meditation", "mindfulness", "beginners", "stress relief"]
  },
  {
    id: 8,
    title: "Chakra Balancing: A Complete Guide",
    excerpt: "Learn how to balance your seven chakras for optimal health and spiritual well-being. This comprehensive guide covers each energy center...",
    category: "Spiritual Healing",
    date: "March 1, 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=250&fit=crop",
    tags: ["chakras", "energy healing", "spiritual wellness", "balance"]
  },
  {
    id: 9,
    title: "Crystal Healing: Harnessing the Power of Stones",
    excerpt: "Explore how crystals can be used for healing, energy balancing, and spiritual growth. Learn which stones are best for beginners and how to use them...",
    category: "Crystal Healing",
    date: "March 18, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=250&fit=crop",
    tags: ["crystals", "healing", "energy", "spiritual growth"]
  }
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
          {currentPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={cardVariants}
              whileHover="hover"
              className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer"
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
                >
                  Read More →
                </motion.button>
              </div>
            </motion.article>
          ))}
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