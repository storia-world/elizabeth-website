"use client";

import Image, { StaticImageData } from "next/image";

import { FadeIn, Section } from "@/components/common";

import logoAdobe from "@/assets/images/logoAdobe.png";
import logoGoogle from "@/assets/images/logoGoogle.png";
import logoMeta from "@/assets/images/logoMeta.png";
import logoSoftBank from "@/assets/images/logoSoftBank.png";
import logoSpotify from "@/assets/images/logoSpotify.png";
import logoTortoise from "@/assets/images/logoTortoise.png";

const CLIENT_LOGOS = [
  { id: "google", src: logoGoogle, alt: "Google", height: 22 },
  { id: "meta", src: logoMeta, alt: "Meta", height: 20 },
  { id: "softbank", src: logoSoftBank, alt: "SoftBank", height: 18 },
  { id: "adobe", src: logoAdobe, alt: "Adobe", height: 20 },
  { id: "tortoise", src: logoTortoise, alt: "Tortoise", height: 22 },
  { id: "spotify", src: logoSpotify, alt: "Spotify", height: 24 },
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
    <div className="mx-auto grid w-full max-w-6xl grid-cols-2 place-items-center gap-x-8 gap-y-10 sm:grid-cols-3 md:flex md:flex-nowrap md:items-center md:justify-between md:gap-2">
      {CLIENT_LOGOS.map((logo) => (
        <div
          key={logo.id}
          className="flex items-center justify-center md:shrink-0"
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
