"use client";
import React from "react";
import SectionTitle from "../components/SectionTitle";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutContinue({ id }) {
  return (
    <section id={id} className="relative pt-24 pb-40">
      {/* full-bleed background */}
      <div
        className="absolute inset-0 bg-[#fafafa] -z-10"
        aria-hidden="true"
      />

      {/* inner container aligned with rail */}
      <motion.div
        className="mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8 relative flex flex-col justify-center"
        style={{
          marginLeft: "calc(var(--rail-left) + var(--content-gap, 1px))",
        }}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="flex items-baseline justify-between gap-3"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionTitle>Let's get in touch.</SectionTitle>
          <Image
            src="/envelope.svg"
            alt="Envelope Icon"
            width={26}
            height={26}
            className="relative top-[2px] shrink-0"
          />
        </motion.div>

        <motion.p
          className="mt-4 text-[#4b4b4b] text-xl font-medium leading-relaxed"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          I’m always up for a virtual coffee and a chat — just drop me a line and we’ll set something up. Alternatively if you email, I promise I’ll reply.
        </motion.p>

        <motion.form
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <input
            className="bg-white ring-1 ring-[#d9d9d9] rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-[#89BE57]"
            placeholder="Your name"
          />
          <input
            className="bg-white ring-1 ring-[#d9d9d9] rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-[#89BE57]"
            placeholder="Email"
            type="email"
          />
          <textarea
            className="sm:col-span-2 bg-white ring-1 ring-[#d9d9d9] rounded-md px-4 py-3 min-h-[140px] outline-none focus:ring-2 focus:ring-[#89BE57]"
            placeholder="Message"
          />
          <button
            type="submit"
            className="sm:col-span-2 inline-flex justify-center rounded-md bg-[#89BE57] hover:bg-[#6fa34a] px-5 py-3 font-semibold text-white"
          >
            Send message
          </button>
        </motion.form>
      </motion.div>
    </section>
  );
}