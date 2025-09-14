import ProjectCard from '../../components/ProjectCard';
import { projects } from '../projectsData';

export default function Projects() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-10 text-center">Projects</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            title={project.title}
            description={project.description}
            link={`/projects/${project.slug}`}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
}