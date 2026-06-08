"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";

import { Eyebrow, FadeIn, Section, Text } from "@/components/common";

import appOfTheDayBadge from "@/assets/images/appOfTheDay.png";
import appleStory1 from "@/assets/images/appleStory1.png";
import appleStory1a from "@/assets/images/appleStory1a.png";
import appleStory1b from "@/assets/images/appleStory1b.png";
import storiaForecast from "@/assets/images/storiaForecast.png";
import storiaHomepage from "@/assets/images/storiaHomepage.png";
import storiaCheckin from "@/assets/images/storiaCheckin.png";

type FounderSlide = {
  src: StaticImageData;
  alt: string;
};

type AppStoreStory = {
  title: string;
  href: string;
};

const FOUNDER_SLIDES: FounderSlide[] = [
  {
    src: appleStory1,
    alt: "Apple story 1 on iPhone",
  },
  {
    src: storiaHomepage,
    alt: "Storia homepage screen on iPhone",
  },
  {
    src: appleStory1a,
    alt: "Apple story 1a on iPhone",
  },
  {
    src: storiaCheckin,
    alt: "Storia insights screen on iPhone",
  },
  {
    src: appleStory1b,
    alt: "Apple story 1b on iPhone",
  },
  {
    src: storiaForecast,
    alt: "Storia community screen on iPhone",
  },
];

const APP_OF_THE_DAY_STORIES = [
  {
    title: "How a bestselling author built a tool for getting unstuck",
    href: "https://apps.apple.com/gb/story/id1767632768",
  },
  {
    title: "How Storia became a game-changing AI app",
    href: "https://apps.apple.com/us/story/id1869143479",
  },
] as const;

function AppStoreStoryLink({ story }: { story: AppStoreStory }) {
  return (
    <a
      href={story.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Read the story: ${story.title}`}
      className="group block"
    >
      <div className="flex items-center justify-between gap-4 border-b border-[var(--storia-black35)] pb-3">
        <p className="font-display text-[1rem] leading-[1.25] text-[var(--storia-black)] sm:text-[1.15rem]">
          {story.title}
        </p>
        <ArrowRight
          size={24}
          strokeWidth={1.4}
          className="shrink-0 text-[var(--storia-black)] transition-transform duration-200 group-hover:translate-x-1"
        />
      </div>

      {/* <span className="mt-4 inline-block font-body text-[0.65rem] font-medium uppercase tracking-[0.22em] text-[var(--storia-black)]">
        Read the story
      </span> */}
    </a>
  );
}

function FounderImageCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: FOUNDER_SLIDES.length > 1,
    skipSnaps: true,
  });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const handleSlideClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;

      if (index === selectedIndex) {
        emblaApi.scrollTo((index + 1) % FOUNDER_SLIDES.length);
        return;
      }

      emblaApi.scrollTo(index);
    },
    [emblaApi, selectedIndex],
  );

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="mx-auto w-full max-w-[395px] sm:max-w-[435px]">
      <div
        className="cursor-grab overflow-hidden px-0.5 active:cursor-grabbing sm:px-1"
        ref={emblaRef}
      >
        <div className="-ml-1.5 flex touch-pan-y sm:-ml-2">
          {FOUNDER_SLIDES.map((slide, index) => {
            const active = index === selectedIndex;

            return (
              <div
                key={slide.alt}
                className="min-w-0 shrink-0 grow-0 pl-1.5 sm:pl-2"
              >
                <button
                  type="button"
                  onClick={() => handleSlideClick(index)}
                  className={`block cursor-pointer rounded-[2rem] transition-all duration-300 ease-out ${
                    active
                      ? "scale-100 opacity-100"
                      : "scale-[0.84] opacity-55 hover:opacity-80"
                  }`}
                  aria-label={
                    active
                      ? `View next Storia screen after ${slide.alt}`
                      : `View ${slide.alt}`
                  }
                  aria-pressed={active}
                >
                  <div className="flex h-[368px] items-start justify-center sm:h-[418px]">
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      width={slide.src.width}
                      height={slide.src.height}
                      draggable={false}
                      className="pointer-events-none h-full w-auto max-w-none select-none drop-shadow-[0_18px_36px_rgba(33,37,41,0.08)]"
                      priority={index === 0}
                    />
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-10 flex items-center justify-center gap-2.5">
        {FOUNDER_SLIDES.map((slide, index) => {
          const active = index === selectedIndex;

          return (
            <button
              key={slide.alt}
              type="button"
              onClick={() => handleSlideClick(index)}
              aria-label={`Go to ${slide.alt}`}
              aria-pressed={active}
              className={`rounded-full transition-all duration-300 ${
                active
                  ? "h-2.5 w-11 bg-[var(--storia-blue)]"
                  : "h-2.5 w-2.5 bg-neutral-300/70 hover:bg-neutral-400/75"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}

export default function FounderSection() {
  return (
    <Section id="founder">
      <FadeIn className="text-center">
        <Eyebrow>Founder</Eyebrow>
        <h2 className="font-display text-4xl font-light text-[var(--storia-black)] md:text-5xl">
          Turning emotion into intelligence
        </h2>
      </FadeIn>

      <div className="mt-14 grid grid-cols-1 items-start gap-4 md:grid-cols-2 md:gap-2">
        <div className="flex min-w-0 items-start justify-center md:justify-center md:mt-16">
          <FounderImageCarousel />
        </div>

        <FadeIn
          direction="right"
          distance={30}
          duration={0.7}
          className="min-w-0"
        >
          <Text className="mb-4">
            I built Storia because I kept meeting people who wanted more from
            their lives, but didn’t always know what was getting in the way.
          </Text>
          <Text className="mb-4">
            They were ambitious, and trying to grow, but also overwhelmed,
            burned out, emotionally overloaded and carrying more than they had
            time to process.
          </Text>
          <Text className="mb-4">
            Storia helps people turn those feelings into something powerful. It
            is a proactive emotional health app that uses AI to help people
            reflect, spot patterns, track their emotional growth and make
            clearer decisions about their lives.
          </Text>
          <Text className="mb-4">
            Since launch, Storia has processed over 40 million words of
            self-reflection, helped 45,000+ people, and been recognised by Apple
            as App of the Day across 45+ countries.
          </Text>
          <div className="mt-8 flex flex-col gap-8">
            {APP_OF_THE_DAY_STORIES.map((story) => (
              <AppStoreStoryLink key={story.href} story={story} />
            ))}
          </div>
          <div className="mt-10">
            <div className="mt-8 flex items-center justify-center">
              <Image
                src={appOfTheDayBadge}
                alt="App Store App of the Day"
                width={appOfTheDayBadge.width}
                height={appOfTheDayBadge.height}
                className="h-auto w-[150px] max-w-none shrink-0 sm:w-[175px]"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
