import ProjectCard from './ProjectCard';
import './Portfolio.css';

const defaultProjects = [
  {
    image: '/images/project1.png',
    title: 'LexiFlow',
    description:
      'A neuroscience-based language acquisition app utilizing implicit learning methodology.',
    techStack: ['React', 'TypeScript', 'PWA'],
  },
  {
    image: '/images/project2.png',
    title: 'ShopVista',
    description:
      'A comprehensive analytics dashboard for e-commerce operations with real-time sales tracking and inventory management.',
    techStack: ['Vue', 'Node.js', 'MongoDB'],
  },
  {
    image: '/images/project3.png',
    title: 'ConnectHub',
    description:
      'A modern social platform with real-time messaging, content sharing, and community engagement features.',
    techStack: ['React', 'GraphQL', 'PostgreSQL'],
  },
];

export default function Portfolio({ projects = defaultProjects }) {
  return (
    <section className="card portfolio" id="portfolio">
      <h2 className="section-heading">My Portfolio</h2>
      <p className="portfolio-subheading">A collection of my recent projects</p>

      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            image={project.image}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
