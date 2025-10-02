import projects from "../projectsData";

export async function generateMetadata({ params }) {
  const { slug } = await params;
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

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[currentIndex];

  if (!project) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#f9f8f3] p-10">
        <h1 className="text-2xl font-bold text-red-600">Project not found</h1>
      </main>
    );
  }

  const prev = projects[(currentIndex - 1 + projects.length) % projects.length];
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="min-h-screen bg-[#f9f8f3] text-[#2f2f2f] flex flex-col md:flex-row">
      {/* Left: scrollable showcase */}
      <div className="flex-1 overflow-y-auto p-6 md:p-12 space-y-16">
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

      {/* Right: fixed details panel */}
      <div className="md:w-[420px] md:sticky md:top-0 bg-white border-l border-[#e0e0e0] p-10 flex flex-col justify-between h-screen">
        <div>
          {/* Arrows */}
          <div className="flex justify-between items-center mb-8">
            <a
              href={`/projects/${prev.slug}`}
              className="text-2xl font-bold text-[#4b4b4b] hover:text-[#89BE57] transition-colors"
            >
              ←
            </a>
            <a
              href={`/projects/${next.slug}`}
              className="text-2xl font-bold text-[#4b4b4b] hover:text-[#89BE57] transition-colors"
            >
              →
            </a>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-6">
            {project.tags?.map((tag, i) => (
              <span
                key={i}
                className="text-sm font-medium bg-[#f9f8f3] border border-[#d9d9d9] text-[#4b4b4b] px-3 py-1 rounded"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl font-extrabold text-[#2f2f2f]">
            {project.title}
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg text-[#4b4b4b] leading-relaxed">
            {project.description}
          </p>

          {/* Visit button */}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block px-8 py-4 rounded-lg bg-[#89BE57] text-white text-lg font-semibold hover:bg-[#6c9c46] transition-colors"
            >
              VISIT
            </a>
          )}
        </div>

        {/* Prev/Next labels */}
        <div className="flex justify-between items-center mt-12 text-base font-medium text-[#4b4b4b]">
          <a href={`/projects/${prev.slug}`} className="hover:text-[#89BE57]">
            {prev.title}
          </a>
          <a href={`/projects/${next.slug}`} className="hover:text-[#89BE57]">
            {next.title}
          </a>
        </div>

        {/* Aesthetic progress bar */}
        <div className="mt-8">
          <div className="w-full h-[3px] bg-[#e0e0e0] relative rounded">
            <div
              className="absolute left-0 top-0 h-[3px] bg-[#89BE57] rounded transition-all"
              style={{
                width: `${((currentIndex + 1) / projects.length) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}