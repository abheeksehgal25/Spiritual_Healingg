import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import image from './assets/image.svg';

// Sample blog data - in a real app, this would come from an API or CMS
const blogPosts = [
  {
    id: 1,
    title: "Daily Tarot Reading: The Fool's Journey",
    excerpt: "Discover what the Fool card reveals about new beginnings and taking leaps of faith in your spiritual journey...",
    category: "Tarot Reading",
    date: "March 15, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop"
  },
  {
    id: 2,
    title: "Yoga for Spiritual Awakening: 7 Essential Poses",
    excerpt: "Transform your practice with these powerful yoga poses designed to enhance your spiritual connection...",
    category: "Yoga & Meditation",
    date: "March 12, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=250&fit=crop"
  },
  {
    id: 3,
    title: "Numerology: Understanding Your Life Path Number",
    excerpt: "Calculate and interpret your life path number to unlock the secrets of your soul's purpose...",
    category: "Numerology",
    date: "March 10, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=400&h=250&fit=crop"
  },
  {
    id: 4,
    title: "Mudra Therapy: Healing Through Hand Gestures",
    excerpt: "Learn powerful mudras that can balance your energy, reduce stress, and promote healing...",
    category: "Mudra Therapy",
    date: "March 8, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop"
  },
  {
    id: 5,
    title: "Crystal Healing: Harnessing the Power of Stones",
    excerpt: "Explore how crystals can be used for healing, energy balancing, and spiritual growth. Learn which stones are best for beginners and how to use them...",
    category: "Crystal Healing",
    date: "March 18, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=250&fit=crop"
  }
];

const BlogSection = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
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
    <section className="py-16 px-4 md:px-16 lg:px-24 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="font-philosopher text-4xl md:text-5xl font-semibold mb-4 text-gray-800">
            Latest from Our Blog
          </h2>
          <img src={image} alt="decorative underline" className="mx-auto w-36 sm:w-48 mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover spiritual insights, daily horoscopes, and wellness tips to enhance your journey
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 px-2 md:px-8"
        >
          {blogPosts.map((post) => (
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

        {/* View All Posts Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <Link to="/blog">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 text-white px-8 py-3 rounded-full font-medium hover:bg-purple-700 transition-colors shadow-lg"
            >
              View All Blog Posts
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection; 