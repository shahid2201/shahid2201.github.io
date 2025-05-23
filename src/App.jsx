import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SmoothScroll from 'smooth-scroll';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import ContactSuccess from './pages/ContactSuccess';
import ContactError from './pages/ContactError';
import NotFound from './pages/NotFound';
import './styles/main.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Persist dark mode preference
    return localStorage.getItem('darkMode') === 'true';
  });

  const [menuOpen, setMenuOpen] = React.useState(false);

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

  return (
    <Router>
      <div className={`app-container${darkMode ? ' dark' : ''}`}>
        <nav className="navbar">
          <Link to="/" className="logo">Mohammad Shahid</Link>
          <div className="nav-menu-container">
            {!menuOpen && (
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
            )}
            {menuOpen && (
              <div className="nav-overlay-menu open">
                <div
                  className="nav-overlay-arc-links"
                  onMouseLeave={() => setMenuOpen(false)}
                >
                  <Link to="/" onClick={() => setMenuOpen(false)}>Back to Base</Link>
                  <Link to="/about" onClick={() => setMenuOpen(false)}>Who’s This Genius?</Link>
                  <Link to="/contact" onClick={() => setMenuOpen(false)}>Talk to this Future Tech Legend</Link>
                </div>
              </div>
            )}
          </div>
          <button
            className={`dark-toggle-btn${darkMode ? ' dark' : ''}`}
            onClick={() => setDarkMode(dm => !dm)}
            aria-label="Toggle dark mode"
          >
            <span className="toggle-track">
              <span className="toggle-thumb">
                <span className="toggle-icon sun">☀️</span>
                <span className="toggle-icon moon">🌙</span>
              </span>
            </span>
          </button>
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