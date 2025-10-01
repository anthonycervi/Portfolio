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
  Other: ["Github", "Gitlab", "Netlify", "Vercel", "Trello", "Slack", "Command Line"],
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
      className="cursor-pointer rounded-md px-3 py-1 text-sm font-medium transition-colors duration-200"
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
            <p className="mt-4 text-[#4b4b4b] leading-relaxed">
              I’m a UI/UX designer and front-end developer focused on fast,
              user-centered products. I like clean systems, strong typography,
              and shipping.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-4 text-[#4b4b4b]">
              <li>Design Systems</li>
              <li>React / Next.js</li>
              <li>Tailwind CSS</li>
              <li>Product Strategy</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white ring-1 ring-[#d9d9d9] aspect-square shadow-sm" />
        </div>

        {/* Skills Section */}
        <div className="mt-20">
          <div className="flex items-center space-x-2 mb-8">
            <span className="w-4 h-4 bg-[#FC5649] rounded-sm" />
            <h2 className="text-2xl font-bold">Skills</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(SKILL_CATEGORIES).map(([category, skills]) => (
              <div key={category} className="space-y-4">
                <h3 className="text-gray-500 font-semibold">{category}</h3>
                <div className="flex flex-wrap gap-2">
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