import { projects } from '../../projectsData';
import Image from 'next/image';

export default function Project({ params }) {
  const project = projects.find(p => p.slug === params.slug);

  if (!project) return <p>Project not found.</p>;

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p className="mb-6">{project.description}</p>
      {project.image && (
        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={400}
          className="rounded-lg mt-4"
        />
      )}
    </div>
  );
}