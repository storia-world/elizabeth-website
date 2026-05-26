"use client";

import { motion } from "framer-motion";
import {
  TbBrandInstagram,
  TbBrandLinkedin,
  TbBrandTiktok,
  TbBrandX,
} from "react-icons/tb";
import type { IconType } from "react-icons";

const ICON_SIZE = 24;

const SOCIAL_LINKS: {
  label: string;
  href: string;
  Icon: IconType;
}[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/elizabethuviebinene/",
    Icon: TbBrandInstagram,
  },
  {
    label: "Tiktok",
    href: "https://www.tiktok.com/@elizabethuvie",
    Icon: TbBrandTiktok,
  },
  { label: "X", href: "https://x.com/lizuvie", Icon: TbBrandX },
  {
    label: "LinkedIn",
    href: "https://uk.linkedin.com/in/elizabeth-uviebinene",
    Icon: TbBrandLinkedin,
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--storia-coffee)",
        padding: "32px 8vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 20,
      }}
    >
      <p
        className="font-display text-center"
        style={{
          fontWeight: 400,
          fontSize: "2rem",
          color: "var(--storia-black)",
        }}
      >
        Keep in touch with me
      </p>

      <div style={{ display: "flex", gap: 32 }}>
        {SOCIAL_LINKS.map(({ label, href, Icon }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            initial={{ color: "var(--storia-gray)" }}
            whileHover={{ y: -3, color: "var(--storia-black)" }}
            style={{ display: "flex" }}
          >
            <Icon size={ICON_SIZE} aria-hidden />
          </motion.a>
        ))}
      </div>

      <p
        style={{
          fontFamily: "var(--font-body)",
          fontWeight: 300,
          fontSize: "0.75rem",
          color: "var(--storia-blackLight)",
        }}
      >
        © {new Date().getFullYear()} Elizabeth Uviebinené. All rights reserved.
      </p>
    </footer>
  );
}
