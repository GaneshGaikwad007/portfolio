import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css';

function Navbar({ isDark, setIsDark }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', to: 'about' },
    { label: 'Experience', to: 'experience' },
    { label: 'Projects', to: 'projects' },
    { label: 'Skills', to: 'skills' },
    { label: 'Education', to: 'education' },
    { label: 'Achievements', to: 'achievements' },
    { label: 'Contact', to: 'contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <div className="logo">
          <ScrollLink to="hero" smooth duration={500} className="logo-text">
            GK
          </ScrollLink>
        </div>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <ScrollLink
              key={item.to}
              to={item.to}
              smooth
              duration={500}
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </ScrollLink>
          ))}
        </div>

        <div className="nav-right">
          <button 
            className="theme-toggle" 
            onClick={() => setIsDark(!isDark)}
            title={isDark ? 'Light Mode' : 'Dark Mode'}
          >
            {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
          <button 
            className="menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
