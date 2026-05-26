"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image, { StaticImageData } from "next/image";

import { Eyebrow, FadeIn, Section, Text } from "@/components/common";

import appOfTheDayBadge from "@/assets/images/appOfTheDay.png";
import appleStory1 from "@/assets/images/appleStory1.png";
import appleStory2 from "@/assets/images/appleStory2.png";
import storiaCommunity from "@/assets/images/storiaCommunity.png";
import storiaHomepage from "@/assets/images/storiaHomepage.png";
import storiaInsights from "@/assets/images/storiaInsights.png";

type FounderSlide = {
  src: StaticImageData;
  alt: string;
};

type AppStoreStory = {
  title: string;
  image: StaticImageData;
  href: string;
};

const FOUNDER_SLIDES: FounderSlide[] = [
  {
    src: storiaHomepage,
    alt: "Storia homepage screen on iPhone",
  },
  {
    src: storiaInsights,
    alt: "Storia insights screen on iPhone",
  },
  {
    src: storiaCommunity,
    alt: "Storia community screen on iPhone",
  },
];

const APP_OF_THE_DAY_STORIES = [
  {
    title: "The journaling app helping people reconnect with themselves",
    image: appleStory1,
    href: "https://apps.apple.com/gb/story/id1767632768",
  },
  {
    title: "How Storia became a daily wellbeing ritual",
    image: appleStory2,
    href: "https://apps.apple.com/us/story/id1869143479",
  },
] as const satisfies readonly AppStoreStory[];

function AppStoreStoryCard({ story }: { story: AppStoreStory }) {
  return (
    <a
      href={story.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={story.title}
      className="group block overflow-hidden shadow-[0_14px_30px_rgba(33,37,41,0.08)] transition-transform duration-300 hover:-translate-y-1"
    >
      <Image
        src={story.image}
        alt={story.title}
        width={story.image.width}
        height={story.image.height}
        className="h-auto w-full transition-transform duration-300 group-hover:scale-[1.01]"
      />
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
    <div className="mx-auto w-full max-w-[360px] sm:max-w-[390px]">
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
                className="min-w-0 shrink-0 grow-0 basis-[66%] pl-1.5 sm:basis-[64%] sm:pl-2"
              >
                <button
                  type="button"
                  onClick={() => handleSlideClick(index)}
                  className={`block w-full cursor-pointer rounded-[2rem] transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400/70 focus-visible:ring-offset-4 ${
                    active
                      ? "scale-100 opacity-100 hover:-translate-y-1"
                      : "scale-[0.84] opacity-55 hover:opacity-80"
                  }`}
                  aria-label={
                    active
                      ? `View next Storia screen after ${slide.alt}`
                      : `View ${slide.alt}`
                  }
                  aria-pressed={active}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    width={slide.src.width}
                    height={slide.src.height}
                    draggable={false}
                    className="pointer-events-none h-auto w-full select-none drop-shadow-[0_18px_36px_rgba(33,37,41,0.08)]"
                    priority={index === 0}
                  />
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
      <Eyebrow>founder</Eyebrow>

      <div className="mt-14 grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-6">
        <div className="flex min-w-0 justify-center md:justify-start">
          <FounderImageCarousel />
        </div>

        <FadeIn
          direction="right"
          distance={30}
          duration={0.7}
          className="min-w-0"
        >
          <Text>
            Elizabeth Uviebinené founded Storia, an award-winning wellbeing app
            helping people build healthier daily habits through journaling, mood
            check-ins and community.
          </Text>
          <Text className="mt-5">
            {`Storia was featured as Apple's App of the Day — a testament to the
            team's commitment to building something genuinely useful and
            beautifully designed.`}
          </Text>

          <div
            className="mt-10 flex items-center justify-center gap-6 overflow-x-auto pb-1 sm:gap-6"
            style={{ marginTop: 40 }}
          >
            <div className="w-[110px] shrink-0 sm:w-[125px]">
              <AppStoreStoryCard story={APP_OF_THE_DAY_STORIES[0]} />
            </div>

            <Image
              src={appOfTheDayBadge}
              alt="App Store App of the Day"
              width={appOfTheDayBadge.width}
              height={appOfTheDayBadge.height}
              className="h-auto w-[150px] max-w-none shrink-0 sm:w-[175px]"
            />

            <div className="w-[110px] shrink-0 sm:w-[125px]">
              <AppStoreStoryCard story={APP_OF_THE_DAY_STORIES[1]} />
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
