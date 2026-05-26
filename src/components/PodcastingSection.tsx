"use client";

import Image, { StaticImageData } from "next/image";

import { Eyebrow, FadeIn, Section } from "@/components/common";

import podcast1 from "@/assets/images/podcast1.png";
import podcast2 from "@/assets/images/podcast2.png";
import podcast3 from "@/assets/images/podcast3.jpeg";
import podcast4 from "@/assets/images/podcast4.png";
import podcast5 from "@/assets/images/podcast5.png";
import podcast6 from "@/assets/images/podcast6.jpeg";

type PodcastFeature = {
  title: string;
  image: StaticImageData;
  href: string;
  linkLabel: string;
};

const PODCAST_FEATURES: PodcastFeature[] = [
  {
    title: "Turning Your Vision into a Business",
    image: podcast1,
    href: "https://podcasts.apple.com/us/podcast/turning-your-vision-into-a-business-with/id1520695849?i=1000669993287",
    linkLabel: "Listen now",
  },
  {
    title: "How To Stay Motivated",
    image: podcast2,
    href: "https://experience.dropbox.com/remotely-curious/motivation",
    linkLabel: "Listen now",
  },
  {
    title: `How to Follow Your Passions`,
    image: podcast3,
    href: "https://open.spotify.com/episode/7yyKvJ8kSAGT6ZsWpRsWun",
    linkLabel: "Listen now",
  },
  {
    title: "Mentorship, and the Power of Storytelling",
    image: podcast4,
    href: "https://podcasts.apple.com/us/podcast/elizabeth-uviebinen%C3%A9-on-yolo-mentorship-and-the/id1703812639?i=1000663169760",
    linkLabel: "Listen now",
  },
  {
    title: "Finding Your Personal Power",
    image: podcast5,
    href: "https://podcasts.apple.com/gb/podcast/finding-your-personal-power-with-elizabeth-uviebinen%C3%A9/id1591250657?i=1000615438320",
    linkLabel: "Listen now",
  },
  {
    title: "How to Shift Gears & Own Your Story",
    image: podcast6,
    href: "https://open.spotify.com/episode/0G11iHppWlHURmMX1LYoK9?si=8743142dc2e2444d&nd=1&dlsi=00b84cd2c6af4b9e",
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
        <a
          href={feature.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
        >
          <div className="relative aspect-square overflow-hidden bg-[var(--storia-coffee)]">
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
            target="_blank"
            rel="noopener noreferrer"
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
