import './ProjectCard.css';

export default function ProjectCard({
  image,
  title,
  description,
  techStack = [],
  index = 0,
}) {
  return (
    <article
      className="project-card"
      style={{ animationDelay: `${index * 0.15}s` }}
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
  );
}
