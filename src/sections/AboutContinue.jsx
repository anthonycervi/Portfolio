"use client";
import React from "react";
import SectionTitle from "../components/SectionTitle";

export default function AboutContinue({ id }) {
  return (
    <section id={id} className="relative min-h-screen py-20">
      {/* full-bleed background */}
      <div
        className="absolute inset-0 bg-[#fafafa] -z-10"
        aria-hidden="true"
      />

      {/* inner container aligned with rail */}
      <div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        style={{ marginLeft: "calc(var(--rail-left) + var(--content-gap, 1px))" }}
      >
        {/* First line */}
        <SectionTitle>Skills</SectionTitle>
        <p className="mt-6 text-lg text-[#555] max-w-3xl leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </section>
  );
}