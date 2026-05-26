"use client";

import Image, { StaticImageData } from "next/image";

import { FadeIn, Section } from "@/components/common";

import logoHubSpot from "@/assets/images/logoHubSpot.png";
import logoIntuit from "@/assets/images/logoIntuit.png";
import logoPinterest from "@/assets/images/logoPinterest.png";
import logoSantander from "@/assets/images/logoSantander.png";
import logoTommyHilfiger from "@/assets/images/logoTommyHilfiger.png";
import logoLathamWatkins from "@/assets/images/logoLatham&Watkins.png";
import logoWomenInFinance from "@/assets/images/logoWomenInFinance.png";

const CLIENT_LOGOS = [
  { id: "hubspot", src: logoHubSpot, alt: "HubSpot", height: 18 },
  { id: "intuit", src: logoIntuit, alt: "Intuit", height: 20 },
  { id: "santander", src: logoSantander, alt: "Santander", height: 20 },
  { id: "pinterest", src: logoPinterest, alt: "Pinterest", height: 16 },
  { id: "tommy", src: logoTommyHilfiger, alt: "Tommy Hilfiger", height: 8 },
  { id: "latham", src: logoLathamWatkins, alt: "Latham & Watkins", height: 10 },
  {
    id: "wif",
    src: logoWomenInFinance,
    alt: "Women in Finance Summit & Awards Series",
    height: 28,
  },
] as const;

function ClientLogo({
  src,
  alt,
  height,
}: {
  src: StaticImageData;
  alt: string;
  height: number;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      height={height}
      width={Math.round((src.width / src.height) * height)}
      className="h-auto w-auto object-contain"
    />
  );
}

function LogoGrid() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-nowrap items-center justify-between gap-2 overflow-x-auto md:gap-2">
      {CLIENT_LOGOS.map((logo) => (
        <div
          key={logo.id}
          className="flex shrink-0 items-center justify-center"
        >
          <ClientLogo src={logo.src} alt={logo.alt} height={logo.height} />
        </div>
      ))}
    </div>
  );
}

export default function ClientLogosMarquee() {
  return (
    <Section padding="0 8vw 80px">
      <FadeIn className="mt-20 w-full">
        <p className="mb-12 text-center font-display text-2xl font-light leading-snug text-[var(--storia-black)] md:text-[1.75rem]">
          Elizabeth Uviebinené has delivered talks for global brands including:
        </p>

        <div aria-label="Client logos">
          <LogoGrid />
        </div>
      </FadeIn>
    </Section>
  );
}
