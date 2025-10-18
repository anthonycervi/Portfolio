"use client";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

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
      }, 30);
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
      }, 30);
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
  // Animation configs for each line
  const lines = [
    {
      key: "line1",
      content: (
        <h1 className="text-[24px] sm:text-4xl lg:text-5xl font-extrabold leading-tight text-[#2f2f2f]">
          Hi, my name is <span className="text-[#89BE57]">Anthony Cervi</span>
        </h1>
      ),
      maskColor: "#89BE57",
    },
    {
      key: "line2",
      content: (
        <h2 className="text-[20px] sm:text-3xl lg:text-4xl tracking-tight leading-tight mt-2 font-normal text-[#2f2f2f]">
          I design user-friendly digital{" "}
          <ScrambleWord words={WORDS} holdTime={2000} />
        </h2>
      ),
      maskColor: "#89BE57",
    },
    {
      key: "line3",
      content: (
        <p className="mt-6 text-lg sm:text-xl" style={{ color: "#999999" }}>
          Let me show you…
        </p>
      ),
      maskColor: "#999999",
    },
  ];

  // Mask animation variants: slide in from left (x: -100%), then slide out to right (x: 101%)
  const maskVariants = {
    initial: { x: "-100%" },
    visible: { x: "0%" },
    exit: { x: "101%" },
  };

  // Text animation variants: initially hidden (opacity 0), then visible (opacity 1)
  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  // Controls for each line's mask and text animations
  const controls = lines.map(() => ({
    mask: useAnimation(),
    text: useAnimation(),
  }));

  // Overlapping animation logic: trigger each line asynchronously with staggered starts
  React.useEffect(() => {
    const order = [0, 2, 1]; // line1, line3, line2
    order.forEach((idx, i) => {
      setTimeout(async () => {
        controls[idx].mask.start("visible");
        await new Promise((r) => setTimeout(r, 300));
        const maskExitPromise = controls[idx].mask.start("exit");
        const textFadePromise = controls[idx].text.start("visible");
        await Promise.all([maskExitPromise, textFadePromise]);
      }, i * 150);
    });
  }, []);

  return (
    <section id={id} className="relative min-h-screen flex items-center py-20">
      {/* full-bleed background */}
      <div className="absolute inset-0 bg-[#fafafa] -z-10" aria-hidden="true" />

      {/* inner container aligned with rail */}
      <div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        style={{ marginLeft: "calc(var(--rail-left) + var(--content-gap, 1px))" }}
      >
        {lines.map((line, idx) => (
          <div
            key={line.key}
            className="relative overflow-hidden"
            style={{ display: "block" }}
          >
            {/* Mask overlay */}
            <motion.div
              initial="initial"
              animate={controls[idx].mask}
              variants={maskVariants}
              transition={{
                duration: 0.3,
                ease: [0.77, 0, 0.175, 1],
              }}
              className="absolute inset-0 z-20"
              style={{
                background: line.maskColor,
                pointerEvents: "none",
                willChange: "transform",
              }}
            />
            {/* Reveal text */}
            <motion.div
              initial="hidden"
              animate={controls[idx].text}
              variants={textVariants}
              transition={{ duration: 0.2, ease: [0.77, 0, 0.175, 1] }}
              className="relative z-10"
              style={{ display: "block" }}
            >
              {line.content}
            </motion.div>
          </div>
        ))}
      </div>
      <motion.div
        whileHover={{ scale: 1.3, y: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="absolute bottom-6 right-8 text-2xl text-[#89BE57] cursor-pointer"
        onClick={() => {
          document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        ↓
      </motion.div>
    </section>
  );
}