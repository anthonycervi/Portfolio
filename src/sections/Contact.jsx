"use client";
import SectionTitle from "../components/SectionTitle";

export default function Contact({ id }) {
  return (
    <section id={id} className="relative min-h-screen py-20">
      <div className="absolute inset-0 bg-[#fafafa] -z-10" aria-hidden="true" />

      <div
        className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8"
        style={{
          marginLeft: "calc(var(--rail-left) + var(--content-gap, 1px))",
        }}
      >
        <SectionTitle>Contact</SectionTitle>
        <p className="mt-4 text-[#4b4b4b]">
          Reach out for collaborations, freelance, or full-time opportunities.
        </p>

        <form className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            className="bg-white ring-1 ring-[#d9d9d9] rounded-lg px-4 py-3 outline-none focus:ring-[#89BE57]"
            placeholder="Your name"
          />
          <input
            className="bg-white ring-1 ring-[#d9d9d9] rounded-lg px-4 py-3 outline-none focus:ring-[#89BE57]"
            placeholder="Email"
            type="email"
          />
          <textarea
            className="sm:col-span-2 bg-white ring-1 ring-[#d9d9d9] rounded-lg px-4 py-3 min-h-[140px] outline-none focus:ring-[#89BE57]"
            placeholder="Message"
          />
          <button
            type="submit"
            className="sm:col-span-2 inline-flex justify-center rounded-xl bg-[#89BE57] hover:bg-[#6fa34a] px-5 py-3 font-semibold text-white"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}