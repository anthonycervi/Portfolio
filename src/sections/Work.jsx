"use client";
import { useState } from "react";
import Link from "next/link";
import SectionTitle from "../components/SectionTitle";
import projects from "../app/projects/projectsData"; // centralized project data

// Default settings for green squares
const DEFAULT_DOT_SIZE = 40; // 👈 default size in px
const DEFAULT_DOT_POSITION = {
  top: "10%",   // 👈 near top
  right: "-20px" // 👈 hangs halfway off right side
};

export default function Work({ id }) {
  const [transform, setTransform] = useState({});

  const handleMouseMove = (e, i) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = (y / rect.height - 0.5) * -40;
    const rotateY = (x / rect.width - 0.5) * 40;

    setTransform((prev) => ({
      ...prev,
      [i]: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    }));
  };

  const handleMouseLeave = (i) => {
    setTransform((prev) => ({
      ...prev,
      [i]: `rotateX(0deg) rotateY(0deg)`,
    }));
  };

  return (
    <section id={id} className="relative min-h-screen py-40">
      {/* background */}
      <div className="absolute inset-0 bg-[#f9f8f3] -z-10" aria-hidden="true" />

      {/* container aligned with rail */}
      <div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        style={{
          marginLeft: "calc(var(--rail-left) + var(--content-gap, 1px))",
        }}
      >
        <SectionTitle>Selected Work</SectionTitle>
        <p className="text-[#4b4b4b] mb-10">A few projects I loved building.</p>

        {/* project cards */}
        <div className="grid grid-cols-1 gap-16">
          {projects.map((project, i) => {
            // Merge defaults with project overrides
            const dotSize = project.dotSize || DEFAULT_DOT_SIZE;
            const dotPosition = project.dotPosition || DEFAULT_DOT_POSITION;

            return (
              <Link key={project.slug} href={`/projects/${project.slug}`} passHref>
                <div
                  className="relative group max-w-xl w-full -ml-[10%] cursor-pointer"
                  style={{ perspective: "1600px" }}
                  onMouseMove={(e) => handleMouseMove(e, i)}
                  onMouseLeave={() => handleMouseLeave(i)}
                >
                  <div
                    className="relative"
                    style={{
                      transform:
                        transform[i] || "rotateX(0deg) rotateY(0deg) scale(1)",
                      transformStyle: "preserve-3d",
                      transition: "transform 0.25s ease-out",
                    }}
                  >
                    <article
                      className="relative overflow-hidden bg-white ring-1 ring-[#d9d9d9] shadow-xl"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="aspect-video object-cover"
                      />
                    </article>

                    {/* Overlay content (title block, left side) */}
                    <div
                      className="absolute bottom-12 -left-20 flex flex-col items-start space-y-3"
                      style={{
                        transform: "translateZ(140px) scale(0.9)",
                      }}
                    >
                      <h3 className="text-2xl font-extrabold text-[#2f2f2f]">
                        {project.title}
                      </h3>
                      <div className="w-44 h-[4px] bg-[#2f2f2f]" />
                      <div className="flex items-center space-x-2">
                        <span className="text-base font-semibold text-[#2f2f2f] opacity-50">
                          Case Study
                        </span>
                        <span
                          className="transform transition-transform duration-200 group-hover:translate-x-6 text-[#2f2f2f] opacity-50"
                          aria-hidden="true"
                        >
                          →
                        </span>
                      </div>
                    </div>

                    {/* Green square OR image (absolute, top-right, with z-axis) */}
                    {project.dotImage ? (
                      <img
                        src={project.dotImage}
                        alt="project icon"
                        style={{
                          position: "absolute",
                          ...dotPosition, // 👈 relative to card
                          width: dotSize,
                          height: dotSize,
                          transform: "translateZ(140px) scale(0.9)", // 👈 adds depth
                        }}
                      />
                    ) : (
                      <div
                        className="bg-[#89BE57] absolute"
                        style={{
                          ...dotPosition, // 👈 relative to card
                          width: dotSize,
                          height: dotSize,
                          transform: "translateZ(140px) scale(0.9)", // 👈 adds depth
                        }}
                      />
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}