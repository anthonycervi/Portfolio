"use client";
import { motion, animate } from "framer-motion";
import { useEffect, useRef } from "react";

export default function ProjectPanel({ project, prev, next, currentIndex, total }) {
  if (!project) return null;

  const percent = ((currentIndex + 1) / total) * 100;

  // ---- Animated number (but bar & arrows stay static) ----
  const numberRef = useRef(null);
  useEffect(() => {
    if (!numberRef.current) return;
    const from = parseInt(numberRef.current.textContent || "1", 10) || 1;
    const to = currentIndex + 1;

    // Smooth number interpolation
    const controls = animate(from, to, {
      duration: 0.5,
      ease: "easeInOut",
      onUpdate: (latest) => {
        if (numberRef.current) {
          numberRef.current.textContent = String(Math.round(latest)).padStart(2, "0");
        }
      },
    });
    return () => controls.stop();
  }, [currentIndex]);

  // ---- Progress fill that animates from previous page's value (no reset to 0) ----
  const fillRef = useRef(null);
  useEffect(() => {
    const el = fillRef.current;
    if (!el) return;

    // Read previous percent (saved on last page)
    const prevPercentStr = sessionStorage.getItem("ac_progress_percent");
    const prevPercent = prevPercentStr ? parseFloat(prevPercentStr) : percent;

    // Set starting width to previous value
    el.style.transition = "none";
    el.style.width = `${prevPercent}%`;

    // Force reflow
    void el.offsetWidth;

    // Animate to the new value
    el.style.transition = "width 0.6s ease-in-out";
    el.style.width = `${percent}%`;

    // Save for next navigation
    sessionStorage.setItem("ac_progress_percent", String(percent));
  }, [percent]);

  return (
    <div className="md:w-[420px] md:sticky md:top-0 bg-[#181818] border-l border-[#2a2a2a] p-10 flex flex-col justify-between h-screen text-gray-100">
      {/* Top (animated) */}
      <div>
        {/* Home (static) */}
        <a
          href="/"
          className="mb-8 inline-flex items-center text-base font-semibold text-[#89BE57] hover:text-[#6c9c46] transition-colors"
        >
          <span className="mr-2">←</span> Home
        </a>

        {/* Hashtags (static chips above arrows) */}
        {project.tags && project.tags.length > 0 && (
          <div className="mb-6 flex flex-wrap gap-x-1 text-white/35 text-base font-semibold">
            {project.tags.map((tag, i) => (
              <span key={i}>
                #{tag}
                {i < project.tags.length - 1 && ','}
              </span>
            ))}
          </div>
        )}

        {/* Title (animate on page change) */}
        <motion.h1
          key={project.slug}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-3xl font-extrabold text-white"
        >
          {project.title}
        </motion.h1>

        {/* Description + Visit (animate on page change) */}
        <motion.div
          key={project.slug + "-desc"}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
          className="mt-6"
        >
          <p className="text-lg text-gray-300 leading-relaxed">{project.description}</p>

          {project.link && (
  <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-6 inline-block px-8 py-3 bg-[#89BE57] text-white text-base font-semibold rounded transition-transform duration-200 ease-out hover:scale-110 hover:bg-[#6c9c46]"
  >
    VISIT
  </a>
)}
        </motion.div>
      </div>

      {/* Bottom (static bar/arrows/number; bar eases between values without restarting) */}
      <div>
        {/* Arrows (static) */}
        <div className="flex justify-between items-center mb-6">
          <a
            href={`/projects/${prev.slug}`}
            className="text-2xl font-bold text-gray-400 hover:text-white transition-colors"
          >
            ←
          </a>
          <a
            href={`/projects/${next.slug}`}
            className="text-2xl font-bold text-gray-400 hover:text-white transition-colors"
          >
            →
          </a>
        </div>

        {/* Progress bar + animated number */}
        <div className="flex items-center">
          {/* Track */}
          <div className="flex-1 h-[6px] bg-white/20 relative overflow-hidden">
            {/* Fill */}
            <div ref={fillRef} className="absolute left-0 top-0 h-[6px] bg-white" />
          </div>

          {/* Animated number */}
          <div className="ml-3 w-8 text-right text-sm font-semibold text-white tabular-nums">
            <span ref={numberRef}>{String(currentIndex + 1).padStart(2, "0")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}