"use client";

import Image, { StaticImageData } from "next/image";

import { Eyebrow, FadeIn, Section } from "@/components/common";

import storyImg6 from "@/assets/images/storyImg6.jpg";

type PodcastFeature = {
  title: string;
  image: StaticImageData;
  href: string;
  linkLabel: string;
};

const PODCAST_FEATURES: PodcastFeature[] = [
  {
    title: "On storytelling, ambition and the art of reinvention",
    image: storyImg6,
    href: "#",
    linkLabel: "Listen now",
  },
  {
    title: "Building Storia and creating space for emotional health",
    image: storyImg6,
    href: "#",
    linkLabel: "Listen now",
  },
  {
    title: "Writing fiction, identity and finding your own voice",
    image: storyImg6,
    href: "#",
    linkLabel: "Listen now",
  },
  {
    title: "What modern success costs and how to redefine it",
    image: storyImg6,
    href: "#",
    linkLabel: "Listen now",
  },
  {
    title: "From books to brands to building products people love",
    image: storyImg6,
    href: "#",
    linkLabel: "Listen now",
  },
  {
    title: "Reflection, culture and the conversations shaping a generation",
    image: storyImg6,
    href: "#",
    linkLabel: "Listen now",
  },
];

const PODCAST_ROWS = [
  PODCAST_FEATURES.slice(0, 3),
  PODCAST_FEATURES.slice(3, 6),
];

function PodcastCard({
  feature,
  index,
}: {
  feature: PodcastFeature;
  index: number;
}) {
  return (
    <FadeIn
      direction="up"
      distance={36}
      delay={index * 0.08}
      viewportMargin="-80px"
      className="min-w-0"
    >
      <article className="flex h-full flex-col">
        <a href={feature.href} className="group block">
          <div className="relative aspect-[5/4] overflow-hidden bg-[var(--storia-coffee)]">
            <Image
              src={feature.image}
              alt={feature.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              sizes="(max-width: 767px) 84vw, (max-width: 1279px) 28vw, 360px"
            />
          </div>
        </a>

        <h3 className="mt-5 font-display text-[1.85rem] font-light leading-[0.95] text-[var(--storia-black)] sm:text-[2rem]">
          {feature.title}
        </h3>

        <div className="mt-6">
          <a
            href={feature.href}
            className="inline-flex items-center justify-center border border-[var(--storia-black40)] px-5 py-3 font-body text-[0.92rem] tracking-[0.04em] text-[var(--storia-black)] transition-colors duration-200 hover:bg-[var(--storia-white40)]"
          >
            {feature.linkLabel}
          </a>
        </div>
      </article>
    </FadeIn>
  );
}

export default function PodcastingSection() {
  return (
    <Section id="podcasting">
      <FadeIn className="text-center">
        <Eyebrow className="justify-center">Podcasting</Eyebrow>
        <h2 className="font-display text-4xl font-light text-[var(--storia-black)] md:text-5xl">
          In conversation
        </h2>
      </FadeIn>

      <div className="mt-16 flex flex-col gap-14">
        {PODCAST_ROWS.map((row, rowIndex) => (
          <div
            key={`podcast-row-${rowIndex}`}
            className="grid grid-cols-1 gap-x-12 gap-y-14 md:grid-cols-3"
          >
            {row.map((feature, columnIndex) => (
              <PodcastCard
                key={feature.title}
                feature={feature}
                index={rowIndex * 3 + columnIndex}
              />
            ))}
          </div>
        ))}
      </div>
    </Section>
  );
}
