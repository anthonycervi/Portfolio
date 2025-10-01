export default function TopNav({ sections, active, onJump, showNav }) {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 hidden md:block overflow-hidden transition-transform duration-500 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div
        className="absolute inset-0"
        style={{
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)",
        }}
      />
      <div className="relative flex items-center justify-between px-6 py-4">
        {/* Logo (always green) */}
        <div
          onClick={() => onJump("start")}
          className="text-3xl sm:text-4xl font-extrabold tracking-wide text-[#89BE57] cursor-pointer transform transition-transform duration-300 hover:scale-110"
        >
          CERVI
        </div>

        {/* Nav items */}
        <div className="flex space-x-6 text-lg font-bold">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => onJump(s.id)}
              className={`transition-colors duration-200 ${
                active === s.id
                  ? "text-[#2f2f2f]" // active section = dark
                  : "text-gray-400 hover:text-[#2f2f2f]"
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