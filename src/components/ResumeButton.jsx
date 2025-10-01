export default function ResumeButton() {
  return (
    <a
      href="/AnthonyCerviResume.pdf" // update with your actual resume path
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-0 top-[40%] z-50
                 bg-[#89BE57] text-white font-semibold px-4 py-2
                 rounded-tl-md rounded-tr-md shadow-lg transform -rotate-90 origin-bottom-right
                 hover:bg-[#6fa34a] active:bg-[#5e8e3d] transition-colors duration-200"
    >
      Resume
    </a>
  );
}