import React from 'react';
import { motion } from 'framer-motion';
import line from './assets/line.svg';
import image from './assets/image.svg';

export default function Portfolio() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
      className="py-10 px-4 md:px-16 lg:px-24 text-black"
    >
      <div className="text-center mb-10">
        <h2 className="font-philosopher text-3xl font-semibold mb-2">Portfolio</h2>
        <img src={image} alt="decorative underline" className="mx-auto w-36 sm:w-48" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {[...Array(8)].map((_, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.12, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className="aspect-video bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img src={line} alt={`portfolio item ${idx + 1}`} className="w-full h-full object-cover hover:shadow-lg transition-shadow duration-300 scale-[40px] cursor-pointer" />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
} 