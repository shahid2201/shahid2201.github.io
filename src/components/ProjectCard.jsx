import React, { useRef, useEffect, useState } from "react";
import './ProjectCard.css';

const ProjectCard = ({ children, title, description, image, ...props }) => {
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

  // Detect mobile
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  return (
    <div
      ref={ref}
      className={`project-card${visible ? " visible" : ""}`}
      {...props}
    >
      <div className="project-image-container">
        <img src={image} alt={title} className="project-image" />
        {!isMobile && (
          <div className="project-overlay">
            <div className="project-description">{description}</div>
          </div>
        )}
      </div>
      <div className="project-title">{title}</div>
      {isMobile && <div className="project-divider"></div>}
      {isMobile && (
        <div className="project-description">{description}</div>
      )}
      {children}
    </div>
  );
};

export default ProjectCard;