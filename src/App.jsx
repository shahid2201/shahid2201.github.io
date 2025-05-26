import React, { useState, useEffect, useRef } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SmoothScroll from 'smooth-scroll';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import ContactSuccess from './pages/ContactSuccess';
import ContactError from './pages/ContactError';
import NotFound from './pages/NotFound';
import './styles/main.css';
import HamburgerIcon from './assets/icons8-hamburger-menu.svg';

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Persist dark mode preference
    return localStorage.getItem('darkMode') === 'true';
  });

  const [menuOpen, setMenuOpen] = React.useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close mobile menu only when clicking outside
  useEffect(() => {
    if (!menuOpen || !isMobile) return;
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen, isMobile]);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  useEffect(() => {
    // Initialize smooth-scroll for all anchor links
    const scroll = new SmoothScroll('a[href*="#"]', {
      speed: 800, // Adjust speed (ms)
      speedAsDuration: true,
      easing: 'easeInOutCubic', // Smoother easing
      offset: 0,
      updateURL: false,
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobile && menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    // Clean up on unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobile, menuOpen]);

  return (
    <Router>
      <div className={`app-container${darkMode ? ' dark' : ''}`}>
        <nav className="navbar">
          {isMobile ? (
            <button
              className="nav-hamburger mobile-only"
              aria-label="Open navigation menu"
              style={{ marginRight: '1rem', marginLeft: 0, background: 'none', border: 'none', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              onClick={() => setMenuOpen(true)}
            >
              <img src={HamburgerIcon} alt="Open navigation menu" style={{ width: 36, height: 36, display: 'block' }} />
            </button>
          ) : (
            <button
              className="nav-hamburger"
              aria-label="Open navigation menu"
              style={{ marginRight: '1rem', marginLeft: 0 }}
              onClick={() => setMenuOpen(true)}
            >
              <span />
              <span />
              <span />
            </button>
          )}
          <Link to="/" className="logo">Mohammad Shahid</Link>
          <div className="nav-menu-container">
            {/* "Navigate" button for desktop */}
            <span
              className="nav-menu-trigger"
              tabIndex={0}
              onClick={() => setMenuOpen(true)}
              onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && setMenuOpen(true)}
              role="button"
              aria-haspopup="true"
              aria-expanded={menuOpen}
            >
              Navigate
            </span>
            {/* Overlay menu: desktop vs mobile */}
            {menuOpen && (
              isMobile ? (
                <div className="nav-overlay-menu mobile" ref={menuRef}>
                  <div className="nav-overlay-arc-links">
                    <Link to="/" onClick={() => setMenuOpen(false)}>Back to Base</Link>
                    <Link to="/about" onClick={() => setMenuOpen(false)}>Who’s This Genius?</Link>
                    <Link to="/contact" onClick={() => setMenuOpen(false)}>Talk to this Future Tech Legend</Link>
                  </div>
                  <div className="nav-mobile-dark-toggle" style={{ marginTop: 'auto', width: '100%', display: 'flex', justifyContent: 'center', padding: '2rem 0' }}>
                    <button
                      className={`dark-toggle-btn${darkMode ? ' dark' : ''}`}
                      onClick={() => setDarkMode(dm => !dm)}
                      aria-label="Toggle dark mode"
                    >
                      <div className="toggle-track">
                        <span className="toggle-icon sun">☀️</span>
                        <span className="toggle-thumb"></span>
                        <span className="toggle-icon moon">🌙</span>
                      </div>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="nav-overlay-menu open" onClick={() => setMenuOpen(false)}>
                  <div className="nav-overlay-arc-links">
                    <Link to="/" onClick={() => setMenuOpen(false)}>Back to Base</Link>
                    <Link to="/about" onClick={() => setMenuOpen(false)}>Who’s This Genius?</Link>
                    <Link to="/contact" onClick={() => setMenuOpen(false)}>Talk to this Future Tech Legend</Link>
                  </div>
                </div>
              )
            )}
          </div>
          {/* Desktop dark mode toggle */}
          {!isMobile && (
            <button
              className={`dark-toggle-btn${darkMode ? ' dark' : ''}`}
              onClick={() => setDarkMode(dm => !dm)}
              aria-label="Toggle dark mode"
            >
              <div className="toggle-track">
                <span className="toggle-icon sun">☀️</span>
                <span className="toggle-thumb"></span>
                <span className="toggle-icon moon">🌙</span>
              </div>
            </button>
          )}
        </nav>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact-success" element={<ContactSuccess />} />
            <Route path="/contact-error" element={<ContactError />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;