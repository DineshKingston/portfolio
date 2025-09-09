import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`header-fixed ${scrolled ? 'header-scrolled' : 'header-transparent'}`}>
      <div className="header-content">
        <div className="logo">
          <span className={scrolled ? 'text-purple' : 'text-purple-light'}>Dinesh&nbsp;</span>
          <span className={scrolled ? 'text-gray' : 'text-purple-light'}>Kingston</span>
        </div>

        
        <div className="nav-desktop">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`nav-link ${scrolled ? 'scrolled' : 'transparent'}`}
            >
              {item.name}
            </a>
          ))}
        </div>

        <button
          className={`mobile-menu-btn ${scrolled ? 'text-gray' : 'text-white'}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="mobile-nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            {item.name}
          </a>
        ))}
        <div className="mobile-cta">
          <a
            href="#contact"
            className="btn-gradient mobile-cta-btn"
            onClick={() => setIsMenuOpen(false)}
          >
            Let's Connect
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
