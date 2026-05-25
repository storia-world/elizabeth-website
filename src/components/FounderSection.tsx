"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image, { StaticImageData } from "next/image";

import { Eyebrow, FadeIn, Section, Text } from "@/components/common";

import appOfTheDayBadge from "@/assets/images/appOfTheDay.png";
import storiaCommunity from "@/assets/images/storiaCommunity.png";
import storiaEcho from "@/assets/images/storiaEcho.png";
import storiaHomepage from "@/assets/images/storiaHomepage.png";
import storiaInsights from "@/assets/images/storiaInsights.png";

type FounderSlide = {
  src: StaticImageData;
  alt: string;
};

const FOUNDER_SLIDES: FounderSlide[] = [
  {
    src: storiaEcho,
    alt: "Storia Echo screen on iPhone",
  },
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
      <div className="overflow-hidden px-0.5 sm:px-1" ref={emblaRef}>
        <div className="-ml-1.5 flex touch-pan-y sm:-ml-2">
          {FOUNDER_SLIDES.map((slide, index) => {
            const active = index === selectedIndex;

            return (
              <div
                key={slide.alt}
                className="min-w-0 shrink-0 grow-0 basis-[66%] pl-1.5 sm:basis-[64%] sm:pl-2"
              >
                <div
                  className={`transition-all duration-300 ease-out ${
                    active ? "scale-100 opacity-100" : "scale-[0.84] opacity-55"
                  }`}
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
                </div>
              </div>
            );
          })}
        </div>
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

          <div className="mt-10 flex justify-center" style={{ marginTop: 40 }}>
            <Image
              src={appOfTheDayBadge}
              alt="App Store App of the Day"
              width={appOfTheDayBadge.width}
              height={appOfTheDayBadge.height}
              className="h-auto w-[200px] max-w-full"
            />
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
