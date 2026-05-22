"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";

import founderPortrait from "@/assets/images/founder.jpeg";

const HERO_IMAGES: { src: StaticImageData; alt: string }[] = [
  {
    src: founderPortrait,
    alt: "Elizabeth Uviebinené portrait",
  },
  {
    src: founderPortrait,
    alt: "Elizabeth Uviebinené portrait",
  },
  {
    src: founderPortrait,
    alt: "Elizabeth Uviebinené portrait",
  },
];

const SLIDE_GAP = "1rem";

function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: HERO_IMAGES.length > 1,
    align: "start",
  });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const showControls = HERO_IMAGES.length > 1;

  return (
    <div className="relative mx-auto w-full max-w-[min(100%,420px)]">
      <div className="overflow-hidden" ref={emblaRef}>
        <div
          className="flex touch-pan-y"
          style={{ marginLeft: `calc(${SLIDE_GAP} * -1)` }}
        >
          {HERO_IMAGES.map((image, index) => (
            <div
              key={`${image.alt}-${index}`}
              className="min-w-0 shrink-0 grow-0 basis-full"
              style={{ paddingLeft: SLIDE_GAP }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.src.width}
                height={image.src.height}
                className="h-auto w-full rounded-lg"
                sizes="(max-width: 768px) 85vw, 420px"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {showControls && (
        <>
          <button
            type="button"
            onClick={scrollPrev}
            className="absolute left-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--storia-black40)] text-white transition-opacity hover:opacity-80 sm:left-3"
            aria-label="Previous image"
          >
            <ChevronLeft size={18} strokeWidth={1.25} />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            className="absolute right-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--storia-black40)] text-white transition-opacity hover:opacity-80 sm:right-3"
            aria-label="Next image"
          >
            <ChevronRight size={18} strokeWidth={1.25} />
          </button>
        </>
      )}
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      id="about"
      className="flex min-h-screen items-center px-[8vw] pb-[120px] pt-28 md:pt-32"
      style={{ background: "var(--storia-beige)" }}
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-20">
        <HeroCarousel />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="min-w-0"
        >
          <p className="font-body text-[1.1rem] font-light leading-[1.8] text-[var(--storia-black75)]">
            {`Hello, I'm Elizabeth. I'm a bestselling author and chart-topping
            podcaster. I am terrible at Excel spreadsheets and hand-eye
            coordination. But I can write and I love connecting with people,
            which is why I launched my Substack, Daylight.`}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
