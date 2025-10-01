// src/components/SectionWrapper.jsx
export default function SectionWrapper({ id, children, className = "" }) {
  return (
    <div id={id} className={`max-w-6xl mx-auto px-6 ${className}`}>
      {children}
    </div>
  );
}