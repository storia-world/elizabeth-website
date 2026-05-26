"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

import { Eyebrow, FadeIn, Section, Text } from "@/components/common";

import brandImg from "@/assets/images/brandImg.png";
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

function ImageCard() {
  return (
    <a
      href="https://adage.com/article/special-report-leading-women/leading-women-europe-2021-elizabeth-uviebinene-uncommon-creative-studio/2343386/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open Ad Age feature on Elizabeth Uviebinené"
      className="group block overflow-hidden rounded-[12px] bg-white shadow-[0_4px_40px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-1"
    >
      <Image
        src={brandImg}
        alt="AdAge feature on Elizabeth Uviebinené connecting brands to culture"
        width={brandImg.width}
        height={brandImg.height}
        className="h-auto w-full transition-transform duration-300 group-hover:scale-[1.01]"
        priority
      />
    </a>
  );
}

export default function BrandsSection() {
  return (
    <Section id="brands">
      <FadeIn className="text-center">
        <Eyebrow>Brands</Eyebrow>
        <h2 className="font-display text-4xl font-light text-[var(--storia-black)] md:text-5xl">
          A trusted voice
        </h2>
      </FadeIn>

      <div className="mt-14 grid grid-cols-1 items-center gap-20 md:grid-cols-[42%_55%] md:gap-[80px]">
        <ImageCard />

        <FadeIn
          direction="right"
          distance={30}
          duration={0.7}
          className="min-w-0"
        >
          <Text className="mb-5">
            I’ve worked with brands including Google, Bumble, Interflora, Nike,
            Beats by Dre and YouTube, helping shape and front campaigns rooted
            in culture, identity and social impact.
          </Text>
          <Text className="mb-5">
            My work sits at the intersection of strategy and storytelling.
            Behind the scenes, I help brands find the human truth inside a
            brief: the tension, language and cultural insight that make an idea
            land. I help brands understand not just what they want to say, but
            why it matters now, who it needs to reach and how to make it feel
            culturally alive.
          </Text>
          <Text className="mb-5">
            In front of the camera, I bring those ideas to life with clarity,
            warmth and authority.
          </Text>
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
        </FadeIn>
      </div>
    </Section>
  );
}
