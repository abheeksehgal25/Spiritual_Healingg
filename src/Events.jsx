import React from 'react';
import { motion } from 'framer-motion';
import maam from './assets/maam.svg';
import image from './assets/image.svg';
import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';
import image4 from './assets/image4.jpg';
import image5 from './assets/image5.jpg';
import image6 from './assets/image6.jpg';
import image7 from './assets/image7.jpg';
import image8 from './assets/image8.jpg';
import image9 from './assets/image9.jpg';

// Create an array of all images for the banner
const bannerImages = [
  maam, image1, image2, image3, image4, image5, image6, image7, image8, image9,
  maam, image1, image2, image3, image4, image5, image6, image7, image8, image9 // Duplicate for seamless loop
];

export default function Events() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
      className="py-10 px-4 md:px-16 lg:px-24 text-black"
      id="events"
    >
      <div className="text-center mb-10">
        <h2 className="font-philosopher text-4xl font-semibold mb-2">Offline Events</h2>
        <img src={image} alt="decorative underline" className="mx-auto w-36 sm:w-48" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.5 }}
        className="overflow-hidden w-full bg-white py-4"
      >
        <div className="flex gap-6 animate-marquee w-max">
          {bannerImages.map((img, idx) => (
            <motion.img
              key={idx}
              src={img}
              alt={`event ${idx + 1}`}
              className="h-80 w-80 object-cover rounded-lg shadow-lg"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: idx * 0.1,
                ease: "easeOut"
              }}
            />
          ))}
        </div>
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 25s linear infinite;
          }
        `}</style>
      </motion.div>
    </motion.section>
  );
} 