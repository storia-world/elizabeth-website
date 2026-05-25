"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";

import { Eyebrow, FadeIn, Section } from "@/components/common";

import pressImage from "@/assets/images/pressImage.png";

type PressFeature = {
  title: string;
  publication: string;
  image: StaticImageData;
  href: string;
};

const PRESS_FEATURE_TITLE =
  "The Reset - why this book could seriously change your life";
const PRESS_FEATURE_PUBLICATION = "Marie Claire UK";
const PRESS_FEATURE_HREF =
  "https://www.marieclaire.co.uk/life/work/the-reset-book-uviebinene-work-life-balance-738921";

const PRESS_FEATURES: PressFeature[] = [
  {
    title: PRESS_FEATURE_TITLE,
    publication: PRESS_FEATURE_PUBLICATION,
    image: pressImage,
    href: PRESS_FEATURE_HREF,
  },
  {
    title: PRESS_FEATURE_TITLE,
    publication: PRESS_FEATURE_PUBLICATION,
    image: pressImage,
    href: PRESS_FEATURE_HREF,
  },
  {
    title: PRESS_FEATURE_TITLE,
    publication: PRESS_FEATURE_PUBLICATION,
    image: pressImage,
    href: PRESS_FEATURE_HREF,
  },
  {
    title: PRESS_FEATURE_TITLE,
    publication: PRESS_FEATURE_PUBLICATION,
    image: pressImage,
    href: PRESS_FEATURE_HREF,
  },
  {
    title: PRESS_FEATURE_TITLE,
    publication: PRESS_FEATURE_PUBLICATION,
    image: pressImage,
    href: PRESS_FEATURE_HREF,
  },
  {
    title: PRESS_FEATURE_TITLE,
    publication: PRESS_FEATURE_PUBLICATION,
    image: pressImage,
    href: PRESS_FEATURE_HREF,
  },
];

function PressCard({
  feature,
  index,
}: {
  feature: PressFeature;
  index: number;
}) {
  return (
    <FadeIn
      direction="up"
      distance={32}
      delay={index * 0.06}
      viewportMargin="-60px"
      className="min-w-0 shrink-0 grow-0 basis-[82%] pl-5 sm:basis-[56%] lg:basis-[25%] lg:pl-6"
    >
      <article className="flex h-full flex-col">
        <a href={feature.href} className="group block">
          <div className="relative aspect-[5/4] overflow-hidden bg-[var(--storia-coffee)]">
            <Image
              src={feature.image}
              alt={feature.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              sizes="(max-width: 639px) 82vw, (max-width: 1023px) 56vw, 22vw"
            />
          </div>
        </a>

        <h3 className="mt-5 max-w-[18ch] font-display text-[1.65rem] font-light leading-[0.94] text-[var(--storia-black)] sm:text-[1.9rem]">
          {feature.title}
        </h3>

        <div className="mt-5">
          <a
            href={feature.href}
            className="inline-flex min-h-[44px] items-center border border-[var(--storia-black40)] px-4 py-2.5 font-body text-[0.92rem] text-[var(--storia-black)] transition-colors duration-200 hover:bg-[var(--storia-white40)]"
          >
            {feature.publication}
          </a>
        </div>
      </article>
    </FadeIn>
  );
}

export default function PressSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    dragFree: true,
    containScroll: "trimSnaps",
  });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <Section id="press">
      <FadeIn className="text-center">
        <Eyebrow className="justify-center">Press</Eyebrow>
        <h2 className="font-display text-4xl font-light text-[var(--storia-black)] md:text-5xl">
          In the headlines
        </h2>
      </FadeIn>

      <div className="relative mt-16">
        <button
          type="button"
          onClick={scrollPrev}
          className="absolute left-0 top-[34%] z-10 hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--storia-black15)] bg-[rgba(243,238,232,0.92)] text-[var(--storia-black)] shadow-[0_10px_24px_rgba(33,37,41,0.08)] transition-transform duration-200 hover:scale-[1.03] lg:flex"
          aria-label="Previous press item"
        >
          <ChevronLeft size={20} strokeWidth={1.5} />
        </button>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="-ml-5 flex touch-pan-y lg:-ml-8">
            {PRESS_FEATURES.map((feature, index) => (
              <PressCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={scrollNext}
          className="absolute right-0 top-[34%] z-10 hidden h-11 w-11 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--storia-black15)] bg-[rgba(243,238,232,0.92)] text-[var(--storia-black)] shadow-[0_10px_24px_rgba(33,37,41,0.08)] transition-transform duration-200 hover:scale-[1.03] lg:flex"
          aria-label="Next press item"
        >
          <ChevronRight size={20} strokeWidth={1.5} />
        </button>
      </div>
    </Section>
  );
}
