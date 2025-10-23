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
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        style={{
          marginLeft: "calc(var(--rail-left) + var(--content-gap, 1px))",
        }}
      >
        {/* Process Section */}
        <div className="mt-10 mb-20 ml-0">
          <h2 className="text-2xl font-semibold text-[#111] mb-6">
            About Me
          </h2>
          <p className="text-lg text-[#555] max-w-3xl leading-relaxed mb-10">
            My approach to design is systematic yet creative - balancing
            research, strategy, and execution to build thoughtful, intuitive
            experiences that connect people to products.
          </p>
        </div>
      </div>
    </section>
  );
}