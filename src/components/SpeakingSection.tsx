"use client";

import { motion } from "framer-motion";

function SpeakingIntro() {
  return (
    <>
      <p className="mb-2 font-body text-sm font-medium uppercase tracking-[0.15em] text-[var(--storia-darkgreen)]">
        Speaking
      </p>

      <div className="mt-14 grid grid-cols-1 items-center gap-12 lg:grid-cols-[45%_55%] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-[380px] max-w-full"
          style={{
            aspectRatio: "4 / 5",
            borderRadius: 8,
            background: "var(--storia-coffee)",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.1)",
          }}
          aria-hidden
        />

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <p
            className="font-display font-light text-[var(--storia-black)]"
            style={{
              fontSize: "2.2rem",
              lineHeight: 1.2,
              marginBottom: 24,
            }}
          >
            Sought-after speaker
          </p>

          <p className="font-body text-base font-light leading-[1.8] text-[var(--storia-black75)]">
            Elizabeth Uviebinené is a sought-after public speaker and has
            delivered talks and workshops to numerous organisations, such as
            Facebook, Google, Bumble, Spotify and more.
          </p>
          <p className="mt-4 font-body text-base font-light leading-[1.8] text-[var(--storia-black75)]">
            {`Elizabeth Uviebinené's talks inspire, empower and educate, leaving
            audiences with new perspectives on class, politics, feminism,
            racism, and how they intersect.`}
          </p>
        </motion.div>
      </div>
    </>
  );
}

export default function SpeakingSection() {
  return (
    <section
      id="speaker"
      style={{
        background: "var(--storia-beige)",
        padding: "120px 8vw 0",
      }}
    >
      <SpeakingIntro />
    </section>
  );
}
