import React from "react";
import "./../styles/about.css";

const About = () => (
  <section className="about-section">
    <h2 className="about-title">👋 Meet Mohammad</h2>
    <div className="about-cards">
      <div className="about-card">
        <span className="about-icon">💡</span>
        <p>
          <strong>Curiosity-Driven:</strong> My coding journey began with a simple question—how do things work behind the scenes? That spark turned into a passion for <span className="about-highlight">problem-solving</span> and <span className="about-highlight">clean design</span>.
        </p>
      </div>
      <div className="about-card">
        <span className="about-icon">⚛️</span>
        <p>
          <strong>React Enthusiast:</strong> I craft intuitive interfaces with <span className="about-highlight">React.js</span>, always aiming for seamless user experiences and pixel-perfect design.
        </p>
      </div>
      <div className="about-card">
        <span className="about-icon">📈</span>
        <p>
          <strong>Strategic Thinker:</strong> My passion for <span className="about-highlight">stock trading</span> sharpens my analytical skills—helping me approach development with creativity and precision.
        </p>
      </div>
      <div className="about-card">
        <span className="about-icon">🚀</span>
        <p>
          <strong>Always Growing:</strong> Whether it’s personal projects or collaborations, I believe in <span className="about-highlight">continuous learning</span>, attention to detail, and pushing boundaries.
        </p>
      </div>
    </div>
    <div className="about-cta">
      <span>🤝</span>
      <p>
        <strong>Let’s build something amazing together!</strong> I’m open to freelance work and collaborations—if you have an idea, <a href="/#/contact">let’s connect</a>!
      </p>
    </div>
  </section>
);

export default About;