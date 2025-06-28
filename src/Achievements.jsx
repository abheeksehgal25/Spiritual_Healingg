import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import logs4 from './assets/logs1.svg';
import logs2 from './assets/logs2.svg';
import logs3 from './assets/logs.svg';
import logs1 from './assets/logs4.svg';
import background from './assets/background.jpg';
import image from './assets/image.svg';

// Animated counter component
const AnimatedCounter = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count.toLocaleString()}+</span>;
};

export default function Achievements() {
  const achievementsData = [
    { 
      img: logs1, 
      label: 'Years Of Practice', 
      value: 15,
      description: 'Years of spiritual healing experience'
    },
    { 
      img: logs2, 
      label: 'Readings', 
      value: 5000,
      description: 'Successful tarot & numerology readings'
    },
    { 
      img: logs3, 
      label: 'Instagram Followers', 
      value: 369,
      description: 'Growing spiritual community'
    },
    { 
      img: logs4, 
      label: 'Clients & Students', 
      value: 1000,
      description: 'Happy clients and students worldwide'
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
      className="w-full relative overflow-hidden"
      id="achievements"
    >
      <div
        className="w-full bg-cover bg-center min-h-[500px] md:min-h-[600px] flex flex-col items-center justify-center px-4 md:px-16 lg:px-24 text-white relative"
        style={{ backgroundImage: `url(${background})` }}
      >
        {/* Enhanced background overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/70 via-black/60 to-pink-900/70" />
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 15 }).map((_, i) => (
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
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-6xl mx-auto w-full">
          {/* Enhanced Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="font-philosopher text-3xl md:text-5xl font-semibold mb-4">
              <span className="bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
                Our Achievements
              </span>
            </h2>
            <div className="flex justify-center mb-6">
              <img src={image} alt="decorative underline" className="mx-auto w-36 sm:w-48" />
            </div>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
              Milestones that reflect our commitment to spiritual healing and transformation
            </p>
          </motion.div>

          {/* Enhanced Achievements Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
            {achievementsData.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.2 }}
                className="flex flex-col items-center text-center group"
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Enhanced Icon Container */}
                <motion.div
                  className="relative mb-6"
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <img 
                      src={item.img} 
                      alt={item.label} 
                      className="w-12 h-12 md:w-14 md:h-14 object-contain"
                    />
                  </div>
                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1.2 }}
                  />
                </motion.div>

                {/* Animated Counter */}
                <motion.div
                  className="text-3xl md:text-4xl font-bold text-white mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 + 0.3 }}
                >
                  <AnimatedCounter end={item.value} />
                </motion.div>

                {/* Label */}
                <motion.h3
                  className="text-lg md:text-xl font-semibold text-white mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 + 0.4 }}
                >
                  {item.label}
                </motion.h3>

                {/* Description */}
                <motion.p
                  className="text-white/70 text-sm md:text-base leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 + 0.5 }}
                >
                  {item.description}
                </motion.p>
              </motion.div>
            ))}
          </div>

          {/* Enhanced CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-center mt-16"
          >
            <motion.a
              href="https://calendly.com/meenalkhandelwal55"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-white/20 w-full max-w-xs mx-auto justify-center"
            >
              <span>Start Your Journey</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
} 