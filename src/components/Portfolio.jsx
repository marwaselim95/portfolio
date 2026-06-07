import ProjectCard from './ProjectCard';
import './Portfolio.css';

const defaultProjects = [
  {
    image: '/images/lex.png',
    title: 'LexiFlow',
    description:
      'A neuroscience-based language acquisition app utilizing implicit learning methodology.',
    techStack: ['React', 'TypeScript', 'PWA'],
    url: 'https://github.com',
  },
  {
    image: '/images/projectgym.png',
    title: 'GYM progress tracking system',
    description:
      'A comprehensive analytics dashboard for GYM operations.',
    techStack: ['HTML', 'CSS', 'JS'],
    url: 'https://hyper-engine-six.vercel.app/',
  },
  {
    image: '/images/RFT.png',
    title: 'Relational Logic training',
    description:
      'Relational logic training webapplication using SMART training.',
    techStack: ['HTML', 'CSS', 'JS', 'React'],
    url: 'https://rft-training.vercel.app/',
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
            url={project.url}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
