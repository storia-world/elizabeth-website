"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";

import founderPortrait from "@/assets/images/founder.jpeg";
import storyImg1 from "@/assets/images/storyImg1.jpg";
import storyImg3 from "@/assets/images/storyImg3.jpg";
import storyImg6 from "@/assets/images/storyImg6.jpg";

type HeroSlide = {
  src: StaticImageData;
  alt: string;
  title?: string;
  content: string;
};

const HERO_SLIDES: HeroSlide[] = [
  {
    src: founderPortrait,
    alt: "Elizabeth Uviebinené — Today",
    content: `Hello, I'm Elizabeth. I'm a bestselling author and chart-topping podcaster. I am terrible at Excel spreadsheets and hand-eye coordination. But I can write and I love connecting with people, which is why I launched my Substack, Daylight.`,
  },
  {
    src: storyImg1,
    alt: "Elizabeth Uviebinené — School Uniform / Peckham",
    title: "School Uniform / Peckham",
    content: `Raised in Peckham by Nigerian parents, I grew up surrounded by big personalities, big dreams and even bigger expectations. Long before the books, the talks or the company, I was just a curious girl trying to figure out how ambition, identity and confidence fit together.`,
  },
  {
    src: founderPortrait,
    alt: "Elizabeth Uviebinené — University",
    title: "University",
    content: `Getting into University of Warwick cracked my world open. It was the first time I realised how much bigger life could be — and how important it was to find my own voice inside rooms that weren't always built for people like me.`,
  },
  {
    src: storyImg3,
    alt: "Elizabeth Uviebinené — Corporate Years",
    title: "Corporate Years",
    content: `My first step into the corporate world was both exciting and disorientating. I learned how power works, how confidence is performed, and how many people are quietly trying to figure life out behind polished LinkedIn profiles and office titles.`,
  },
  {
    src: founderPortrait,
    alt: "Elizabeth Uviebinené — Becoming an Author",
    title: "Becoming an Author",
    content: `I co-authored Slay in Your Lane with my best friend and watched it grow into something far bigger than either of us imagined. What started as conversations between two women became a cultural conversation about ambition, race, identity and belonging.`,
  },
  {
    src: founderPortrait,
    alt: "Elizabeth Uviebinené — Financial Times Columnist",
    title: "Financial Times Columnist",
    content: `Becoming a columnist at the Financial Times taught me the power of giving people language for things they feel but struggle to explain. I wrote about work, ambition, culture and the messy reality of modern life in a rapidly changing world.`,
  },
  {
    src: storyImg6,
    alt: "Elizabeth Uviebinené — The Reset",
    title: "The Reset",
    content: `Writing The Reset came from noticing how many people looked successful on paper but quietly felt exhausted, stuck or disconnected underneath it all. The book explored what happens when the scripts we inherited stop working — and how we rebuild from there.`,
  },
  {
    src: founderPortrait,
    alt: "Elizabeth Uviebinené — Building Storia",
    title: "Building Storia",
    content: `Then came Storia. What started as thoughts in my Notes app became an AI-powered self-reflection platform helping people better understand themselves, their emotions and the lives they want to build.`,
  },
  {
    src: founderPortrait,
    alt: "Elizabeth Uviebinené — Today",
    title: "Today",
    content: `Today, my work sits at the intersection of storytelling, technology and emotional health. Whether through books, speaking or building products, I'm interested in one thing: helping people better understand who they are — and who they're becoming.`,
  },
];

const SLIDE_GAP = "1rem";
/** Fixed frame so every slide matches regardless of source aspect ratio */
const HERO_IMAGE_FRAME_CLASS =
  "relative aspect-[3/4] w-full overflow-hidden rounded-lg";

type HeroCarouselProps = {
  emblaRef: ReturnType<typeof useEmblaCarousel>[0];
  onPrev: () => void;
  onNext: () => void;
  showControls: boolean;
};

function HeroCarousel({
  emblaRef,
  onPrev,
  onNext,
  showControls,
}: HeroCarouselProps) {
  return (
    <div className="relative mx-auto w-full max-w-[min(100%,380px)] sm:max-w-[390px]">
      <div className="overflow-hidden" ref={emblaRef}>
        <div
          className="flex touch-pan-y"
          style={{ marginLeft: `calc(${SLIDE_GAP} * -1)` }}
        >
          {HERO_SLIDES.map((slide, index) => (
            <div
              key={`${slide.alt}-${index}`}
              className="min-w-0 shrink-0 grow-0 basis-full"
              style={{ paddingLeft: SLIDE_GAP }}
            >
              <div className={HERO_IMAGE_FRAME_CLASS}>
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 85vw, 390px"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {showControls && (
        <>
          <button
            type="button"
            onClick={onPrev}
            className="absolute left-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--storia-black40)] text-white transition-opacity hover:opacity-80 sm:left-3"
            aria-label="Previous slide"
          >
            <ChevronLeft size={18} strokeWidth={1.25} />
          </button>
          <button
            type="button"
            onClick={onNext}
            className="absolute right-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--storia-black40)] text-white transition-opacity hover:opacity-80 sm:right-3"
            aria-label="Next slide"
          >
            <ChevronRight size={18} strokeWidth={1.25} />
          </button>
        </>
      )}
    </div>
  );
}

export default function HeroSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: HERO_SLIDES.length > 1,
    align: "start",
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

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const showControls = HERO_SLIDES.length > 1;
  const activeSlide = HERO_SLIDES[selectedIndex] ?? HERO_SLIDES[0];

  return (
    <section
      id="about"
      className="flex min-h-screen items-center px-[8vw] pb-[120px] pt-28 md:pt-32"
      style={{ background: "var(--storia-beige)" }}
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-20">
        <HeroCarousel
          emblaRef={emblaRef}
          onPrev={scrollPrev}
          onNext={scrollNext}
          showControls={showControls}
        />

        <div className="min-w-0" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.4 }}
            >
              {activeSlide.title && (
                <h3 className="mb-4 font-display text-[1.35rem] font-semibold text-[var(--storia-black)]">
                  {activeSlide.title}
                </h3>
              )}
              <p className="whitespace-pre-line font-body text-[1.1rem] font-light leading-[1.8] text-[var(--storia-blackLight)]">
                {activeSlide.content}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
