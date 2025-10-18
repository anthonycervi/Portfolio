import { motion } from "framer-motion";

export default function ResumeButton() {
  return (
    <div className="fixed right-0 top-[40%] z-50 group">
      <a
        href="/AnthonyCerviResume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div
          className="relative bg-[#89BE57] rounded-tl-md rounded-bl-md h-28 w-12 group-hover:w-32
                     transition-all duration-300 ease-out flex items-center justify-center overflow-hidden origin-center"
        >
          {/* Resume Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="text-white font-semibold text-lg transform -rotate-90 translate-y-0.5 group-hover:rotate-0 group-hover:-translate-y-6 origin-center
                         transition-transform duration-700 ease-[cubic-bezier(0.45,1.4,0.4,1)] z-10"
            >
              Resume
            </span>
          </div>

          {/* Grey sliding section */}
          <div
            className="absolute bottom-0 left-0 w-full h-1/2 bg-[#f2f2f2] translate-y-full group-hover:translate-y-0
                       transition-transform duration-300 ease-out flex items-center justify-center"
          >
            <img
              src="/cloud-download-alt.svg"
              alt="Download Icon"
              className="w-6 h-6 object-contain opacity-80"
            />
          </div>
        </div>
      </a>
    </div>
  );
}