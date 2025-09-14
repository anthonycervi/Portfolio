import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import { projects } from './projectsData';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 container mx-auto px-6 py-12">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Hi, I'm Anthony Cervi</h1>
          <p className="text-gray-700 text-lg">UX/UI Designer & Front-End Developer</p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-8">Projects</h2>
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
        </section>
      </main>
      <Footer />
    </div>
  );
}