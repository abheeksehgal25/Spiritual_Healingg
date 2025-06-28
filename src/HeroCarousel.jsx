import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import bg from './assets/background.png';
import whatsapp from './assets/whatsapp.png';

const slides = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z" fill="white"/>
        <path d="M7 7H17V9H7V7Z" fill="white"/>
        <path d="M7 11H17V13H7V11Z" fill="white"/>
        <path d="M7 15H13V17H7V15Z" fill="white"/>
        <circle cx="16" cy="16" r="2" fill="white"/>
      </svg>
    ),
    label: 'Discover Tarot Reading',
    service: 'tarot'
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="white"/>
        <path d="M12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16Z" fill="white"/>
        <path d="M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" fill="white"/>
      </svg>
    ),
    label: 'Discover Numerology',
    service: 'numerology'
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.9 1 3 1.9 3 3V21C3 22.1 3.9 23 5 23H19C20.1 23 21 22.1 21 21V9ZM19 21H5V3H13V9H19V21Z" fill="white"/>
        <path d="M8 12C8 13.1 7.1 14 6 14C4.9 14 4 13.1 4 12C4 10.9 4.9 10 6 10C7.1 10 8 10.9 8 12Z" fill="white"/>
        <path d="M20 12C20 13.1 19.1 14 18 14C16.9 14 16 13.1 16 12C16 10.9 16.9 10 18 10C19.1 10 20 10.9 20 12Z" fill="white"/>
        <path d="M14 16C14 17.1 13.1 18 12 18C10.9 18 10 17.1 10 16C10 14.9 10.9 14 12 14C13.1 14 14 14.9 14 16Z" fill="white"/>
      </svg>
    ),
    label: 'Discover Astro Yoga',
    service: 'yoga'
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="white"/>
        <path d="M12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16Z" fill="white"/>
        <path d="M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" fill="white"/>
      </svg>
    ),
    label: 'Discover Mudra Therapy',
    service: 'meditation'
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  // Autoplay
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearTimeout(timer);
  }, [current]);

  // WhatsApp link
  const whatsappLink =
    'https://wa.me/917017094225?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services.';

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1
      }
    }
  };

  const dotVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3
      }
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <div className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden">
      {/* Background Image with subtle animation */}
      <motion.img
        src={bg}
        alt="slide background"
        className="absolute inset-0 w-full h-full object-cover z-10"
        style={{ pointerEvents: 'none' }}
        animate={{
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Animated overlay */}
      <motion.div 
        className="absolute inset-0 bg-black/30 z-20"
        animate={{
          background: [
            "rgba(0,0,0,0.3)",
            "rgba(0,0,0,0.35)",
            "rgba(0,0,0,0.3)"
          ]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Slide Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="absolute top-1/2 left-6 md:left-24 -translate-y-1/2 z-30 flex flex-col items-start"
        >
          {/* Main heading with staggered text animation */}
          <motion.div className="mb-12">
            <motion.h1
              variants={textVariants}
              className="text-white text-2xl sm:text-3xl md:text-5xl font-philosopher font-normal text-left drop-shadow-lg"
            >
              Align Your <br />
              Body, Mind and Stars
            </motion.h1>
          </motion.div>
          
          {/* Animated button */}
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="flex items-center gap-3 bg-purple-600/80 backdrop-blur-sm text-white px-8 py-4 rounded-full border border-purple-400/50 hover:bg-purple-500/90 transition-all duration-300 group relative overflow-hidden shadow-lg mt-2"
          >
            <div className="w-5 h-5">
              {slides[current].icon}
            </div>
            <span className="text-lg font-medium">{slides[current].label}</span>
          </motion.button>
        </motion.div>
      </AnimatePresence>
      
      {/* Animated dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-40">
        {slides.map((_, idx) => (
          <motion.button
            key={idx}
            variants={dotVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className={`w-3 h-3 rounded-full border-2 border-white transition-colors ${
              current === idx ? 'bg-white' : 'bg-transparent'
            }`}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            style={{
              animationDelay: `${idx * 0.1}s`
            }}
          />
        ))}
      </div>
      
      {/* Animated WhatsApp Icon */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img src={whatsapp} alt="WhatsApp" className="w-14 h-14 rounded-full shadow-lg" />
      </motion.a>
    </div>
  );
} 