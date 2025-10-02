"use client";
import { useState, useEffect } from "react";

const WORDS = ["interfaces", "experiences", "designs", "products"];

function ScrambleWord({ words, holdTime = 2000 }) {
  const [targetIndex, setTargetIndex] = useState(0);
  const [display, setDisplay] = useState(words[0]);
  const [lockedCount, setLockedCount] = useState(0);
  const [phase, setPhase] = useState("enter");

  const randomChar = () =>
    String.fromCharCode(97 + Math.floor(Math.random() * 26));

  useEffect(() => {
    let intervalId = null;
    let timeoutId = null;
    const target = words[targetIndex];

    if (phase === "enter") {
      setLockedCount(0);
      let frame = 0;
      let locked = 0;
      intervalId = setInterval(() => {
        frame++;
        if (frame % 1 === 0 && locked < target.length) {
          locked++;
          setLockedCount(locked);
        }
        const scrambled = target
          .split("")
          .map((ch, i) => (i < locked ? ch : randomChar()))
          .join("");
        setDisplay(scrambled);
        if (locked >= target.length) {
          clearInterval(intervalId);
          setLockedCount(target.length);
          setDisplay(target);
          setPhase("hold");
        }
      }, 40);
    }

    if (phase === "hold") {
      timeoutId = setTimeout(() => setPhase("exit"), holdTime);
    }

    if (phase === "exit") {
      let remaining = words[targetIndex].length;
      intervalId = setInterval(() => {
        remaining--;
        const scrambled = words[targetIndex]
          .split("")
          .map((ch, i) => (i < remaining ? ch : randomChar()))
          .join("");
        setDisplay(scrambled);
        setLockedCount(remaining);
        if (remaining <= 0) {
          clearInterval(intervalId);
          setTargetIndex((i) => (i + 1) % words.length);
          setPhase("enter");
        }
      }, 40);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [phase, targetIndex, words, holdTime]);

  return (
    <span
      className="relative inline-block rainbow-text"
      style={{
        display: "inline-flex",
        whiteSpace: "pre",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {display.split("").map((ch, i) => (
        <span
          key={i}
          style={{
            WebkitTextFillColor: i < lockedCount ? "transparent" : "#9ca3af",
          }}
        >
          {ch}
        </span>
      ))}
    </span>
  );
}

export default function Hero({ id }) {
  return (
    <section id={id} className="relative min-h-screen flex items-center py-20">
      {/* full-bleed background */}
      <div
        className="absolute inset-0 bg-[#f9f8f3] -z-10"
        aria-hidden="true"
      />

      {/* inner container aligned with rail */}
      <div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        style={{ marginLeft: "calc(var(--rail-left) + var(--content-gap, 1px))" }}
      >
        {/* First line */}
        <h1 className="text-[24px] sm:text-4xl lg:text-5xl font-extrabold leading-tight text-[#2f2f2f]">
          Hi, my name is <span className="text-[#89BE57]">Anthony Cervi</span>
        </h1>

        {/* Second line with scramble animation */}
        <h2 className="text-[20px] sm:text-3xl lg:text-4xl tracking-tight leading-tight mt-2 font-normal text-[#2f2f2f]">
          I design user-friendly digital{" "}
          <ScrambleWord words={WORDS} holdTime={2000} />
        </h2>

        <p className="mt-6 text-lg sm:text-xl text-gray-500 opacity-80">
  Let me show you…
</p>
      </div>
    </section>
  );
}