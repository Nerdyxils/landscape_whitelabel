import React, { useState, useEffect, useRef } from 'react'
import './Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  // Handle scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking on a link
  const handleNavClick = () => {
    console.log('Nav link clicked, closing mobile menu');
    setIsMobileMenuOpen(false);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    console.log('Toggling mobile menu from:', isMobileMenuOpen, 'to:', !isMobileMenuOpen);
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMobileMenuOpen]);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          {/* Logo - Replace with actual logo */}
          <div className="logo">
            <span className="logo-icon">🌿</span>
            <span className="logo-text">GreenScape</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            <a href="#home" onClick={handleNavClick}>Home</a>
            <a href="#services" onClick={handleNavClick}>Services</a>
            <a href="#portfolio" onClick={handleNavClick}>Portfolio</a>
            <a href="#contact" onClick={handleNavClick}>Contact</a>
          </nav>

          {/* CTA Button */}
          <div className="header-cta">
            <a href="#contact" className="btn btn-secondary">Get Quote</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav 
          ref={mobileMenuRef}
          className={`nav-mobile ${isMobileMenuOpen ? 'open' : ''}`}
          aria-hidden={!isMobileMenuOpen}
        >
          <a href="#home" onClick={handleNavClick}>Home</a>
          <a href="#services" onClick={handleNavClick}>Services</a>
          <a href="#portfolio" onClick={handleNavClick}>Portfolio</a>
          <a href="#contact" onClick={handleNavClick}>Contact</a>
          <a href="#contact" className="btn btn-secondary" onClick={handleNavClick}>Get Quote</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
