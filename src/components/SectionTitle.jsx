export default function SectionTitle({ children }) {
    return (
      <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2f2f2f] mb-6">
        <span className="title-anchor">{children}</span>
      </h2>
    );
  }