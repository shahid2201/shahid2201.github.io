import React from 'react';
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

const ProjectsSection = () => (
  <section className="projects-section">
    <header>
      <h2>My Projects (A Showcase of Pure Genius!)</h2>
      <p>
        Behold, a collection of things I built with sheer creativity, caffeine, and occasional bursts of inspiration.
      </p>
    </header>
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
  </section>
);

export default ProjectsSection;