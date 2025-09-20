export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 max-w-6xl w-full items-start">
        
        {/* Left Side - Name */}
        <div className="flex">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight tracking-tight">
            Anthony <br /> Cervi
          </h1>
        </div>

        {/* Right Side - Bio */}
        <div className="flex flex-col justify-start space-y-6 md:max-w-2xl lg:max-w-3xl">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-snug tracking-wide text-black">
            I’m Anthony, a UX/UI designer and front-end developer who loves
            creating intuitive and impactful digital experiences.
          </p>

          <hr className="my-6 border-gray-200" />

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-snug tracking-wide text-gray-400">
            My portfolio is under construction — while that’s happening, you can
            find me on{" "}
            <a
              href="https://www.linkedin.com/in/anthony-cervi/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-900"
            >
              LinkedIn
            </a>.
          </p>
        </div>

      </div>
    </main>
  );
}