"use client";
import { useState } from "react";
import Link from "next/link";
import projects from "../app/projects/projectsData";
import { motion } from "framer-motion";

const DEFAULT_DOT_SIZE = 40;
const DEFAULT_DOT_POSITION = { top: "10%", right: "-20px" };

const mapRange = (value, inMin, inMax, outMin, outMax) =>
  ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;

export default function Work({ id }) {
  const [transform, setTransform] = useState({});
  const [lightPos, setLightPos] = useState({});

  const handleMouseMove = (e, i) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Inverted tilt (leans toward mouse)
    const rotateX = (y / rect.height - 0.5) * 40;
    const rotateY = (x / rect.width - 0.5) * -40;

    setTransform((prev) => ({
      ...prev,
      [i]: { rotateX, rotateY, scale: 1.05, translateZ: 25, hovering: true },
    }));

    const shineX = mapRange(rotateY, -20, 20, 100, 0);
    const shineY = mapRange(rotateX, -20, 20, 0, 100);

    setLightPos((prev) => ({ ...prev, [i]: { x: shineX, y: shineY } }));
  };

  const handleMouseLeave = (i) => {
    setTransform((prev) => ({
      ...prev,
      [i]: { rotateX: 0, rotateY: 0, scale: 1, translateZ: 0, hovering: false },
    }));

    setLightPos((prev) => {
      const updated = { ...prev };
      delete updated[i];
      return updated;
    });
  };

  return (
    <section id={id} data-bg="dark" className="relative min-h-screen py-30">
      <div
        className="absolute inset-0 -z-10"
        style={{ backgroundColor: "#181818" }}
        aria-hidden="true"
      />
      <div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        style={{ marginLeft: "calc(var(--rail-left) + var(--content-gap, 1px))" }}
      >
        <div className="flex items-baseline gap-3 mb-2">
          <h2 className="text-3xl font-extrabold text-gray-100">Selected work</h2>
        </div>
        <p className="mb-10" style={{ color: "#999999" }}>
          A few projects I loved building.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12"
        >
          {projects.map((project, i) => {
            const dotSize = project.dotSize || DEFAULT_DOT_SIZE;
            const dotPosition = project.dotPosition || DEFAULT_DOT_POSITION;
            const pos = lightPos[i] || { x: 50, y: 50 };

            const isRightCol = i % 2 === 1;
            const offsetY = isRightCol ? "md:mt-[25%]" : "";

            const t = transform[i] || { rotateX: 0, rotateY: 0, scale: 1, translateZ: 0, hovering: false };

            return (
              <Link key={project.slug} href={`/projects/${project.slug}`} passHref>
                <motion.div
                  className={`relative group max-w-md w-full cursor-pointer -translate-x-25 ${offsetY}`}
                  style={{ perspective: "800px" }}
                  onMouseMove={(e) => handleMouseMove(e, i)}
                  onMouseLeave={() => handleMouseLeave(i)}
                >
                  <div
                    className="relative"
                    style={{
                      transform: `rotateX(${t.rotateX}deg) rotateY(${t.rotateY}deg) translateZ(${t.translateZ}px) scale(${t.scale})`,
                      transformStyle: "preserve-3d",
                      transition: "transform 0.08s ease-out",
                    }}
                  >
                    {/* floor shadow only at bottom */}
                    {t.hovering && (
                      <div
                        className="absolute left-0 right-0 bottom-[-20px] h-[40px] rounded-full pointer-events-none transition duration-75 ease-out"
                        style={{
                          zIndex: -1,
                          filter: "blur(18px)",
                          background: "rgba(0,0,0,0.4)",
                        }}
                      />
                    )}

                    <article className="relative overflow-hidden bg-[#222222] shadow-lg rounded-md" style={{ transformStyle: "preserve-3d" }}>
                      <img src={project.image} alt={project.title} className="aspect-video object-cover" />

                      {/* darker, more localized corner shadow */}
                      <div
                        className="absolute bottom-0 left-0 w-[130%] h-[130%] pointer-events-none"
                        style={{
                          background:
                            "radial-gradient(ellipse at bottom left, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.4) 25%, rgba(0,0,0,0.15) 40%, transparent 110%)",
                        }}
                      />

                      {/* shine layers */}
                      <div
                        className="absolute inset-0 pointer-events-none transition-opacity duration-700 ease-out"
                        style={{
                          opacity: lightPos[i] ? 1 : 0,
                          background: `radial-gradient(circle at ${pos.x}% ${pos.y}%, rgba(255,255,255,0.25), transparent 90%)`,
                          mixBlendMode: "screen",
                        }}
                      />
                      <div
                        className="absolute inset-0 pointer-events-none transition-opacity duration-700 ease-out"
                        style={{
                          opacity: lightPos[i] ? 1 : 0,
                          background: `radial-gradient(circle at ${100 - pos.x}% ${100 - pos.y}%, rgba(0,0,0,0.10), transparent 90%)`,
                          mixBlendMode: "multiply",
                        }}
                      />
                    </article>

                    {/* title block moved down a bit */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                      className="absolute bottom-5 -left-5 z-10"
                      style={{ transform: "translateZ(40px)", transformStyle: "preserve-3d", willChange: "transform" }}
                    >
                      <div className="flex flex-col items-start space-y-3">
                        <h3 className="text-2xl font-extrabold text-gray-100">{project.title}</h3>
                        <div className="w-44 h-[4px] bg-gray-100" />
                        <div className="flex items-center space-x-2">
                          <span className="text-base font-semibold" style={{ color: "#999999" }}>
                            {project.linkText || "Case Study"}
                          </span>
                          <span
                            className="transform transition-transform duration-150 group-hover:translate-x-8"
                            style={{ color: "#999999" }}
                            aria-hidden="true"
                          >
                            →
                          </span>
                        </div>
                      </div>
                    </motion.div>

                    {/* green square / dot replaced with dynamic image */}
                    {project.dotImage ? (
                      <img
                        src={project.dotImage}
                        alt={`${project.title} icon`}
                        className="absolute object-contain opacity-100 pointer-events-none rounded-full"
                        style={{
                          ...dotPosition,
                          width: dotSize,
                          height: dotSize,
                          transform: "translateZ(40px) scale(0.9)",
                          borderRadius: "10%",
                        }}
                      />
                    ) : (
                      <div
                        className="absolute bg-[#89BE57]"
                        style={{
                          ...dotPosition,
                          width: dotSize,
                          height: dotSize,
                          transform: "translateZ(40px) scale(0.9)",
                        }}
                      />
                    )}
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}