"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";

import { Eyebrow, FadeIn, Section } from "@/components/common";

import pressImg1 from "@/assets/images/pressImg1.png";
import pressImg2 from "@/assets/images/pressImg2.jpeg";
import pressImg3 from "@/assets/images/pressImg3.png";
import pressImg4 from "@/assets/images/pressImg4.png";
import pressImg5 from "@/assets/images/pressImg5.jpg";
import pressImg6 from "@/assets/images/pressImg6.png";
import pressImg7 from "@/assets/images/pressImg7.png";
import pressImg8 from "@/assets/images/pressImg8.jpeg";
import pressImg9 from "@/assets/images/pressImg9.jpg";

type PressFeature = {
  title: string;
  publication: string;
  image: StaticImageData;
  href: string;
};

const PRESS_FEATURES: PressFeature[] = [
  {
    title: "The Reset — why this book could seriously change your life",
    publication: "Marie Claire UK",
    image: pressImg1,
    href: "https://www.marieclaire.co.uk/life/work/the-reset-book-uviebinene-work-life-balance-738921",
  },
  {
    title: "You Have To Nurture The Essence Of Who You Are",
    publication: "Young Women’s Trust",
    image: pressImg2,
    href: "https://www.youngwomenstrust.org/blog/you-have-to-nurture-the-essence-of-who-you-are-an-interview-with-elizabeth-uviebinene/",
  },
  {
    title: "The Must-Read Book Empowering Young Black Women",
    publication: "British Vogue",
    image: pressImg4,
    href: "https://www.vogue.co.uk/article/slay-in-your-lane",
  },
  {
    title:
      "Black Women In Business: “How Curiosity And Creativity Led Me To Rewrite The Script”",
    publication: "Grazia",
    image: pressImg7,
    href: "https://graziadaily.co.uk/life/real-life/black-women-in-business-storia-journaling-app/",
  },
  {
    title: "The Secrets Behind Elizabeth Uviebinené’s Success",
    publication: "Sadé Magazine",
    image: pressImg3,
    href: "https://sademagazine.co/blogs/news/career-corner-elizabeth-uviebinene",
  },
  {
    title: "Slay In Your Lane: The Black Girl Bible",
    publication: "OX Magazine",
    image: pressImg5,
    href: "https://www.oxmag.co.uk/articles/slay-in-your-lane-the-black-girl-bible/",
  },
  {
    title: "A Letter To My Younger Self",
    publication: "Papier",
    image: pressImg6,
    href: "https://www.papier.com/thefold/articles/a-letter-to-my-younger-self-by-elizabeth-uviebinene",
  },
  {
    title:
      "This Bestselling Author’s AI-Guided Journaling App Wants To Unleash Your Inner Voice",
    publication: "People of Color in Tech",
    image: pressImg8,
    href: "https://peopleofcolorintech.com/articles/this-bestselling-authors-ai-guided-journaling-app-wants-to-unleash-your-inner-voice/",
  },
  {
    title: "What Do The Female Icons Of Tomorrow Look Like?",
    publication: "Stylist",
    image: pressImg9,
    href: "https://www.stylist.co.uk/life/female-singer-female-artist-female-icons-slay-in-your-lane/357352",
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
        <Eyebrow>Press</Eyebrow>
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
          <div className="-ml-5 flex touch-pan-y lg:-ml-6">
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
