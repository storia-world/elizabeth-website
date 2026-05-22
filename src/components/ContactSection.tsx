"use client";

import { motion } from "framer-motion";
import { Mail, Link, Share2 } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="px-6 py-24">
      <div id="press" className="h-px" aria-hidden />
      <div className="mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 font-body text-sm font-medium uppercase tracking-[0.15em] text-[var(--storia-darkgreen)]">
            Contact
          </p>
          <h2 className="font-display text-4xl font-light text-[var(--storia-black)] md:text-5xl">
            {"Let's connect"}
          </h2>
          <p className="mt-4 font-body text-base font-light text-[var(--storia-black75)]">
            For speaking inquiries, press, or collaborations — reach out below.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="mailto:hello@elizabeth.com"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--storia-black15)] bg-[var(--storia-white)] px-6 py-3 font-body text-sm font-medium text-[var(--storia-black)] transition-shadow hover:shadow-md"
          >
            <Mail size={18} />
            hello@elizabeth.com
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--storia-black15)] text-[var(--storia-black75)] transition-colors hover:border-[var(--storia-darkgreen)] hover:text-[var(--storia-darkgreen)]"
          >
            <Link size={20} />
          </a>
          <a
            href="#"
            aria-label="Social"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--storia-black15)] text-[var(--storia-black75)] transition-colors hover:border-[var(--storia-darkgreen)] hover:text-[var(--storia-darkgreen)]"
          >
            <Share2 size={20} />
          </a>
        </motion.div>
      </div>

      <footer className="mx-auto mt-24 max-w-6xl border-t border-[var(--storia-black15)] pt-8 text-center">
        <p className="font-body text-xs text-[var(--storia-black40)]">
          © {new Date().getFullYear()} Elizabeth. All rights reserved.
        </p>
      </footer>
    </section>
  );
}
