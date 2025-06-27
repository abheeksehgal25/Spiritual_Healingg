import React, { useState } from 'react';
import logo from './assets/logo.png';

const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'Contact Us', to: 'contact' },
  { name: 'Services', to: 'services' },
  { name: 'About Us', to: 'about' },
];

const orange = 'text-orange-500';
const orangeBorder = 'border-orange-500';

export default function Navbar() {
  const [active, setActive] = useState('Home');

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActive(id.charAt(0).toUpperCase() + id.slice(1));
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
      {/* Main Navbar */}
      <nav className="w-full bg-white flex items-center justify-between px-2 md:px-12 py-2 md:py-3 shadow-sm sticky top-0 z-50">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 md:h-16 w-auto object-contain" />
        </div>
        <ul className="hidden md:flex gap-8 font-semibold text-black text-base">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className={`cursor-pointer pb-1 transition-colors duration-200 ${active === link.name ? `${orange} border-b-2 ${orangeBorder}` : 'hover:text-orange-400 hover:border-b-2 hover:border-orange-400'}`}
              onClick={() => {
                handleScroll(link.to);
                setActive(link.name);
              }}
            >
              {link.name}
            </li>
          ))}
        </ul>
        {/* Mobile nav can be added later */}
      </nav>
    </>
  );
} 