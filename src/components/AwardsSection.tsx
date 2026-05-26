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

import { Eyebrow, FadeIn, Section } from "@/components/common";

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

function AwardRow({ award, index }: { award: Award; index: number }) {
  const Icon = award.icon;

  return (
    <FadeIn
      direction="up"
      distance={24}
      delay={index * 0.06}
      viewportMargin="-60px"
    >
      <div className="grid grid-cols-[2.75rem_minmax(0,1fr)] items-center gap-4 border-b border-[rgba(33,37,41,0.08)] py-5 sm:grid-cols-[3.5rem_minmax(0,1fr)] sm:gap-6 sm:py-7">
        <div className="flex items-center justify-center">
          <Icon
            size={24}
            strokeWidth={1.35}
            className="text-[var(--storia-orange75)] opacity-75 sm:h-7 sm:w-7"
            aria-hidden="true"
          />
        </div>

        <div className="min-w-0">
          <p className="flex flex-col gap-1.5 text-left md:flex-row md:items-center md:gap-4">
            <span className="font-body text-[0.7rem] font-light leading-[1.15] tracking-[0.01em] text-[var(--storia-black)] sm:text-[1.2rem]">
              {award.title}
            </span>
            <span
              className="hidden text-[0.9rem] text-[var(--storia-orange75)] md:inline"
              aria-hidden="true"
            >
              &bull;
            </span>
            <span className="font-body text-[0.96rem] font-light leading-[1.5] text-[rgba(33,37,41,0.7)] sm:text-[1.05rem]">
              {award.detail}
            </span>
          </p>
        </div>
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

      <div className="mx-auto mt-12 max-w-[1100px] border-t border-[rgba(33,37,41,0.08)]">
        {AWARDS.map((award, index) => (
          <AwardRow key={`${award.title}`} award={award} index={index} />
        ))}
      </div>
    </Section>
  );
}
