import React from 'react';
import Hero from '../components/Hero';
import ProjectsSection from '../components/ProjectsSection';

const Home = () => (
  <main className="main-content">
    <section className="hero-section">
      <Hero />
    </section>
    <ProjectsSection />
  </main>
);

export default Home;