"use client";

import { useRef } from "react";

function parseRGBA(str) {
  // supports rgb(a) and hex — minimal parsing for our use case
  if (!str) return { r: 255, g: 255, b: 255, a: 0 };
  if (str.startsWith("rgb")) {
    const nums = str.match(/[\d.]+/g)?.map(Number) || [255, 255, 255, 0];
    const [r, g, b, a = 1] = nums;
    return { r, g, b, a };
  }
  // hex (#rrggbb or #rgb)
  if (str[0] === "#") {
    let hex = str.slice(1);
    if (hex.length === 3) hex = hex.split("").map((c) => c + c).join("");
    const int = parseInt(hex, 16);
    return { r: (int >> 16) & 255, g: (int >> 8) & 255, b: int & 255, a: 1 };
  }
  return { r: 255, g: 255, b: 255, a: 0 };
}

function relLuminance({ r, g, b }) {
  // WCAG relative luminance
  const srgb = [r, g, b].map((v) => v / 255);
  const lin = srgb.map((v) => (v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)));
  return 0.2126 * lin[0] + 0.7152 * lin[1] + 0.0722 * lin[2];
}

/**
 * Walk up from element until we find a non-transparent background color.
 * Returns {r,g,b,a} or null if none.
 */
function getEffectiveBackground(el) {
  let cur = el;
  while (cur && cur !== document.documentElement) {
    const cs = getComputedStyle(cur);
    const bgImg = cs.backgroundImage;
    const bgCol = cs.backgroundColor;
    // Prefer solid color if present
    if (bgCol && bgCol !== "rgba(0, 0, 0, 0)" && bgCol !== "transparent") {
      const c = parseRGBA(bgCol);
      if (c.a > 0) return c;
    }
    // If there is a gradient image, we can't sample it directly; assume it's dark-ish if the color is transparent.
    if (bgImg && bgImg !== "none") {
      // Heuristic: treat gradient as “has background”; fall back to body's bg for luminance.
      const bodyCol = parseRGBA(getComputedStyle(document.body).backgroundColor);
      return bodyCol;
    }
    cur = cur.parentElement;
  }
  return parseRGBA(getComputedStyle(document.body).backgroundColor);
}

export default function TopNav({ sections, active, onJump, showNav }) {
  const navRef = useRef(null);

  const textColor = "#6a6a6a";
  const hoverActiveColor = "#5a5a5a";
  const activeColor = "#89BE57";
  const logoColor = "#89BE57";

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-[60] hidden md:block transition-transform duration-500 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{ background: "transparent" }}
    >
      <div className="relative px-6 py-4">
        <div className="flex items-center justify-between w-full">
          {/* Logo (brand green; not inverted) */}
          <button
            onClick={() => onJump("start")}
            className="text-3xl sm:text-4xl font-extrabold tracking-wide cursor-pointer transform transition-transform duration-300 hover:scale-110"
            style={{ color: logoColor }}
          >
            CERVI
          </button>

          {/* Nav items (fixed color) */}
          <div
            className="flex space-x-6 text-lg font-bold"
            style={{ color: textColor }}
          >
            {sections.map((s) => {
              // Highlight "About" when active is "about" or "aboutcontinue" (case-insensitive)
              const activeLower = active.toLowerCase();
              const isActive =
                (activeLower === s.id.toLowerCase()) ||
                (s.label === "About" && (activeLower === "about" || activeLower === "aboutcontinue"));
              return (
                <button
                  key={s.id}
                  onClick={() => onJump(s.id)}
                  className={`cursor-pointer transition-colors duration-150 underline-offset-4 hover:underline hover:underline-offset-4 ${
                    isActive ? "hover:decoration-[#89BE57]" : "hover:decoration-[#6a6a6a]"
                  }`}
                  style={{
                    WebkitTapHighlightColor: "transparent",
                    color: isActive ? activeColor : textColor,
                  }}
                >
                  {s.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}