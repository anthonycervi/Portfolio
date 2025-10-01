"use client";
import { useState } from "react";
import SectionTitle from "../components/SectionTitle";

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
      <div className="absolute inset-0 bg-[#f9f8f3] -z-10" aria-hidden="true" />

      <div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        style={{
          marginLeft: "calc(var(--rail-left) + var(--content-gap, 1px))",
        }}
      >
        <SectionTitle>Selected Work</SectionTitle>
        <p className="text-[#4b4b4b] mb-10">A few projects I loved building.</p>

        <div className="grid grid-cols-1 gap-16">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="relative group max-w-xl w-full"
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
                  className="relative overflow-hidden rounded-2xl bg-white ring-1 ring-[#d9d9d9] shadow-xl"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="aspect-video bg-[#f1f0ea]" />
                </article>

                <div
                  className="absolute bottom-12 left-8 flex flex-col items-start space-y-2"
                  style={{
                    transform: "translateZ(140px) scale(0.9)",
                  }}
                >
                  <h3 className="text-xl font-bold text-[#2f2f2f]">
                    {i % 2 ? "Web App" : "UI/UX"}
                  </h3>
                  <div className="w-24 h-[4px] bg-[#89BE57] rounded-full" />
                  <p className="text-sm text-[#4b4b4b]">
                    Placeholder description for project {i + 1}.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}