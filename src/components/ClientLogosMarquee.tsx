"use client";

import { motion } from "framer-motion";

const CLIENT_LOGOS = [
  { id: "hubspot", label: "HubSpot" },
  { id: "intuit", label: "Intuit" },
  { id: "pinterest", label: "Pinterest" },
  { id: "santander", label: "Santander" },
  { id: "tommy", label: "Tommy Hilfiger" },
  { id: "latham", label: "Latham & Watkins" },
  { id: "wif", label: "Women in Finance" },
] as const;

function ClientLogo({ id, label }: { id: string; label: string }) {
  switch (id) {
    case "hubspot":
      return (
        <span className="flex items-center gap-1 font-body text-xl font-semibold tracking-tight text-[#33475b]">
          HubSp
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#ff7a59] text-[10px] font-bold text-white">
            ○
          </span>
          t
        </span>
      );
    case "intuit":
      return (
        <span className="font-body text-2xl font-bold tracking-tight text-[#236cff]">
          intuit
        </span>
      );
    case "pinterest":
      return (
        <span className="flex items-center gap-2 font-body text-xl font-semibold text-[#e60023]">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#e60023] font-bold text-white">
            P
          </span>
          Pinterest
        </span>
      );
    case "santander":
      return (
        <span className="flex items-center gap-2 font-body text-xl font-semibold text-[#ec0000]">
          <span className="h-6 w-4 rounded-t-full bg-[#ec0000]" aria-hidden />
          Santander
        </span>
      );
    case "tommy":
      return (
        <span className="flex items-center gap-2 font-body text-sm font-bold tracking-[0.12em] text-[#00155a]">
          TOMMY
          <span
            className="inline-block h-3 w-5 border border-[#00155a]"
            style={{
              background:
                "linear-gradient(to right, #cc0000 33%, #ffffff 33%, #ffffff 66%, #00155a 66%)",
            }}
            aria-hidden
          />
          HILFIGER
        </span>
      );
    case "latham":
      return (
        <span className="font-body text-sm font-bold tracking-[0.08em] text-[#8b1538]">
          LATHAM &amp; WATKINS LLP
        </span>
      );
    case "wif":
      return (
        <span className="flex items-center gap-2 bg-[#5c2d91] px-3 py-2 font-body text-[0.55rem] font-semibold uppercase leading-tight tracking-wide text-white">
          <span className="text-base" aria-hidden>
            ♀
          </span>
          Women in Finance Summit &amp; Awards Series
        </span>
      );
    default:
      return (
        <span className="font-body text-sm font-medium text-[var(--storia-black50)]">
          {label}
        </span>
      );
  }
}

function LogoTrack({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={duplicate}>
      {CLIENT_LOGOS.map((logo) => (
        <div
          key={`${duplicate ? "dup-" : ""}${logo.id}`}
          className="flex h-12 shrink-0 items-center px-10 md:px-14"
        >
          <ClientLogo id={logo.id} label={logo.label} />
        </div>
      ))}
    </div>
  );
}

export default function ClientLogosMarquee() {
  return (
    <div
      style={{
        background: "var(--storia-beige)",
        padding: "0 8vw 80px",
      }}
    >
      <motion.div
        className="mt-20 w-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="mb-12 text-center font-display text-2xl font-light leading-snug text-[var(--storia-black)] md:text-[1.75rem]">
          Elizabeth Uviebinené has delivered talks for global brands including:
        </p>

        <div className="overflow-hidden" aria-label="Client logos">
          <div className="speaking-marquee flex w-max items-center">
            <LogoTrack />
            <LogoTrack duplicate />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
