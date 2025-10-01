export default function MobileHeader({ sections, active, onJump, open, setOpen, showNav }) {
    return (
      <header
        className={`fixed top-0 left-0 right-0 z-50 md:hidden overflow-hidden transition-transform duration-500 ${
          showNav ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div
          className="absolute inset-0"
          style={{
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
            maskImage:
              'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage:
              'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)',
          }}
        />
        <div className="relative flex items-center justify-between px-4 py-3">
          <div
            onClick={() => onJump('start')}
            className="text-2xl font-extrabold tracking-wide text-[#89BE57] cursor-pointer"
          >
            CERVI
          </div>
          <button
            aria-label="Menu"
            onClick={() => setOpen(!open)}
            className="h-10 w-10 rounded-xl bg-white/40 ring-1 ring-[#89BE57]/30 backdrop-blur flex flex-col items-center justify-center space-y-1.5"
          >
            <span className="w-6 h-0.5 bg-[#4b4b4b]" />
            <span className="w-6 h-0.5 bg-[#4b4b4b]" />
            <span className="w-6 h-0.5 bg-[#4b4b4b]" />
          </button>
        </div>
      </header>
    );
  }