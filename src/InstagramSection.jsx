import React from 'react';
import { motion } from 'framer-motion';
import profileImg from './assets/profile1.png';
import insta1 from './assets/insta_1.png';
import insta2 from './assets/insta_2.png';
import insta3 from './assets/insta_3.png';
import insta4 from './assets/insta_4.png';
import insta5 from './assets/insta_5.png';
import insta6 from './assets/insta_6.png';

const postImages = [insta1, insta2, insta3, insta4, insta5, insta6];
const INSTAGRAM_URL = 'https://www.instagram.com/spiritualhealing.mk/';

const InstagramSection = () => {
  // Animation variants
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const profileVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.08,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section className="w-full py-12 sm:py-16 md:py-24 px-2 sm:px-4 md:px-8 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-20 h-20 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div 
        className="w-full max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Section Title */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-philosopher font-bold mb-4">
            <span className="bg-[#0e5c63] font-source bg-clip-text text-transparent">
              Follow Our Journey
            </span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Join our spiritual community on Instagram for daily inspiration and insights
          </p>
        </motion.div>

        {/* Instagram Card */}
        <motion.div 
          className="w-full rounded-3xl bg-white/60 backdrop-blur-md shadow-2xl p-6 md:p-12 border border-white/20"
          variants={itemVariants}
          whileHover={{ 
            y: -8,
            transition: { duration: 0.3 }
          }}
        >
          {/* Profile Info */}
          <motion.div 
            className="flex flex-col md:flex-row items-center md:items-start w-full gap-8 md:gap-12 mb-10"
            variants={itemVariants}
          >
            {/* Enhanced Profile Image */}
            <motion.div 
              className="flex-shrink-0 mx-auto md:mx-0 relative"
              variants={profileVariants}
              whileHover="hover"
            >
              <div className="relative">
                <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-r from-purple-500 to-purple-700 p-1">
                  <div className="w-full h-full rounded-full bg-white p-1">
                    <motion.img 
                      src={profileImg} 
                      alt="Profile" 
                      className="w-full h-full object-cover rounded-full"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
                {/* Instagram badge */}
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
              </div>
            </motion.div>
            
            {/* Enhanced Profile Details */}
            <motion.div 
              className="flex-1 flex flex-col items-center md:items-start text-center md:text-left w-full"
              variants={itemVariants}
            >
              <motion.div 
                className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 w-full justify-center md:justify-start mb-4"
                variants={itemVariants}
              >
                <motion.span 
                  className="text-gray-900 text-2xl md:text-3xl font-philosopher font-bold"
                  variants={itemVariants}
                >
                  spiritualhealing.mk
                </motion.span>
                <motion.a 
                  href={INSTAGRAM_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <button className="bg-gradient-to-r from-purple-500 to-purple-700  text-white font-semibold rounded-full px-6 py-2 text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    Follow
                  </button>
                </motion.a>
              </motion.div>
              
              <motion.div 
                className="flex gap-8 mb-6 text-gray-700 font-medium text-base md:text-lg justify-center md:justify-start w-full"
                variants={itemVariants}
              >
                <span><span className="font-bold text-gray-900">265</span> posts</span>
                <span><span className="font-bold text-gray-900">369</span> followers</span>
                <span><span className="font-bold text-gray-900">96</span> following</span>
              </motion.div>
              
              <motion.div 
                className="text-gray-800 font-medium text-base md:text-lg text-center md:text-left w-full"
                variants={itemVariants}
              >
                <div className="font-bold text-lg md:text-xl mb-2">Yogini Meenal Gupta</div>
                <div className="text-sm text-gray-600 mb-3">Health & wellness website</div>
                <motion.div 
                  className="flex flex-wrap gap-2 mb-4"
                  variants={itemVariants}
                >
                  <span className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">🔮 Astrologer</span>
                  <span className="bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">🧘‍♀️ Astroyogi</span>
                  <span className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">🔮 Psychic</span>
                  <span className="bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">🃏 Tarot reader</span>
                </motion.div>
                <motion.a 
                  href="https://www.youtube.com/@spiritualhealingwithmeeenal" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-700 underline text-sm font-medium inline-flex items-center gap-1"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  YouTube Channel
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Enhanced Posts Grid */}
          <motion.div 
            className="w-full grid grid-cols-2 md:grid-cols-3 gap-4"
            variants={containerVariants}
          >
            {postImages.map((img, index) => (
              <motion.div
                key={index}
                className="relative group overflow-hidden rounded-xl"
                variants={imageVariants}
                whileHover="hover"
              >
                <motion.img
                  src={img}
                  alt={`Instagram post ${index + 1}`}
                  className="w-full h-48 md:h-56 object-cover"
                />
                {/* Hover overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="absolute bottom-3 left-3 text-white text-sm font-medium">
                    <svg className="w-5 h-5 inline mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    View Post
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default InstagramSection; 