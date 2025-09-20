export default function Home() {
  return (
    <main className="flex flex-col md:flex-row items-start justify-center min-h-screen px-8 py-20 bg-white">
      {/* Left: Name */}
      <div className="flex-1 mb-10 md:mb-0">
        <h1 className="text-5xl font-extrabold leading-tight text-black">
          Anthony <br /> Cervi
        </h1>
      </div>

      {/* Right: Bio + Status */}
      <div className="flex-1 max-w-lg text-gray-900">
        <p className="text-lg mb-6">
          I’m Anthony, a UX/UI designer and front-end developer who loves
          creating intuitive and impactful digital experiences.
        </p>
        <hr className="border-gray-200 mb-6" />
        <p className="text-gray-500">
          My portfolio is under construction — while that’s happening, you can
          find me on{" "}
          <a
            href="https://www.linkedin.com/in/anthonycervi"
            className="underline hover:text-black transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          .
        </p>
      </div>
    </main>
  );
}