import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from './assets/logo.png';

const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'About Us', to: 'about' },
  { name: 'Events', to: 'events' },
  { name: 'Services', to: 'services' },
  { name: 'Achievements', to: 'achievements' },
];

const orange = 'text-orange-500';

export default function Navbar() {
  const [active, setActive] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActive(id.charAt(0).toUpperCase() + id.slice(1));
      setMenuOpen(false); // Close menu on link click
    }
  };

  return (
    <>
      {/* Top Info Bar */}
      <div className="w-full bg-[#070b1a] text-white text-xs md:text-sm flex flex-col md:flex-row items-start justify-start px-2 md:px-8 py-1 gap-y-1 gap-x-6 font-inter">
        <div className="flex items-center gap-1 md:gap-2">
          <span role="img" aria-label="phone">📞</span>
          <span>+91 7017094225</span>
        </div>
        <div className="flex items-center gap-1 md:gap-2">
          <span role="img" aria-label="email">📧</span>
          <span>meenalkhandelwal55@gmail.com</span>
        </div>
        <div className="flex items-center gap-1 md:gap-2">
          <span role="img" aria-label="clock">⏰</span>
          <span>9:30 AM - 6:30 PM</span>
        </div>
      </div>
      {/* Main Navbar with Framer Motion */}
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="w-full bg-white flex items-center justify-between px-2 md:px-12 py-2 md:py-3 shadow-sm sticky top-0 z-50"
      >
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 md:h-16 w-auto object-contain" />
        </div>
        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 font-semibold text-black text-base relative">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className={`cursor-pointer pb-1 transition-colors duration-200 relative ${active === link.name ? `${orange}` : 'hover:text-orange-400'}`}
              onClick={() => {
                handleScroll(link.to);
                setActive(link.name);
              }}
            >
              {link.name}
              {active === link.name && (
                <motion.span
                  layoutId="navbar-underline"
                  className="absolute left-0 right-0 -bottom-1 h-[2.5px] rounded bg-orange-500"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </li>
          ))}
        </ul>
        {/* Hamburger for Mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Open menu"
        >
          <span className={`block w-6 h-0.5 bg-black mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 z-[999] flex flex-col items-center justify-center md:hidden"
            >
              <motion.ul
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
                  closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
                }}
                className="flex flex-col gap-8 text-white text-2xl font-semibold"
              >
                {navLinks.map((link) => (
                  <motion.li
                    key={link.name}
                    variants={{
                      closed: { opacity: 0, y: 30 },
                      open: { opacity: 1, y: 0 },
                    }}
                    className={`cursor-pointer pb-1 transition-colors duration-200 relative ${active === link.name ? 'text-orange-400' : 'hover:text-orange-400'}`}
                    onClick={() => handleScroll(link.to)}
                  >
                    {link.name}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
} 