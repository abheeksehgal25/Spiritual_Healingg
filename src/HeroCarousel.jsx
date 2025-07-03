import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import bg from './assets/background.png';
import whatsapp from './assets/whatsapp.png';
import tarotIcon from './assets/tarot.jpeg';
import numeroIcon from './assets/numero.jpeg';
import astroIcon from './assets/astro.jpeg';
import mudraIcon from './assets/mudra.jpeg';
import yogaIcon from './assets/yoga1.png';

const slides = [
  {
    icon: (
      <span className="flex items-center justify-center w-16 h-16"><img src={tarotIcon} alt="Tarot" className="w-16 h-16 object-contain rounded-full shadow" /></span>
    ),
    label: 'Discover Tarot Reading',
    service: 'tarot',
    gradient: 'bg-gradient-to-r from-purple-500 to-purple-700'
  },
  {
    icon: (
      <span className="flex items-center justify-center w-16 h-16"><img src={numeroIcon} alt="Numerology" className="w-16 h-16 object-contain rounded-full shadow" /></span>
    ),
    label: 'Discover Numerology',
    service: 'numerology',
    gradient: 'bg-gradient-to-r from-purple-500 to-purple-700'
  },
  {
    icon: (
      <span className="flex items-center justify-center w-16 h-16"><img src={astroIcon} alt="Astro Yoga" className="w-16 h-16 object-contain rounded-full shadow" /></span>
    ),
    label: (<span className="flex flex-col leading-tight">Discover Astro<br/>Yoga</span>),
    service: 'yoga',
    gradient: 'bg-gradient-to-r from-purple-500 to-purple-700'
  },
  {
    icon: (
      <span className="flex items-center justify-center w-16 h-16"><img src={mudraIcon} alt="Mudra" className="w-16 h-16 object-contain rounded-full shadow" /></span>
    ),
    label: 'Discover Mudra Therapy',
    service: 'meditation',
    gradient: 'bg-gradient-to-r from-purple-500 to-purple-700'
  },
  {
    icon: (
      <span className="flex items-center justify-center w-16 h-16"><img src={yogaIcon} alt="Yoga Therapy" className="w-16 h-16 object-contain rounded-full shadow" /></span>
    ),
    label: 'Discover Yoga Therapy',
    service: 'yoga-therapy',
    gradient: 'bg-gradient-to-r from-purple-500 to-purple-700'
  },
];

// Floating particles component
const FloatingParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => i);
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3
      }
    },
    tap: {
      scale: 0.95,
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
      scale: 1.2,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[90vh] overflow-hidden px-2 sm:px-4 md:px-0">
      {/* Background Image with enhanced animation */}
      <motion.img
        src={bg}
        alt="slide background"
        className="absolute inset-0 w-full h-full object-cover z-10"
        style={{ pointerEvents: 'none' }}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Enhanced gradient overlay */}
      <motion.div 
        className="absolute inset-0 z-20"
        style={{
          background: `linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.4) 100%)`
        }}
        animate={{
          background: [
            "linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.4) 100%)",
            "linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.5) 100%)",
            "linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.4) 100%)"
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Floating particles */}
      <FloatingParticles />
      
      {/* Slide Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="absolute top-1/2 left-2 sm:left-6 md:left-24 -translate-y-1/2 z-30 flex flex-col items-start w-[90vw] max-w-screen-md"
        >
          {/* Enhanced main heading */}
          <motion.div className="mb-12">
            <motion.h1
              variants={textVariants}
              className="text-white text-3xl sm:text-4xl md:text-7xl font-philosopher font-semibold text-left drop-shadow-2xl leading-tight"
            >
              <span className="bg-white bg-clip-text text-transparent ">
                Align Your
              </span>
              <br />
              <span className="bg-white bg-clip-text text-transparent">
                Body, Mind and Stars
              </span>
            </motion.h1>
            <motion.p
              variants={textVariants}
              className="text-white/90 text-lg md:text-[22px] mt-4 max-w-md"
            >
              Discover your spiritual path with expert guidance
            </motion.p>
          </motion.div>
          
          {/* Enhanced animated button */}
          <a
            href="https://calendly.com/meenalkhandelwal55"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-xs"
          >
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className={`flex items-center gap-4 bg-gradient-to-r ${slides[current].gradient} backdrop-blur-md text-white px-4 sm:px-6 py-3 sm:py-4 rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 group relative overflow-hidden shadow-2xl text-sm sm:text-lg w-full max-w-[260px]`}
            >
              {slides[current].icon}
              <span className="font-medium text-center flex-1">{slides[current].label}</span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
          </a>
        </motion.div>
      </AnimatePresence>
      
      {/* Enhanced animated dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-40">
        {slides.map((_, idx) => (
          <motion.button
            key={idx}
            variants={dotVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className={`w-4 h-4 rounded-full border-2 border-white transition-all duration-300 ${
              current === idx ? 'bg-white scale-125' : 'bg-transparent hover:bg-white/50'
            }`}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
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