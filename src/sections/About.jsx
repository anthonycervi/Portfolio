"use client";
import { useState } from "react";
import SectionTitle from "../components/SectionTitle";

const SKILL_CATEGORIES = {
  Development: [
    "HTML",
    "CSS",
    "JavaScript",
    "jQuery",
    "React",
    "React Native",
    "Next.js",
    "SASS",
    "WordPress",
    "Elementor",
    "Node.js",
    "Xcode",
    "Android Studio",
  ],
  Design: [
    "Figma",
    "Axure",
    "Photoshop",
    "Illustrator",
    "Premier Pro",
    "XD",
    "After Effects",
    "Procreate",
    "InVision",
    "Webflow",
    "Balsamiq",
    "Nomad Sculpt",
    "Chief Architect",
    "Squarespace",
  ],
};

const COLORS = ["#FDCA0E", "#FC5649", "#6495ED", "#89BE57"];

function SkillChip({ label }) {
  const [hoverColor, setHoverColor] = useState(null);

  const handleMouseEnter = () => {
    const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];
    setHoverColor(randomColor);
  };

  const handleMouseLeave = () => {
    setHoverColor(null);
  };

  return (
    <span
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="cursor-pointer rounded-md px-4 py-2 text-base font-medium transition-colors duration-200"
      style={{
        backgroundColor: hoverColor ? hoverColor : "#e5e7eb", // gray-200 default
        color: hoverColor ? "#fff" : "#1f2937", // white on hover, gray-800 default
      }}
    >
      {label}
    </span>
  );
}

export default function About({ id }) {
  return (
    <section id={id} className="relative min-h-screen py-20">
      {/* full-bleed background */}
      <div className="absolute inset-0 bg-white -z-10" aria-hidden="true" />

      {/* aligned content */}
      <div
        className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"
        style={{
          marginLeft: "calc(var(--rail-left) + var(--content-gap, 1px))",
        }}
      >
        {/* About content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          <div className="lg:col-span-2">
            <SectionTitle>About Me</SectionTitle>

            {/* Larger text + separated paragraphs */}
            <div className="mt-6 space-y-6 text-lg sm:text-xl leading-relaxed text-[#4b4b4b]">
              <p>
                I'm a graduate with a Diploma in Digital Design and Development
                and a Bachelor of Business Administration degree.
              </p>

              <p>
                With a keen eye for aesthetics and a love for innovation, I
                thrive on crafting engaging digital experiences. I embrace
                challenges, continuously learn, and bring a dynamic energy to
                every project.
              </p>

              <p>
                When I'm not immersed in work or studies, you'll often find me
                involved in sports, both playing and watching, or indulging in
                personal creative projects like woodworking, ceramics, and
                digital design.
              </p>
            </div>

            {/* Quick highlight list */}
            
          </div>

          <div className="rounded-2xl bg-white ring-1 ring-[#d9d9d9] aspect-square shadow-sm" />
        </div>

        {/* Skills Section */}
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {Object.entries(SKILL_CATEGORIES).map(([category, skills]) => (
              <div key={category} className="space-y-5">
                <h3 className="text-gray-600 font-semibold text-xl">{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <SkillChip key={skill} label={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}