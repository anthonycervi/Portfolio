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
    <section id={id} data-bg="light" className="relative min-h-screen py-20">
      {/* light background */}
      <div className="absolute inset-0 bg-[#fafafa] -z-10" aria-hidden="true" />

      {/* aligned content */}
      <div
        className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"
        style={{ marginLeft: "calc(var(--rail-left) + var(--content-gap, 1px))" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Left content */}
          <div className="lg:col-span-2">
            <div className="flex items-baseline gap-3">
              <Image
                src="/info.svg"
                alt="Info Icon"
                width={26}
                height={26}
                className="relative top-[2px] shrink-0"
              />
              <SectionTitle>About me</SectionTitle>
            </div>

            {/* Intro */}
            <p className="mt-6 text-lg sm:text-xl leading-relaxed text-[#4b4b4b]">
              I’m a product designer & front-end builder who loves turning
              complex problems into clear, usable interfaces. I care about the
              details—micro-interactions, motion, readable systems—and I ship.
            </p>

            {/* Snapshot */}
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="text-sm font-semibold tracking-wide uppercase text-[#6b7280]">
                  Snapshot
                </h3>
                <ul className="space-y-1 text-[#4b4b4b]">
                  <li>• Designer & builder (UI/UX + front-end)</li>
                  <li>• Seeking full-time roles</li>
                  <li>• Practical, detail-oriented, collaborative</li>
                </ul>
              </div>

              {/* Strengths */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold tracking-wide uppercase text-[#6b7280]">
                  Strengths
                </h3>
                <ul className="space-y-1 text-[#4b4b4b]">
                  <li>• Problem-solving with crisp, testable solutions</li>
                  <li>• Human-centered empathy from discovery to delivery</li>
                </ul>
              </div>
            </div>

            {/* Process */}
            <div className="mt-10 space-y-3">
              <h3 className="text-sm font-semibold tracking-wide uppercase text-[#6b7280]">
                How I work
              </h3>
              <ol className="space-y-2 text-[#4b4b4b]">
                <li>
                  <span className="font-semibold">1) Discover</span> — clarify
                  goals, risks, constraints; talk to users; map jobs-to-be-done.
                </li>
                <li>
                  <span className="font-semibold">2) Define</span> — synthesize
                  insights; frame the problem and success metrics.
                </li>
                <li>
                  <span className="font-semibold">3) Design</span> — low-fi →
                  hi-fi flows, systems, motion; iterate with tight feedback loops.
                </li>
                <li>
                  <span className="font-semibold">4) Deliver</span> — document
                  components, pair with engineering, measure outcomes, refine.
                </li>
              </ol>
            </div>

            {/* Values */}
            <div className="mt-10 space-y-3">
              <h3 className="text-sm font-semibold tracking-wide uppercase text-[#6b7280]">
                Values
              </h3>
              <ul className="space-y-1 text-[#4b4b4b]">
                <li>• Craft — sweat the details; make it feel inevitable.</li>
                <li>• Candor — clear, kind feedback makes work better.</li>
                <li>• Ownership — bias to action; leave work better than you found it.</li>
              </ul>
            </div>

            {/* Outside of work */}
            <div className="mt-10 space-y-3">
              <h3 className="text-sm font-semibold tracking-wide uppercase text-[#6b7280]">
                Outside of work
              </h3>
              <p className="text-[#4b4b4b]">
                I love skiing and cycling. I was raised on the slopes, hiking
                trails, and cycling big climbs. That balance of focused digital
                craft and outdoor challenge keeps my head clear and my work sharp.
              </p>
            </div>
          </div>

          {/* Right card / visual placeholder */}
          <div className="rounded-2xl bg-white ring-1 ring-[#d9d9d9] aspect-square shadow-sm" />
        </div>

        {/* Skills */}
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