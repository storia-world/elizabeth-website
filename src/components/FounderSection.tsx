"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import appOfTheDayBadge from "@/assets/images/appOfTheDay.png";
import storiaHomepage from "@/assets/images/storiaHomepage.png";

export default function FounderSection() {
  return (
    <section
      id="founder"
      style={{
        background: "var(--storia-beige)",
        padding: "120px 8vw",
      }}
    >
      <p className="mb-2 font-body text-sm font-medium uppercase tracking-[0.15em] text-[var(--storia-darkgreen)]">
        founder
      </p>

      <div className="mt-14 grid grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-[64px]">
        <div className="flex min-w-0 justify-center md:justify-start">
          <div className="mx-auto w-full max-w-[240px]">
            <Image
              src={storiaHomepage}
              alt="Storia app homepage on iPhone"
              width={storiaHomepage.width}
              height={storiaHomepage.height}
              className="h-auto w-full"
            />
          </div>
        </div>

        <motion.div
          className="min-w-0"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-body text-[1.05rem] font-light leading-[1.8] text-[var(--storia-black75)]">
            Elizabeth Uviebinené founded Storia, an award-winning wellbeing app
            helping people build healthier daily habits through journaling, mood
            check-ins and community.
          </p>
          <p className="mt-5 font-body text-[1.05rem] font-light leading-[1.8] text-[var(--storia-black75)]">
            Storia was featured as Apple's App of the Day — a testament to the
            team's commitment to building something genuinely useful and
            beautifully designed.
          </p>

          <div className="mt-10 flex justify-center" style={{ marginTop: 40 }}>
            <Image
              src={appOfTheDayBadge}
              alt="App Store App of the Day"
              width={appOfTheDayBadge.width}
              height={appOfTheDayBadge.height}
              className="h-auto w-[200px] max-w-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
