import projects from "../projectsData";
import ProjectPanel from "./ProjectPanel";
import SkillChips from "./SkillChips";

export default async function ProjectPage({ params }) {
  const { slug } = await params;
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
    <main className="min-h-screen flex flex-col md:flex-row bg-[#fafafa]">
      {/* Left: scrollable showcase with light background */}
      <div className="flex-1 overflow-y-auto p-6 md:p-12 space-y-0 text-[#2f2f2f] bg-[#fafafa]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 pt-12 md:pt-20 pb-24">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div>
              <h1 className="text-5xl font-bold text-[#2f2f2f] mb-4">{project.heroTitle || project.title}</h1>
              <p
                className="uppercase tracking-wide text-lg mb-4"
                style={{ color: project.roleColor || "#8AB266" }}
              >
                {project.roleText || "ROLE - DESIGNER"}
              </p>
              <p className="text-xl text-[#4b4b4b] max-w-xl">{project.description}</p>
            </div>
            <img
              src={project.heroImage || project.image}
              alt={project.title}
              className="object-cover"
              style={{
                width: project.heroImageWidth || project.heroImageSize || "225px",
                height: project.heroImageHeight || "auto",
                maxWidth: "100%",
                borderRadius: "8px",
              }}
            />
          </div>
          <hr className="border-t border-[#e0e0e0] max-w-[1200px] mx-auto px-6 md:px-12 mt-24 mb-0" />
        </div>

        <div className="max-w-[1200px] mx-auto px-6 md:px-12 space-y-20">
          {/* Key Skills */}
          <h2 className="text-2xl font-bold mb-4 mt-0">{project.skillsTitle || "Key Skills"}</h2>
          <p className="uppercase text-gray-400 mb-6 tracking-wide">{project.skillsSubtitle || "TOOLS & SKILLS USED"}</p>

          <SkillChips skills={project.skillsList || ["Figma", "Photoshop", "Illustrator", "InVision"]} />

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