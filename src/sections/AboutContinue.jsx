"use client";
import React from "react";
import SectionTitle from "../components/SectionTitle";

export default function AboutContinue({ id }) {
  return (
    <section id={id} className="relative py-20">
      {/* full-bleed background */}
      <div className="absolute inset-0 bg-[#fafafa] -z-10" aria-hidden="true" />

      {/* inner container aligned with rail */}
      <div
        className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"
        style={{
          marginLeft: "calc(var(--rail-left) + var(--content-gap, 1px))",
          marginRight: "calc(var(--rail-right, var(--content-gap, 1px)))",
        }}
      >
        {/* Process Section */}
        <div className="mt-10 mb-4 ml-0">
          <h2 className="text-2xl font-semibold text-[#111] mb-6">
            About Me
          </h2>
          <p className="mt-4 text-[#4b4b4b] text-xl font-medium leading-relaxed mb-6">
          I’ve always liked making things, designing, building, or just figuring out how to make something work better. My dad once reminded me that when I got my first Xbox with Halo: Combat Evolved, I spent more time customizing my character than actually playing. That kind of sums me up. I’ve always cared about how things look and feel as much as how they function.
          </p>
          <p className="mt-4 text-[#4b4b4b] text-xl font-medium leading-relaxed">
          When I’m not working, I’m usually outside. I love skiing in the winter, long rides on my bike, and hiking new trails. I’m also big on sports, whether it’s watching a game or getting out to play. Those moments outside of design keep me curious and give me the balance I need to come back with fresh ideas.
          </p>
        </div>
      </div>
    </section>
  );
}