"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";

import { Eyebrow, Text } from "@/components/common";
import heroFrame from "@/assets/images/frame.png";
import founderPortrait from "@/assets/images/founder.jpeg";
import storyImg1 from "@/assets/images/storyImg1.jpg";
import storyImg2 from "@/assets/images/storyImg2.jpg";
import storyImg3 from "@/assets/images/storyImg3.jpg";
import storyImg4 from "@/assets/images/storyImg4.png";
import storyImg5 from "@/assets/images/storyImg5.jpg";
import storyImg6 from "@/assets/images/storyImg6.jpg";
import storyImg7 from "@/assets/images/storyImg7.jpg";
import storyImg8 from "@/assets/images/storyImg8.png";

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
    content: `I’m a founder, author and storyteller driven by curiosity about how people build identity, navigate change and make sense of modern life. 
    \nOver the last decade, my work has spanned books, columns, speaking and technology, but the thread connecting all of it has always been human behaviour: what we feel, what we hide, what we want, and who we become.`,
  },
  {
    src: storyImg1,
    alt: "Elizabeth Uviebinené — Early Years",
    title: "Early Years",
    content: `Raised in Peckham by Nigerian parents, I grew up between cultures, codes and expectations, which shaped my thoughts about indepence, identity and where we find belonging.`,
  },
  {
    src: storyImg2,
    alt: "Elizabeth Uviebinené — The World Got Bigger",
    title: "The World Got Bigger",
    content: `Getting into University of Warwick cracked my world open. It was the first time I realised how much bigger life could be — and how important it was to find my own voice inside rooms that weren't always built for people like me.`,
  },
  {
    src: storyImg3,
    alt: "Elizabeth Uviebinené — Learning the Hidden Rules of Work",
    title: "Learning the Hidden Rules of Work",
    content: `I began my career in the corporate world, where I learned very quickly that work is never just work. It is ambition, performance, confidence, identity and the hidden curriculum no one hands you, but everyone expects you to understand. Those early years taught me that careers are not only built through talent, but through navigation: learning how rooms work, how power moves, how influence is built, and what it takes to build a career without losing yourself.`,
  },
  {
    src: storyImg4,
    alt: "Elizabeth Uviebinené — The Book That Changed Everything",
    title: "The Book That Changed Everything",
    content: `I co-authored the bestselling book Slay In Your Lane with my best friend, Yomi Adegoke, and watched it grow far beyond anything either of us imagined. What started as a conversation between us became a cultural landmark about identity and belonging.\n
The book was shortlisted for both the British Book Awards and the National Book Awards, and helped establish me as one of the leading voices on Black British womanhood. Its influence grew into a companion journal, the Loud Black Girls anthology, and the children’s book The Offline Diaries. I was also named one of the most influential people in London by the Evening Standard.`,
  },
  {
    src: storyImg5,
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
    src: storyImg7,
    alt: "Elizabeth Uviebinené — Building Storia",
    title: "Building Storia",
    content: `Then came Storia. What began as an idea in my Notes app became an AI-powered self-reflection app that helps people turn emotional noise into clarity, spot the patterns shaping their lives, and move through change with more self-trust.`,
  },
  {
    src: storyImg8,
    alt: "Elizabeth Uviebinené — Today",
    title: "Today",
    content: `From books to brands to building products people love, I’m interested in one thing: helping people better understand who they are and who they’re becoming.
\nMy work is about giving people language for the lives they’re living and tools for the futures they’re trying to build.`,
  },
];

const HERO_FRAME_INNER_IMAGE_CLASS =
  "absolute inset-x-[7.2%] top-[5.7%] bottom-[5.8%] overflow-hidden bg-[var(--storia-coffee-light)]";

type HeroCarouselProps = {
  activeSlide: HeroSlide;
  onPrev: () => void;
  onNext: () => void;
  showControls: boolean;
  currentStep: number;
  totalSteps: number;
  transitionDirection: number;
};

function HeroSlideCopy({ slide }: { slide: HeroSlide }) {
  return (
    <>
      <h2 className="font-display text-[1.6rem] font-semibold leading-[1.04] text-[var(--storia-black)] sm:text-[2rem] lg:text-[2.8rem]">
        {slide.title ?? "Hi, I'm Elizabeth."}
      </h2>

      <div className="mt-6 h-[2px] w-14 rounded-full bg-[var(--storia-orange50)]" />

      <Text
        size="large"
        className="mt-8 max-w-[42rem] whitespace-pre-line text-[1.0rem] leading-[1.9] text-[var(--storia-blackLight)] sm:text-[1.06rem]"
      >
        {slide.content}
      </Text>
    </>
  );
}

function HeroSlideBlock({ slide }: { slide: HeroSlide }) {
  return (
    <>
      <Eyebrow className="mb-5 text-[0.82rem] tracking-[0.28em] text-[var(--storia-orange)]">
        About Me
      </Eyebrow>
      <HeroSlideCopy slide={slide} />
    </>
  );
}

function HeroCarousel({
  activeSlide,
  onPrev,
  onNext,
  showControls,
  currentStep,
  totalSteps,
  transitionDirection,
}: HeroCarouselProps) {
  return (
    <div className="relative mx-auto w-full max-w-[min(100%,420px)]">
      <div
        className="relative mx-auto w-full max-w-[min(100%,410px)]"
        style={{
          aspectRatio: `${heroFrame.width} / ${heroFrame.height}`,
        }}
      >
        <div className={HERO_FRAME_INNER_IMAGE_CLASS}>
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={`hero-image-${currentStep}`}
              className="absolute inset-0"
              initial={{
                x: transitionDirection > 0 ? 24 : -24,
                opacity: 0,
              }}
              animate={{ x: 0, opacity: 1 }}
              exit={{
                x: transitionDirection > 0 ? -24 : 24,
                opacity: 0,
              }}
              transition={{ duration: 0.28, ease: "easeOut" }}
            >
              <Image
                src={activeSlide.src}
                alt={activeSlide.alt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 82vw, 430px"
                priority={currentStep === 1}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <Image
          src={heroFrame}
          alt=""
          fill
          className="pointer-events-none select-none object-contain"
          sizes="(max-width: 768px) 82vw, 430px"
          priority
        />
      </div>

      {showControls && (
        <>
          <button
            type="button"
            onClick={onPrev}
            className="absolute left-12 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--storia-white50)] text-[var(--storia-black)] shadow-[0_10px_30px_rgba(33,37,41,0.12)] transition-transform hover:scale-[1.03]"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} strokeWidth={1.5} />
          </button>
          <button
            type="button"
            onClick={onNext}
            className="absolute right-12 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--storia-white50)] text-[var(--storia-black)] shadow-[0_10px_30px_rgba(33,37,41,0.12)] transition-transform hover:scale-[1.03]"
            aria-label="Next slide"
          >
            <ChevronRight size={20} strokeWidth={1.5} />
          </button>
        </>
      )}

      <div className="pointer-events-none absolute bottom-10 left-1/2 z-10 -translate-x-1/2 rounded-full bg-[var(--storia-white75)] px-3 py-1.5 text-[0.82rem] font-medium text-[var(--storia-blackLight)] shadow-[0_8px_18px_rgba(33,37,41,0.08)] backdrop-blur-sm">
        <span className="text-[var(--storia-blackLight)]">{currentStep}</span>
        <span className="px-1 text-[var(--storia-blackLight)]">/</span>
        <span className="text-[var(--storia-blackLight)]">{totalSteps}</span>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [transitionDirection, setTransitionDirection] = useState(1);
  const [copyMinHeight, setCopyMinHeight] = useState(0);
  const copyMeasureRefs = useRef<Array<HTMLDivElement | null>>([]);

  const scrollPrev = useCallback(() => {
    setTransitionDirection(-1);
    setSelectedIndex((currentIndex) =>
      currentIndex === 0 ? HERO_SLIDES.length - 1 : currentIndex - 1,
    );
  }, []);

  const scrollNext = useCallback(() => {
    setTransitionDirection(1);
    setSelectedIndex((currentIndex) =>
      currentIndex === HERO_SLIDES.length - 1 ? 0 : currentIndex + 1,
    );
  }, []);

  const showControls = HERO_SLIDES.length > 1;
  const activeSlide = HERO_SLIDES[selectedIndex] ?? HERO_SLIDES[0];

  useEffect(() => {
    const updateCopyMinHeight = () => {
      const tallestCopy = copyMeasureRefs.current.reduce((maxHeight, node) => {
        const nodeHeight = node?.getBoundingClientRect().height ?? 0;
        return Math.max(maxHeight, nodeHeight);
      }, 0);

      setCopyMinHeight((currentHeight) => {
        const roundedHeight = Math.ceil(tallestCopy);
        return currentHeight === roundedHeight ? currentHeight : roundedHeight;
      });
    };

    const resizeObserver = new ResizeObserver(() => {
      updateCopyMinHeight();
    });

    copyMeasureRefs.current.forEach((node) => {
      if (node) {
        resizeObserver.observe(node);
      }
    });

    updateCopyMinHeight();

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <section
      id="about"
      className="flex min-h-screen items-center px-[8vw] pb-[120px] pt-28 md:pt-32"
      style={{ background: "var(--storia-beige)" }}
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 md:grid-cols-[minmax(0,460px)_minmax(0,1fr)] md:items-stretch md:gap-16 lg:gap-20">
        <HeroCarousel
          activeSlide={activeSlide}
          onPrev={scrollPrev}
          onNext={scrollNext}
          showControls={showControls}
          currentStep={selectedIndex + 1}
          totalSteps={HERO_SLIDES.length}
          transitionDirection={transitionDirection}
        />

        <div className="relative flex h-full min-w-0 w-full max-w-[560px] self-stretch items-center">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 -z-10 opacity-0"
          >
            {HERO_SLIDES.map((slide, index) => (
              <div
                key={`${slide.alt}-measure-${index}`}
                ref={(node) => {
                  copyMeasureRefs.current[index] = node;
                }}
              >
                <HeroSlideBlock slide={slide} />
              </div>
            ))}
          </div>

          <div
            className="flex w-full flex-col justify-center"
            style={{ minHeight: copyMinHeight || undefined }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <HeroSlideBlock slide={activeSlide} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
