export default function AboutContinue({ id }) {
    return (
      <section id={id} className="relative min-h-screen py-20">
        {/* full-bleed background */}
        <div
          className="absolute inset-0 bg-[#fafafa] -z-10"
          aria-hidden="true"
        />
  
        {/* inner container aligned with rail */}
        <div
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          style={{ marginLeft: "calc(var(--rail-left) + var(--content-gap, 1px))" }}
        >
  
          {/* Process Section */}
          <div className="mt-10 mb-20 ml-0">
            <h2 className="text-2xl font-semibold text-[#111] mb-6">My Process</h2>
            <p className="text-lg text-[#555] max-w-3xl leading-relaxed mb-10">
              My approach to design is systematic yet creative - balancing research, strategy, and execution to build thoughtful, intuitive experiences that connect people to products.
            </p>
  
            <div
              className="relative flex flex-col items-start text-left mx-auto max-w-3xl w-full"
              style={{ marginLeft: "0", alignSelf: "center" }}
            >
              {/* Steps */}
              <div className="relative flex flex-col gap-3 leading-tight">
                <div className="relative flex items-start text-left gap-4 my-1">
                  <div>
                    <h3 className="text-lg font-semibold text-[#444] mb-1 uppercase">
                      <span className="text-[#6495ED]">1.</span> Discover
                    </h3>
                    <p className="text-lg text-[#555] max-w-none flex-1 whitespace-normal">Research user needs, market trends, and product goals to inform direction.</p>
                  </div>
                </div>
  
                <div className="relative flex items-start text-left gap-4 my-1">
                  <div>
                    <h3 className="text-lg font-semibold text-[#444] mb-1 uppercase">
                      <span className="text-[#6495ED]">2.</span> Define
                    </h3>
                    <p className="text-lg text-[#555] max-w-none flex-1 whitespace-normal">Synthesize insights into clear problem statements and design opportunities.</p>
                  </div>
                </div>
  
                <div className="relative flex items-start text-left gap-4 my-1">
                  <div>
                    <h3 className="text-lg font-semibold text-[#444] mb-1 uppercase">
                      <span className="text-[#6495ED]">3.</span> Ideate
                    </h3>
                    <p className="text-lg text-[#555] max-w-none flex-1 whitespace-normal">Brainstorm and prototype creative solutions through collaboration and iteration.</p>
                  </div>
                </div>
  
                <div className="relative flex items-start text-left gap-4 my-1">
                  <div>
                    <h3 className="text-lg font-semibold text-[#444] mb-1 uppercase">
                      <span className="text-[#6495ED]">4.</span> Design
                    </h3>
                    <p className="text-lg text-[#555] max-w-none flex-1 whitespace-normal">Craft high-fidelity interfaces grounded in accessibility and visual harmony.</p>
                  </div>
                </div>
  
                <div className="relative flex items-start text-left gap-4 my-1">
                  <div>
                    <h3 className="text-lg font-semibold text-[#444] mb-1 uppercase">
                      <span className="text-[#6495ED]">5.</span> Deliver
                    </h3>
                    <p className="text-lg text-[#555] max-w-none flex-1 whitespace-normal">Collaborate with developers to ensure seamless implementation and refinement.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          {/* Skills Section */}
          <h2 className="text-2xl font-semibold text-[#111] mb-6">Skills</h2>
          <p className="mt-6 text-lg text-[#555] max-w-3xl leading-relaxed mb-10">
            I bring together a diverse set of design and development tools to craft effective, scalable, and visually cohesive user experiences.
          </p>
  
          {/* Skill Chips */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-[900px]">
            {/* Design */}
            <div>
              <h3 className="text-base font-medium text-gray-400 uppercase mb-4">Design</h3>
              <div className="flex flex-wrap gap-3">
                {["Figma", "Axure", "Photoshop", "Illustrator", "Premier Pro", "XD", "After Effects", "Procreate", "InVision", "Webflow", "Balsamiq", "Nomad Sculpt", "Chief Architect", "Squarespace"].map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-md bg-gray-200 text-gray-900 font-medium transition-all duration-300 hover:text-white"
                    style={{
                      cursor: "default",
                      transition: "background 0.3s ease, transform 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      const colors = ["#FDCA0E", "#FC5649", "#6495ED", "#89BE57"];
                      const randomColor = colors[Math.floor(Math.random() * colors.length)];
                      e.target.style.background = randomColor;
                      e.target.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = "#e5e7eb";
                      e.target.style.transform = "scale(1)";
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
  
            {/* Development */}
            <div>
              <h3 className="text-base font-medium text-gray-400 uppercase mb-4">Development</h3>
              <div className="flex flex-wrap gap-3">
                {["HTML", "CSS", "JavaScript", "jQuery", "React", "React Native", "Next.js", "SASS", "WordPress", "Elementor", "Node.js", "Xcode", "Android Studio"].map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-md bg-gray-200 text-gray-900 font-medium transition-all duration-300 hover:text-white"
                    style={{
                      cursor: "default",
                      transition: "background 0.3s ease, transform 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      const colors = ["#FDCA0E", "#FC5649", "#6495ED", "#89BE57"];
                      const randomColor = colors[Math.floor(Math.random() * colors.length)];
                      e.target.style.background = randomColor;
                      e.target.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = "#e5e7eb"; // revert to gray-200
                      e.target.style.transform = "scale(1)";
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
  
          {/* Education Section */}
          <div className="mt-24">
            <h2 className="text-2xl font-semibold text-[#111] mb-6">Education</h2>
            <p className="text-lg text-[#555] max-w-3xl leading-relaxed mb-10">
            My education at BCIT wasn’t just about learning design tools or business frameworks, it was about learning how to build things that people truly connect with. That’s what still drives me today.
            </p>
            <div className="flex flex-row flex-wrap gap-6">
              <a
                href="https://www.bcit.ca/programs/digital-design-and-development-diploma-full-time-6515dipma/?gclsrc=aw.ds&gad_source=1&gad_campaignid=9160937985&gbraid=0AAAAADA1Hd10N5mhQFDZUvcj62OgTocao&gclid=Cj0KCQjw9czHBhCyARIsAFZlN8QACQtSb0vyoM5TRskKBug6IUKed9QO9Y4Y2MD_xRz6qdNiXxoXFF4aAngoEALw_wcB"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#3a3a3a] rounded-lg p-4 min-w-[420px] max-w-[420px] hover:bg-[#4a4a4a] transition-colors duration-200"
              >
                <div className="flex items-start gap-3">
                  <img
                    src="/diploma.svg"
                    alt="Diploma icon"
                    className="w-6 h-6 mt-1 opacity-100"
                    style={{ filter: "invert(57%) sepia(76%) saturate(745%) hue-rotate(192deg) brightness(95%) contrast(93%)" }}
                  />
                  <div>
                    <p className="text-[15px] font-bold text-[#f5f5f5]">
                      Digital Design and Development Diploma
                    </p>
                    <p className="text-sm text-[#bbb]">
                      British Columbia Institute of Technology
                    </p>
                  </div>
                </div>
              </a>
  
              <a
                href="https://www.bcit.ca/programs/bachelor-of-business-administration-bachelor-of-business-administration-full-time-part-time-9975bba/?gclsrc=aw.ds&gad_source=1&gad_campaignid=7987652143&gbraid=0AAAAADA1Hd0ib-017MDPras_bXCKdJq4b&gclid=Cj0KCQjw9czHBhCyARIsAFZlN8T1bRu_Wu_EaekpKfsBImKvOwIJvPfjRoNL9KAa9DvXHIBAM9ZJ73EaAhnkEALw_wcB"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#3a3a3a] rounded-lg p-4 min-w-[390px] max-w-[390px] hover:bg-[#4a4a4a] transition-colors duration-200"
              >
                <div className="flex items-start gap-3">
                  <img
                    src="/diploma.svg"
                    alt="Diploma icon"
                    className="w-6 h-6 mt-1 opacity-100"
                    style={{ filter: "invert(57%) sepia(76%) saturate(745%) hue-rotate(192deg) brightness(95%) contrast(93%)" }}
                  />
                  <div>
                    <p className="text-[15px] font-bold text-[#f5f5f5]">
                      Bachelor of Business Administration Degree
                    </p>
                    <p className="text-sm text-[#bbb]">
                      British Columbia Institute of Technology
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }