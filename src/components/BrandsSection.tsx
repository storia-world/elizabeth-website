"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

import logoBumble from "@/assets/images/logoBumble.png";
import logoGoogle from "@/assets/images/logoGoogle.png";
import logoInterflora from "@/assets/images/logoInterflora.png";
import logoNike from "@/assets/images/logoNike.png";

const BRAND_LOGOS: {
  id: string;
  src: StaticImageData;
  alt: string;
  height: number;
}[] = [
  { id: "google", src: logoGoogle, alt: "Google", height: 44 },
  { id: "nike", src: logoNike, alt: "Nike", height: 44 },
  { id: "bumble", src: logoBumble, alt: "Bumble", height: 44 },
  { id: "interflora", src: logoInterflora, alt: "Interflora", height: 44 },
];

function AdAgeClippingCard() {
  return (
    <div
      style={{
        transformOrigin: "center center",
        background: "white",
        borderRadius: "12px",
        padding: "24px",
        boxShadow: "0 4px 40px rgba(0,0,0,0.08)",
        overflow: "hidden",
      }}
    >
      <p
        className="font-display font-normal text-[var(--storia-black)]"
        style={{
          fontSize: "1.2rem",
          letterSpacing: "0.05em",
          borderBottom: "1px solid var(--storia-black15)",
          paddingBottom: "8px",
          marginBottom: "12px",
        }}
      >
        AdAge
      </p>

      <p
        className="font-body font-light text-[var(--storia-gray)]"
        style={{ fontSize: "0.6rem", marginBottom: "16px" }}
      >
        Latest ▾ &nbsp; Editor&apos;s Picks ▾ &nbsp; Most Popular ▾
      </p>

      <h3
        className="font-body font-bold text-[var(--storia-black)]"
        style={{ fontSize: "0.85rem", lineHeight: 1.3 }}
      >
        ELIZABETH UVIEBINENÉ CONNECTS BRANDS TO CULTURE
      </h3>

      <p
        className="font-body font-light text-[var(--storia-blackLight)]"
        style={{ fontSize: "0.75rem", marginTop: "8px" }}
      >
        Uncommon Creative Studio&apos;s brand strategist is also accomplished
        columnist and author
      </p>

      <p
        className="font-body font-light text-[var(--storia-gray)]"
        style={{
          fontSize: "0.65rem",
          marginTop: "6px",
          marginBottom: "16px",
        }}
      >
        By Illyse Liffreing, Published June 28, 2021
      </p>

      <div
        className="rounded bg-[var(--storia-coffee)]"
        style={{ height: "180px", borderRadius: "4px" }}
        aria-hidden
      />
    </div>
  );
}

export default function BrandsSection() {
  return (
    <section
      id="brands"
      style={{
        background: "var(--storia-beige)",
        padding: "120px 8vw",
      }}
    >
      <p className="mb-2 font-body text-sm font-medium uppercase tracking-[0.15em] text-[var(--storia-darkgreen)]">
        Brands
      </p>

      <div className="mt-14 grid grid-cols-1 items-center gap-20 md:grid-cols-[42%_55%] md:gap-[80px]">
        <AdAgeClippingCard />

        <motion.div
          className="min-w-0"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p
            className="font-body font-light leading-[1.8] text-[var(--storia-blackLight)]"
            style={{ fontSize: "1.05rem", marginBottom: "48px" }}
          >
            Having developed engaging, culturally resonant brand campaigns
            across a wide range of categories during my time as an ad(wo)man, I
            continue to offer brand consultancy services that combine my
            journalistic and advertising experience, helping institutions,
            brands and agencies find the sweet spot where culture, media and
            brands intersect.
          </p>

          <div
            className="flex flex-row flex-wrap items-center"
            style={{ gap: "32px" }}
          >
            {BRAND_LOGOS.map((brand) => (
              <motion.span
                key={brand.id}
                className="inline-flex cursor-default items-center"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.25 }}
              >
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  height={brand.height}
                  width={Math.round(
                    (brand.src.width / brand.src.height) * brand.height,
                  )}
                  className="object-contain"
                />
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
