import projects from "../projectsData";
import ProjectPanel from "./ProjectPanel";

export async function generateMetadata({ params }) {
  const { slug } = params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Anthony Cervi",
      description: "The requested project could not be found.",
    };
  }

  const imageUrl = project.preview || project.image;

  return {
    title: `${project.title} | Anthony Cervi`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Anthony Cervi`,
      description: project.description,
      images: [{ url: imageUrl, alt: project.title, width: 1200, height: 630 }],
      siteName: "Anthony Cervi Portfolio",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Anthony Cervi`,
      description: project.description,
      images: [imageUrl],
    },
  };
}

export default function ProjectPage({ params }) {
  const { slug } = params;
  const currentIndex = projects.findIndex((p) => p.slug === slug);

  if (currentIndex === -1) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#181818] p-10">
        <h1 className="text-2xl font-bold text-red-500">Project not found</h1>
      </main>
    );
  }

  const project = projects[currentIndex];
  const prev = projects[(currentIndex - 1 + projects.length) % projects.length];
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="min-h-screen flex flex-col md:flex-row">
      {/* Left: scrollable showcase with light background */}
      <div className="flex-1 overflow-y-auto p-6 md:p-12 space-y-16 text-[#2f2f2f] bg-[#f9f8f3]">
        <img
          src={project.image}
          alt={project.title}
          className="rounded-xl shadow-lg w-full"
        />

        <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
        <p className="text-lg text-[#4b4b4b] leading-relaxed">
          {project.description}
        </p>

        <h2 className="text-2xl font-bold mb-4">Process</h2>
        <p className="text-lg text-[#4b4b4b] leading-relaxed">
          Walkthrough of design and development process. You can expand this
          section with wireframes, design iterations, or technical details.
        </p>

        <h2 className="text-2xl font-bold mb-4">Outcome</h2>
        <p className="text-lg text-[#4b4b4b] leading-relaxed">
          Results, metrics, and learnings from the project. Showcase the impact
          your work had.
        </p>
      </div>

      {/* Right: fixed client panel with dark background */}
      <ProjectPanel
        project={project}
        prev={prev}
        next={next}
        currentIndex={currentIndex}
        total={projects.length}
      />
    </main>
  );
}