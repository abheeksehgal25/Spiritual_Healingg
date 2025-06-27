import React from 'react';
import { motion } from 'framer-motion';
import logs4 from './assets/logs1.svg';
import logs2 from './assets/logs2.svg';
import logs3 from './assets/logs.svg';
import logs1 from './assets/logs4.svg';
import background from './assets/background.jpg';
import image from './assets/image.svg';

export default function Achievements() {
  const achievementsData = [
    { img: logs1, label: 'Years Of Practice' },
    { img: logs2, label: 'Readings' },
    { img: logs3, label: 'Instagram Followers' },
    { img: logs4, label: 'Clients & Students' },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
      className="w-full"
      id="achievements"
    >
      <div
        className="w-full bg-cover bg-center min-h-[400px] flex flex-col items-center justify-center px-4 md:px-16 lg:px-24 text-white"
        style={{ backgroundImage: `url(${background})` }}
      >
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-6"
        >
          <h2 className="font-philosopher text-4xl font-semibold mb-2">Achievements</h2>
          <img src={image} alt="decorative underline" className="mx-auto w-36 sm:w-48" />
        </motion.div>
        {/* Achievements */}
        <div className="flex flex-wrap justify-center gap-[40px] md:gap-[90px] mt-4">
          {achievementsData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.15, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col items-center"
            >
              <img src={item.img} alt="" className='hover:shadow-lg transition-shadow duration-300 scale-[20px] cursor-pointer'/>
              <p className="mt-2 text-sm font-inter text-white">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
} 