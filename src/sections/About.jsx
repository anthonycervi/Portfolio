"use client";
import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import Image from "next/image";

/** ---- Skills data ---- */
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
  const handleMouseLeave = () => setHoverColor(null);

  return (
    <span
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="cursor-pointer rounded-md px-4 py-2 text-base font-medium transition-colors duration-200"
      style={{
        backgroundColor: hoverColor ? hoverColor : "#e5e7eb", // gray-200
        color: hoverColor ? "#fff" : "#1f2937", // white on hover, gray-800 default
      }}
    >
      {label}
    </span>
  );
}

export default function About({ id }) {
  return (
    <section id={id} data-bg="light" className="relative pt-40">
      {/* light background */}
      <div className="absolute inset-0 bg-[#eaeaea] -z-10" aria-hidden="true" />

      {/* aligned content */}
      <div
        className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"
        style={{ marginLeft: "calc(var(--rail-left) + var(--content-gap, 1px))" }}
      >
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
          {/* Left content */}
          <div className="lg:w-1/2 w-full">
            <div className="flex items-baseline gap-3">
              <SectionTitle>Hi, I'm Anthony</SectionTitle>
            </div>

            {/* Intro */}
            <p className="mt-6 text-lg sm:text-xl leading-relaxed text-[#4b4b4b]">
              I specialize in creating visually captivating and functionally robust digital experiences.
            </p>
            {/* Resume button */}
            <a
              href="/AnthonyCervi_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-6 py-3 bg-[#89BE57] text-white font-semibold rounded-md hover:bg-[#77a84d] transition-colors"
            >
              Resume
            </a>
          </div>
          {/* Right card / visual placeholder */}
          <div className="flex justify-end lg:w-1/2 w-full">
            <Image
              src="/profilepic.webp"
              alt="Profile picture of Anthony Cervi"
              width={920}
              height={920}
              className="rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}