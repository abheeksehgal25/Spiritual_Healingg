import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from './assets/logo.png';
import { MdPhone, MdEmail, MdAccessTime } from 'react-icons/md';

const navLinks = [
  { name: 'Home', to: 'home', isScroll: true },
  { name: 'About Us', to: 'about', isScroll: true },
  { name: 'Events', to: 'events', isScroll: true },
  { name: 'Services', to: 'services', isScroll: true },
  { name: 'Achievements', to: 'achievements', isScroll: true },
  { name: 'Blog', to: '/blog', isScroll: false },
];

const blue = 'text-[#0e5c63]';

export default function Navbar() {
  const [active, setActive] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Listen for hash in URL and scroll to section after navigation
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          setActive(id.charAt(0).toUpperCase() + id.slice(1));
        }
      }, 100);
    }
  }, [location]);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActive(id.charAt(0).toUpperCase() + id.slice(1));
      setMenuOpen(false); // Close menu on link click
    }
  };

  const handleNavClick = (link) => {
    if (link.isScroll) {
      if (location.pathname !== '/') {
        // Navigate to home with hash, then scroll after navigation
        navigate('/#' + link.to);
        setMenuOpen(false);
      } else {
        handleScroll(link.to);
        setActive(link.name);
        setMenuOpen(false);
      }
    } else {
      setActive(link.name);
      setMenuOpen(false);
      navigate(link.to);
    }
  };

  return (
    <>
      {/* Top Info Bar */}
      <div className="w-full bg-[#070b1a] text-white text-xs md:text-sm flex flex-col md:flex-row items-start justify-start px-2 md:px-8 py-1 gap-y-1 gap-x-6 font-inter z-[100]">
        <div className="flex items-center gap-1 md:gap-2">
          <MdPhone className="text-[#0e5c63]" />
          <span>+91 7017094225</span>
        </div>
        <div className="flex items-center gap-1 md:gap-2">
          <MdEmail className="text-[#0e5c63]" />
          <span>meenalkhandelwal55@gmail.com</span>
        </div>
        <div className="flex items-center gap-1 md:gap-2">
          <MdAccessTime className="text-[#0e5c63]" />
          <span>9:30 AM - 6:30 PM</span>
        </div>
      </div>
      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="w-full bg-gradient-to-r bg-white backdrop-blur-md bg-opacity-80 flex items-center px-2 sm:px-4 md:px-12 py-2 md:py-3 shadow-sm sticky top-0 z-[100]"
      >
        <div className="flex items-center w-full">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-14 w-auto md:h-20 md:w-auto object-contain" />
          </Link>
          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-8 font-semibold text-black text-base relative ml-auto justify-end">
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.isScroll ? (
                  <span
                    className={`cursor-pointer pb-1 transition-colors duration-200 relative ${active === link.name ? `${blue}` : 'hover:text-[#0e5c63]'}`}
                    onClick={() => handleNavClick(link)}
                  >
                    {link.name}
                    {active === link.name && (
                      <motion.span
                        layoutId="navbar-underline"
                        className="absolute left-0 right-0 -bottom-1 h-[2.5px] rounded bg-[#0e5c63]"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </span>
                ) : (
                  <Link
                    to={link.to}
                        className={`cursor-pointer pb-1 transition-colors duration-200 relative ${location.pathname === link.to ? `${blue}` : 'hover:text-[#0e5c63]'}`}
                    onClick={() => handleNavClick(link)}
                  >
                    {link.name}
                    {location.pathname === link.to && (
                      <motion.span
                        layoutId="navbar-underline"
                          className="absolute left-0 right-0 -bottom-1 h-[2.5px] rounded bg-[#0e5c63]"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          {/* Hamburger for Mobile */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none ml-auto"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Open menu"
          >
            <span className={`block w-6 h-0.5 bg-black mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-black mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-black transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </motion.nav>
      
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] w-screen h-screen bg-black/95 flex flex-col items-center justify-start pt-16 px-6 overflow-y-auto"
            style={{ top: 0, left: 0, right: 0, bottom: 0 }}
          >
            {/* Close button */}
            <button
              className="absolute top-6 right-6 text-4xl text-white focus:outline-none hover:text-orange-400 transition-colors"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              &times;
            </button>
            
            {/* Logo */}
            <Link to="/" className="mb-12 mt-4" onClick={() => setMenuOpen(false)}>
              <img src={logo} alt="Logo" className="h-16 w-auto mx-auto" />
            </Link>
            
            {/* Navigation Links */}
            <nav className="flex flex-col gap-8 text-3xl font-bold w-full items-center text-white">
              {navLinks.map((link) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.indexOf(link) * 0.1 }}
                >
                  <button
                    className={`cursor-pointer pb-2 transition-all duration-300 relative w-full text-center hover:text-orange-400 ${
                      active === link.name ? 'text-orange-500' : 'text-white'
                    }`}
                    onClick={() => handleNavClick(link)}
                  >
                    {link.name}
                    {active === link.name && (
                      <motion.div
                        layoutId="mobile-underline"
                        className="absolute left-1/2 transform -translate-x-1/2 -bottom-1 h-1 w-16 bg-orange-500 rounded-full"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </button>
                </motion.div>
              ))}
            </nav>
            
            {/* Contact Info at bottom */}
            {/* <div className="mt-auto mb-8 text-center text-white/80 text-sm">
              <p className="mb-2">📞 +91 7017094225</p>
              <p>📧 meenalkhandelwal55@gmail.com</p>
            </div> */}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 