'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import ResumeButton from './components/ResumeButton';
import MobileHeader from './components/MobileHeader';
import TopNav from './components/TopNav';
import PageRail from './components/PageRail';
import Hero from './sections/Hero';
import Work from './sections/Work';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './components/Footer';

const RAIL_BASE = 'calc(22% - 2rem)'; // where the rail sits
const GAP_PX = 1; // rail-to-content gap (kept for consistency if you use it elsewhere)

export default function PortfolioHome() {
  const sections = useMemo(
    () => [
      { id: 'start', label: 'Start' },
      { id: 'work', label: 'Work' },
      { id: 'about', label: 'About' },
      { id: 'contact', label: 'Contact' },
    ],
    []
  );

  const rootRef = useRef(null);
  const [active, setActive] = useState('start');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(0);
  const observers = useRef({});

  // section observer to highlight nav
  useEffect(() => {
    const opts = { root: null, rootMargin: '-45% 0px -45% 0px', threshold: 0 };
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(id));
      }, opts);
      obs.observe(el);
      observers.current[id] = obs;
    });
    return () => Object.values(observers.current).forEach((o) => o.disconnect());
  }, [sections]);

  // hide/show nav on scroll
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setShowNav(!(y > lastScrollY.current && y > 80));
      lastScrollY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMobileMenuOpen(false);
  };

  return (
    <div
      ref={rootRef}
      className="relative min-h-screen text-[#2f2f2f] overflow-x-hidden"
      style={{ '--rail-left': RAIL_BASE, '--content-gap': `${GAP_PX}px` }}
    >
      {/* Nav */}
      <MobileHeader
        sections={sections}
        active={active}
        onJump={scrollTo}
        open={mobileMenuOpen}
        setOpen={setMobileMenuOpen}
        showNav={showNav}
      />
      <TopNav
        sections={sections}
        active={active}
        onJump={scrollTo}
        showNav={showNav}
      />

      {/* Rail */}
      <PageRail
        sections={sections}
        active={active}
        containerRef={rootRef}
        railLeft="var(--rail-left)"
      />

      {/* Full-width sections (no global container here) */}
      <main>
        <Hero id="start" />
        <Work id="work" />
        <About id="about" />
        <Contact id="contact" />
        <Footer />
      </main>

      {/* Resume */}
      <ResumeButton />
    </div>
  );
}