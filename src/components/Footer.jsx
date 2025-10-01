"use client";

export default function Footer() {
  return (
    <footer className="relative py-6 bg-[transparent]">
      {/* full-bleed background */}
      <div className="absolute inset-0 bg-[#f9f8f3] -z-10" aria-hidden="true" />

      {/* aligned container */}
      <div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        style={{ marginLeft: "calc(var(--rail-left) + var(--content-gap, 1px))" }}
      >
        <a
          href="https://www.linkedin.com/in/anthony-cervi/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity inline-block"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-black fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.1h.1c.5-1 1.8-2.1 3.7-2.1 4 0 4.9 2.6 4.9 6V24h-4v-7.9c0-1.9 0-4.3-2.6-4.3s-3 2-3 4.1V24h-4V8.5z" />
          </svg>
        </a>
      </div>
    </footer>
  );
}