import { useEffect, useState } from "react";

export default function PageRail({ sections, active, containerRef, railLeft }) {
  const [dotPositions, setDotPositions] = useState({});

  useEffect(() => {
    const update = () => {
      if (!containerRef.current) return;

      const rootTop =
        containerRef.current.getBoundingClientRect().top +
        (window.scrollY || document.documentElement.scrollTop);

      const newPositions = {};

      sections.forEach((s) => {
        const sectionEl = document.getElementById(s.id);
        if (!sectionEl) return;

        const titleEl =
          sectionEl.querySelector(".title-anchor, h1, h2") || sectionEl;

        const rect = titleEl.getBoundingClientRect();
        const pageTop =
          rect.top + (window.scrollY || document.documentElement.scrollTop);

        newPositions[s.id] = pageTop - rootTop + rect.height / 2;
      });

      setDotPositions(newPositions);
    };

    update();
    window.addEventListener("resize", update);
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update);
    };
  }, [sections, containerRef]);

  const dotValues = Object.values(dotPositions || {});
  const minDot = Math.min(...dotValues);

  return (
    <div
      className="absolute top-0 bottom-0 z-0 pointer-events-none"
      style={{ left: railLeft }}
    >
      {dotValues.length > 0 && (
        <div
          className="absolute w-[2px] bg-[#d9d9d9] rounded-full left-1/2 -translate-x-1/2"
          style={{ top: `${minDot}px`, bottom: 0 }}
        />
      )}

      {sections.map(
        (s) =>
          dotPositions[s.id] != null && (
            <div
              key={s.id}
              className="absolute"
              style={{
                top: `${dotPositions[s.id]}px`,
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div
                className="w-3 h-3 rounded-full border-2 border-[#f9f8f3]"
                style={{
                  backgroundColor: "#89BE57", // always green
                }}
              />
            </div>
          )
      )}
    </div>
  );
}