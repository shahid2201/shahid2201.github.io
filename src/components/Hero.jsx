import React, { useRef, useEffect, useState } from 'react';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`hero${visible ? ' visible' : ''}`}
    >
      <img src={profileImg} alt="Profile" className="hero-avatar" />
      <h1 className="hero-name">Oh hey, I'm Mohammad Shahid</h1>
      <p>
        Web Developer | Wrangling Java, C#, JavaScript & Web Tech so you don't have to.
      </p>
      <p>
        Building cool things, breaking them, then pretending it was intentional.
      </p>
      <div className="social-links">
        <a href="https://github.com/shahid2201" target="_blank" rel="noopener noreferrer">
          <img src={require('../assets/github-mark.png')} alt="GitHub" className="icon-light" />
          <img src={require('../assets/github-mark-white.png')} alt="GitHub" className="icon-dark" />
        </a>
        <a href="https://www.linkedin.com/in/mohammad-shahid-me/" target="_blank" rel="noopener noreferrer">
          <img src={require('../assets/InBug-Black.png')} alt="LinkedIn" className="icon-light" />
          <img src={require('../assets/InBug-White.png')} alt="LinkedIn" className="icon-dark" />
        </a>
      </div>
    </section>
  );
};

export default Hero;