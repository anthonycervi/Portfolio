export default function TopNav({ sections, active, onJump, showNav }) {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 hidden md:block overflow-hidden transition-transform duration-500 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Apply blending properly */}
      <div className="relative flex items-center justify-between px-6 py-4 mix-blend-difference text-black">
        {/* Logo */}
        <div
          onClick={() => onJump("start")}
          className="text-3xl sm:text-4xl font-extrabold tracking-wide cursor-pointer transform transition-transform duration-300 hover:scale-110"
        >
          CERVI
        </div>

        {/* Nav items */}
        <div className="flex space-x-6 text-lg font-bold">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => onJump(s.id)}
              className={`transition-all duration-200 hover:opacity-80 ${
                active === s.id ? "opacity-100" : "opacity-40"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}