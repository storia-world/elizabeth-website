"use client";

import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Globe,
  Sparkles,
  Star,
  Trophy,
  UserRound,
} from "lucide-react";
import Image, { StaticImageData } from "next/image";

import { Eyebrow, FadeIn, Section } from "@/components/common";

import awards1 from "@/assets/images/awards1.jpg";
import awards2 from "@/assets/images/awards2.jpg";
import awards3 from "@/assets/images/awards3.jpg";

type Award = {
  title: string;
  detail: string;
  icon: LucideIcon;
};

const AWARDS: Award[] = [
  {
    title: "Entrepreneur of the Year",
    detail: "Black Tech Achievement Awards for Storia",
    icon: Trophy,
  },
  {
    title: "Shortlisted for British Book Awards",
    detail: "Slay In Your Lane",
    icon: BookOpen,
  },
  {
    title: "Shortlisted for National Book Awards",
    detail: "Slay In Your Lane",
    icon: Star,
  },
  {
    title: "Named One of Ad Age's Leading Women in Europe",
    detail: "For brand work",
    icon: UserRound,
  },
  {
    title: "Marie Claire Future Shaper",
    detail: "For being a change maker",
    icon: Sparkles,
  },
  {
    title: "Groucho Maverick Award",
    detail: "For being a culturally progressive innovator",
    icon: Globe,
  },
];

type AwardPhoto = {
  src: StaticImageData;
  alt: string;
};

const AWARD_PHOTOS: AwardPhoto[] = [
  {
    src: awards3,
    alt: "Elizabeth Uviebinené at the Black Tech Achievement Awards",
  },
  {
    src: awards2,
    alt: "Elizabeth Uviebinené at the Black British Business Awards",
  },
  {
    src: awards1,
    alt: "Elizabeth Uviebinené at the Marie Claire Future Shapers event",
  },
];

function AwardsPhotoGrid() {
  return (
    <FadeIn
      direction="left"
      distance={30}
      duration={0.7}
      className="mx-auto w-full max-w-[360px] sm:max-w-[380px]"
    >
      <div className="grid grid-cols-2 gap-3">
        {AWARD_PHOTOS.map((photo, index) => (
          <div
            key={photo.alt}
            className={`relative w-full overflow-hidden rounded-2xl bg-[var(--storia-coffee)] ${
              index === 2 ? "col-span-2 aspect-[16/10]" : "aspect-[3/4]"
            }`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover"
              sizes={
                index === 2
                  ? "(max-width: 1023px) 90vw, 380px"
                  : "(max-width: 1023px) 45vw, 190px"
              }
            />
          </div>
        ))}
      </div>
    </FadeIn>
  );
}

function AwardRow({
  award,
  index,
  isLast,
}: {
  award: Award;
  index: number;
  isLast: boolean;
}) {
  const Icon = award.icon;

  return (
    <FadeIn
      direction="up"
      distance={24}
      delay={index * 0.06}
      viewportMargin="-60px"
    >
      <div
        className={`grid grid-cols-[2.25rem_minmax(0,1fr)] items-center gap-4 py-5 sm:grid-cols-[2.75rem_minmax(0,1fr)] sm:gap-5 sm:py-6 ${
          !isLast ? "border-b border-[rgba(33,37,41,0.08)]" : ""
        }`.trim()}
      >
        <div className="flex items-center justify-center">
          <Icon
            size={22}
            strokeWidth={1.35}
            className="text-[var(--storia-orange)] sm:h-6 sm:w-6"
            aria-hidden="true"
          />
        </div>

        <p className="min-w-0 text-left font-body text-[0.95rem] leading-[1.45] sm:text-[1rem]">
          <span className="font-normal text-[var(--storia-black)]">
            {award.title}
          </span>
          <span
            className="mx-2 text-[var(--storia-orange75)]"
            aria-hidden="true"
          >
            &middot;
          </span>
          <span className="font-light text-[var(--storia-blackLight)]">
            {award.detail}
          </span>
        </p>
      </div>
    </FadeIn>
  );
}

export default function AwardsSection() {
  return (
    <Section id="awards">
      <FadeIn className="text-center">
        <Eyebrow>Awards & nominations</Eyebrow>
        <h2 className="font-display text-4xl font-light text-[var(--storia-black)] md:text-5xl">
          Stories That Earned Recognition
        </h2>
      </FadeIn>

      <div className="mt-12 grid grid-cols-1 items-start gap-12 lg:mt-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 xl:gap-20">
        <div className="order-2 w-full min-w-0 lg:order-1">
          <AwardsPhotoGrid />
        </div>

        <div className="order-1 min-w-0 lg:order-2">
          <div>
            {AWARDS.map((award, index) => (
              <AwardRow
                key={award.title}
                award={award}
                index={index}
                isLast={index === AWARDS.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
