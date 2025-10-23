"use client";
import React from "react";
import SectionTitle from "../components/SectionTitle";
import Image from "next/image";

export default function AboutContinue({ id }) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert("Message sent successfully!");
        e.target.reset();
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <section id={id} className="relative pt-24 pb-40">
      {/* full-bleed background */}
      <div
        className="absolute inset-0 bg-[#fafafa] -z-10"
        aria-hidden="true"
      />

      {/* inner container aligned with rail */}
      <div
        className="mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8 relative flex flex-col justify-center"
        style={{
          marginLeft: "calc(var(--rail-left) + var(--content-gap, 1px))",
        }}
      >
        <div
          className="flex items-baseline justify-between gap-3"
        >
          <SectionTitle>Let's get in touch.</SectionTitle>
          <Image
            src="/envelope.svg"
            alt="Envelope Icon"
            width={26}
            height={26}
            className="relative top-[2px] shrink-0"
          />
        </div>

        <p
          className="mt-4 text-[#4b4b4b] text-xl font-medium leading-relaxed"
        >
          I’m always up for a virtual coffee and a chat — just drop me a line and we’ll set something up. Alternatively if you email, I promise I’ll reply.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <input
            name="name"
            className="bg-white ring-1 ring-[#d9d9d9] rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-[#89BE57]"
            placeholder="Your name"
          />
          <input
            name="email"
            className="bg-white ring-1 ring-[#d9d9d9] rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-[#89BE57]"
            placeholder="Email"
            type="email"
          />
          <textarea
            name="message"
            className="sm:col-span-2 bg-white ring-1 ring-[#d9d9d9] rounded-md px-4 py-3 min-h-[140px] outline-none focus:ring-2 focus:ring-[#89BE57]"
            placeholder="Message"
          />
          <button
            type="submit"
            className="sm:col-span-2 inline-flex justify-center rounded-md bg-[#89BE57] hover:bg-[#6fa34a] px-5 py-3 font-semibold text-white"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}