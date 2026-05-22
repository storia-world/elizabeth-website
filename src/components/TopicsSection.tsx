"use client";

import { motion } from "framer-motion";

const TOPICS = [
  "Reframing failure as data acquisition",
  "The art of storytelling",
  "Growth through vulnerability",
  "Considered risk-taking",
  "The power of connection",
  "Building healthier relationships in the workforce",
  "Promoting psychological safety",
  "Measuring the value of diversity",
];

export default function TopicsSection() {
  return (
    <div
      style={{
        background: "var(--storia-beige)",
        padding: "0 0 80px",
      }}
    >
      <div
        className="flex flex-col gap-10 lg:flex-row lg:items-start"
        style={{
          background: "var(--storia-blue50)",
          borderRadius: 20,
          margin: "0 4vw",
          padding: "80px 6vw",
        }}
      >
        <p
          className="shrink-0 whitespace-nowrap font-body font-medium uppercase tracking-[0.25em] text-[var(--storia-black50)] lg:mr-20 lg:pt-1"
          style={{ fontSize: "0.75rem" }}
        >
          TOPICS
        </p>

        <ul className="min-w-0 flex-1 list-none p-0 lg:mr-28 xl:mr-36">
          {TOPICS.map((topic, index) => (
            <motion.li
              key={topic}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              whileHover={{
                x: 6,
                color: "var(--storia-darkblue)",
              }}
              className="cursor-pointer border-b border-[var(--storia-black15)] py-[18px] font-display text-[1.3rem] font-semibold text-[var(--storia-black90)]"
            >
              {topic}
            </motion.li>
          ))}
        </ul>

        <div className="w-full shrink-0 lg:w-[240px]">
          <p className="mb-7 font-display text-[0.95rem] italic leading-[1.7] text-[var(--storia-black75)]">
            Elizabeth's keynotes and fireside chats are designed to inspire and
            empower, leaving audiences with a new perspective on failure,
            learning and growth.
          </p>
          <motion.button
            type="button"
            className="cursor-pointer rounded-full border-none bg-[var(--storia-black)] font-body text-sm font-medium tracking-[0.15em] text-white"
            style={{ padding: "14px 36px" }}
            whileHover={{
              backgroundColor: "var(--storia-darkblue)",
              scale: 1.02,
            }}
            whileTap={{ scale: 0.97 }}
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            ENQUIRE
          </motion.button>
        </div>
      </div>
    </div>
  );
}
