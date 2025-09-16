import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import { projects } from './projectsData';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      {/* Hero Section */}
      <main className="flex-1 container mx-auto px-6 py-16">
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">
            Hi, I&apos;m Anthony Cervi
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            UX/UI Designer & Front-End Developer
          </p>
        </section>

        {/* Projects Section */}
        <section>
          <h2 className="text-3xl font-semibold mb-8 text-center">Projects</h2>
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