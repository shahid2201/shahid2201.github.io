import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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
                  <a href="/">Where the Magic Happens</a>
                  <a href="/about">Who’s This Genius?</a>
                  <a href="/contact">Talk to this Future Tech Legend</a>
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