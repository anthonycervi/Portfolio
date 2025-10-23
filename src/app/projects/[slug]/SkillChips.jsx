"use client";

export default function SkillChips({ skills }) {
  const colors = ["#FDCA0E", "#FC5649", "#6495ED", "#89BE57"];

  return (
    <div className="flex flex-wrap gap-3 max-w-[900px]">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="px-4 py-2 rounded-md bg-gray-200 text-gray-900 font-medium transition-all duration-300 hover:text-white"
          onMouseEnter={(e) => {
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            e.target.style.background = randomColor;
            e.target.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "#e5e7eb";
            e.target.style.transform = "scale(1)";
          }}
        >
          {skill}
        </span>
      ))}
    </div>
  );
}