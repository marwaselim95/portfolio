import { useEffect, useRef } from 'react';
import './ProjectCard.css';

export default function ProjectCard({
  image,
  title,
  description,
  techStack = [],
  url = '#',
  index = 0,
}) {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Trigger animation only when card scrolls into view
          card.style.animationDelay = `${index * 0.15}s`;
          card.classList.add('project-card--visible');
          observer.unobserve(card);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(card);
    return () => observer.disconnect();
  }, [index]);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card-link"
      aria-label={`View ${title} project`}
    >
      <article
        ref={cardRef}
        className="project-card"
        id={`project-card-${index}`}
      >
        <div className="project-card-image-wrapper">
          <img
            src={image}
            alt={title}
            className="project-card-image"
            loading="lazy"
          />
        </div>

        <div className="project-card-body">
          <h3 className="project-card-title">{title}</h3>
          <p className="project-card-description">{description}</p>

          {techStack.length > 0 && (
            <div className="project-card-tags">
              {techStack.map((tech) => (
                <span key={tech} className="project-card-tag">
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </a>
  );
}
