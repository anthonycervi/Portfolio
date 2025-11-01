"use client";
import React, { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import Image from "next/image";

export default function AboutContinue({ id }) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    setIsLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setIsSent(true);
        e.target.reset();
        setTimeout(() => setIsSent(false), 3000);
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  return (
    <section id={id} className="relative pt-25 pb-30">
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
          Ready to bring your ideas to life? Let's discuss your next project
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
          <input
            name="subject"
            className="sm:col-span-2 bg-white ring-1 ring-[#d9d9d9] rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-[#89BE57]"
            placeholder="Subject"
          />
          <textarea
            name="message"
            className="sm:col-span-2 bg-white ring-1 ring-[#d9d9d9] rounded-md px-4 py-3 min-h-[140px] outline-none focus:ring-2 focus:ring-[#89BE57]"
            placeholder="Message"
          />
          <button
            type="submit"
            disabled={isLoading || isSent}
            className={`sm:col-span-2 inline-flex items-center justify-center gap-4 rounded-md px-5 py-3 font-medium text-white text-lg cursor-pointer transition-all duration-300 ${
              isSent
                ? "bg-[#4caf50] scale-105"
                : isLoading
                ? "bg-[#6fa34a] opacity-80"
                : "bg-[#89BE57] hover:bg-[#6fa34a]"
            }`}
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : isSent ? (
              <>Sent!</>
            ) : (
              <>
                <Image
                  src="/paper-plane.svg"
                  alt="Send Icon"
                  width={20}
                  height={20}
                  className="shrink-0 invert brightness-0"
                />
                Send Message
              </>
            )}
          </button>
        </form>

        <div className="mt-16 flex justify-between items-start gap-20 w-full">
          <div className="w-1/2">
            <h3 className="text-[#2f2f2f] text-xl font-semibold tracking-wide">Contact Info</h3>
            <ul className="mt-4 space-y-2 text-[#4b4b4b] text-base font-medium">
              <li className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#e5e7eb] transition-colors duration-300">
                  <Image src="/envelope.svg" alt="Email Icon" width={16} height={16} className="shrink-0" />
                </div>
                <a href="mailto:contact@example.com" className="hover:text-[#89BE57] transition-colors duration-300">anthonycervi97@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#e5e7eb] transition-colors duration-300">
                  <Image src="/phone-flip.svg" alt="Phone Icon" width={16} height={16} className="shrink-0" />
                </div>
                <a href="tel:+1234567890" className="hover:text-[#89BE57] transition-colors duration-300">+1 (778) 990-1692</a>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#e5e7eb] transition-colors duration-300">
                  <Image src="/marker.svg" alt="Location Icon" width={16} height={16} className="shrink-0" />
                </div>
                <span>Vancouver BC, Canada</span>
              </li>
            </ul>
          </div>

          <div className="w-1/2">
            <h3 className="text-[#2f2f2f] text-xl font-semibold tracking-wide">Follow Me</h3>
            <div className="mt-2 flex items-center gap-4 text-[#4b4b4b] text-base justify-start">
              <a href="https://www.linkedin.com/in/anthony-cervi" target="_blank" rel="noopener noreferrer" className="hover:text-[#89BE57]">
                <div className="flex items-center justify-center w-8 h-8 rounded-md border border-[#0077B5] bg-[#0077B5] hover:border-[#0077B5] transition-all duration-300 hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="16" height="16">
                    <rect width="448" height="512" rx="15%" fill="#0077B5" />
                    <path fill="#fafafa" d="M100.28 448H7.4V148.9h92.88zm-46.44-340C24.28 108 0 83.7 0 53.9A53.9 53.9 0 0 1 53.84 0a53.9 53.9 0 0 1 53.84 53.9c0 29.8-24.28 54.1-53.84 54.1zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.27-79.2-48.3 0-55.7 37.7-55.7 76.6V448H158.5V148.9h89V196h1.3c12.4-23.6 42.7-48.3 87.8-48.3 94 0 111.3 61.9 111.3 142.3V448z"/>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}