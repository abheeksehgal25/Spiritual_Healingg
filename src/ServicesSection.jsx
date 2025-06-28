import React from 'react';
import { motion } from 'framer-motion';
import bgSection from './assets/background2.jpg';
import bgCard from './assets/background3.png';
import TarrotIcon from './assets/Tarrot.png';
import numerologyIcon from './assets/Numerology.png';
import yogaIcon from './assets/Yoga.png';
import comboIcon from './assets/SpecialCombo.png';
import line from './assets/line.png';

const tarotServices = [
  { title: 'Astro+ Tarot Session Video Call - 30 Minutes' },
  { title: 'Astro + Tarot Session Phone Call - 30 Minutes' },
  { title: 'Tarot Reading Phone Call - 30 Minutes' },
  { title: 'Tarot Reading Video Call - 30 Minutes' },
];
const numerologyServices = [
  { title: 'Reading Via Whatsapp Audio Notes' },
  { title: 'Business Name Numerology' },
  { title: 'Personal Name Numerology' },
];
const yogaServices = [
  { title: 'Personal Yoga Sessions' },
  { title: 'Chakkra Yoga Balance' },
  { title: 'Zodiac- Yoga Energy' },
  { title: 'Mudra Therapy' },
];
const comboServices = [
  { title: 'Astro Body Balance Pack' },
  { title: '7-Chakra Renewal Journey' },
  { title: 'Elemental Hormony' },
];

function ServiceCard({ title, icon, idx }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: idx * 0.12, ease: 'easeOut' }}
      className="flex flex-col items-center justify-center bg-white/80 rounded-xl shadow-lg p-6 md:p-8 m-2 min-h-[200px] max-w-xs w-full mx-auto"
      style={{ backgroundImage: `url(${bgCard})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <motion.img src={icon} alt="icon" className="w-16 h-16 mb-4" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 + idx * 0.12 }} />
      <div className="text-center font-semibold text-sm md:text-base mb-2 text-black">{title}</div>
      <a href="https://calendly.com/meenalkhandelwal55" className="text-blue-700 text-xs md:text-sm font-semibold underline hover:text-blue-900">BOOK A SESSION NOW</a>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative w-full py-16 md:py-24 px-2 md:px-8 overflow-x-hidden"
      id="services"
      style={{ backgroundImage: `url(${bgSection})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="text-2xl md:text-4xl font-philosopher font-normal text-center text-white mb-2"
        >
          Our Services
        </motion.h2>
        <div className="flex justify-center mb-6">
          <img src={line} alt="divider" className="h-6 w-auto" />
        </div>
        {/* Tarot Sessions */}
        <div className="mb-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="flex items-center gap-3 mb-2"
          >
            <img src={TarrotIcon} alt="Tarot" className="w-8 h-8" />
            <h3 className="text-lg md:text-2xl text-white font-philosopher font-normal">Tarot Sessions</h3>
          </motion.div>
          <img src={line} alt="divider" className="h-4 w-auto mb-6" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {tarotServices.map((s, i) => (
              <ServiceCard key={i} title={s.title} icon={TarrotIcon} idx={i} />
            ))}
          </div>
        </div>
        {/* Numerology Session */}
        <div className="mb-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="flex items-center gap-3 mb-2"
          >
            <img src={numerologyIcon} alt="Numerology" className="w-8 h-8" />
            <h3 className="text-lg md:text-2xl text-white font-philosopher font-normal">Numerology Session</h3>
          </motion.div>
          <img src={line} alt="divider" className="h-4 w-auto mb-6" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {numerologyServices.map((s, i) => (
              <ServiceCard key={i} title={s.title} icon={numerologyIcon} idx={i} />
            ))}
          </div>
        </div>
        {/* Yoga Session */}
        <div className="mb-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="flex items-center gap-3 mb-2"
          >
            <img src={yogaIcon} alt="Yoga" className="w-8 h-8" />
            <h3 className="text-lg md:text-2xl text-white font-philosopher font-normal">Yoga Session</h3>
          </motion.div>
          <img src={line} alt="divider" className="h-4 w-auto mb-6" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {yogaServices.map((s, i) => (
              <ServiceCard key={i} title={s.title} icon={yogaIcon} idx={i} />
            ))}
          </div>
        </div>
        {/* Special Combo Offers */}
        <div className="mb-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="flex items-center gap-3 mb-2"
          >
            <img src={comboIcon} alt="Special Combo" className="w-8 h-8" />
            <h3 className="text-lg md:text-2xl text-white font-philosopher font-normal">Special Combo Offers</h3>
          </motion.div>
          <img src={line} alt="divider" className="h-4 w-auto mb-6" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {comboServices.map((s, i) => (
              <ServiceCard key={i} title={s.title} icon={comboIcon} idx={i} />
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <motion.a
            href="https://calendly.com/meenalkhandelwal55"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#0655A0] hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded transition-colors text-base md:text-lg shadow"
          >
            EXPLORE SESSIONS
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
} 