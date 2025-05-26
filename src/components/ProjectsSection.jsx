import React, { useState, useRef, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import project1Img from '../assets/project1.jpeg';
import project2Img from '../assets/project2.jpeg';
import project3Img from '../assets/project3.jpeg';

const projects = [
  {
    title: 'Project One',
    description: 'Description of Project One',
    image: project1Img
  },
  {
    title: 'Project Two',
    description: 'Description of Project Two',
    image: project2Img
  },
  {
    title: 'Project Three',
    description: 'Description of Project Three',
    image: project3Img
  },
  {
    title: 'Project One',
    description: 'Description of Project One',
    image: project1Img
  },
  {
    title: 'Project Two',
    description: 'Description of Project Two',
    image: project2Img
  },
  {
    title: 'Project Three',
    description: 'Description of Project Three',
    image: project3Img
  },
    {
    title: 'Project One',
    description: 'Description of Project One',
    image: project1Img
  },
  {
    title: 'Project Two',
    description: 'Description of Project Two',
    image: project2Img
  },
  {
    title: 'Project Three',
    description: 'Description of Project Three',
    image: project3Img
  },
  {
    title: 'Project One',
    description: 'Description of Project One',
    image: project1Img
  },
  {
    title: 'Project Two',
    description: 'Description of Project Two',
    image: project2Img
  },
  {
    title: 'Project Three',
    description: 'Description of Project Three',
    image: project3Img
  }
];

const isMobile = () => window.matchMedia('(max-width: 768px)').matches;

const ProjectsSection = () => {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const mobile = isMobile();

  // Autoplay effect for mobile
  useEffect(() => {
    if (!mobile) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    }, 3500); // Change slide every 3.5 seconds
    return () => clearInterval(interval);
  }, [mobile]);

  const handlePrev = () => setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  const handleNext = () => setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));

  // Touch swipe handlers
  const onTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };
  const onTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    if (touchStartX.current - touchEndX.current > 50) handleNext();
    if (touchEndX.current - touchStartX.current > 50) handlePrev();
  };

  return (
    <section className="projects-section">
      <header>
        {mobile ? (
          <>
            <h2>My Cool Stuff</h2>
            <p>Swipe to explore!</p>
          </>
        ) : (
          <>
            <h2>My Projects (A Showcase of Pure Genius!)</h2>
            <p>
              Behold, a collection of things I built with sheer creativity, caffeine, and occasional bursts of inspiration.
            </p>
          </>
        )}
      </header>
      {mobile ? (
        <div
          className="project-carousel"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <button className="carousel-arrow left" onClick={handlePrev} aria-label="Previous project">‹</button>
          <div className="carousel-card-wrapper">
            <ProjectCard
              title={projects[current].title}
              description={projects[current].description}
              image={projects[current].image}
            />
          </div>
          <button className="carousel-arrow right" onClick={handleNext} aria-label="Next project">›</button>
          <div className="carousel-thumbnails">
            {projects.map((project, idx) => (
              <img
                key={idx}
                src={project.image}
                alt={project.title}
                className={`carousel-thumbnail${idx === current ? " active" : ""}`}
                onClick={() => setCurrent(idx)}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="project-list">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;