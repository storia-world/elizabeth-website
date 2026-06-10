"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
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
  title?: ReactNode;
  content: ReactNode[];
};

const HERO_SLIDES: HeroSlide[] = [
  {
    src: founderPortrait,
    alt: "Elizabeth Uviebinené — Today",
    content: [
      <>
        I&apos;m an award-winning founder, bestselling author and storyteller
        driven by{" "}
        <span className="font-semibold text-[var(--storia-blackLight)]">
          curiosity and creativity
        </span>
        .
      </>,
      <>
        Over the last decade, my work has spanned books, columns, speaking, and
        technology. Different formats, same instinct: spotting the cultural
        tensions people are living through, then turning those observations into
        language, stories and products that{" "}
        <span className="font-semibold text-[var(--storia-blackLight)]">
          help people move through life with more self-trust and confidence
        </span>
        .
      </>,
      "I’m interested in the parts of modern life that rarely make it into the official story: the contradictions, reinventions, turning points, and invisible negotiations that shape who we become.",
    ],
  },
  {
    src: storyImg1,
    alt: "Elizabeth Uviebinené — Early Years",
    title: "Early Years",
    content: [
      "I always joke that I was born in Lagos, Nigeria, then moved to mini Lagos: Peckham.",
      "Being Nigerian gave me a deep-rooted belief in possibility. Ambition was expected; it was never a question of if, but how far you would go.",
      <>
        Peckham added another layer.{" "}
        <span className="font-semibold text-[var(--storia-blackLight)]">
          Vibrant, creative and chaotic
        </span>
        , it taught me resilience and resourcefulness. Growing up between
        cultures, codes and expectations showed me that people are rarely one
        thing. Noise and tenderness, pressure and creativity, all sat side by
        side.
      </>,
    ],
  },
  {
    src: storyImg2,
    alt: "Elizabeth Uviebinené — The World Got Bigger",
    title: "The World Got Bigger",
    content: [
      "Getting into the University of Warwick cracked my world open. I studied Politics and International Relations, a subject that gave language to something I had always been curious about: power.",
      <>
        <span className="font-semibold text-[var(--storia-blackLight)]">
          Warwick gave me friendships that would go on to change my life
        </span>
        : sisterhood, late-night conversations, kitchen-table debates,
        questionable student nights out, and people who made it feel like a home
        from home!
      </>,
    ],
  },
  {
    src: storyImg3,
    alt: "Elizabeth Uviebinené — Learning the Hidden Rules of Work",
    title: (
      <>
        Learning the Hidden Rules
        <br />
        of Work
      </>
    ),
    content: [
      <>
        I began my career in the corporate world, where I learned very quickly
        that{" "}
        <span className="font-semibold text-[var(--storia-blackLight)]">
          work is never just work
        </span>
        . It is ambition, performance, confidence and the hidden curriculum no
        one hands you, but everyone expects you to understand.
      </>,
      "Those years in banking taught me that careers are not only built through talent, but through navigation: learning how rooms work, how power moves, how influence is built, and what it takes to build a career without losing yourself.",
    ],
  },
  {
    src: storyImg4,
    alt: "Elizabeth Uviebinené — The Book That Changed Everything",
    title: "The Book That Changed Everything",
    content: [
      <>
        I co-authored the{" "}
        <span className="font-semibold text-[var(--storia-blackLight)]">
          bestselling book Slay In Your Lane
        </span>{" "}
        with my best friend, Yomi Adegoke, and watched it grow far beyond
        anything either of us imagined. What started as a conversation between
        us became a cultural landmark about identity and belonging.
      </>,
      "The book was shortlisted for both the British Book Awards and the National Book Awards, and helped establish me as one of the leading voices on Black British womanhood. Its influence grew into a companion journal, the Loud Black Girls anthology, and the children’s book The Offline Diaries. I was also named one of the most influential people in London by the Evening Standard.",
    ],
  },
  {
    src: storyImg5,
    alt: "Elizabeth Uviebinené — A Wider Lens",
    title: "A Wider Lens",
    content: [
      <>
        Writing a column for the Financial Times gave me a rare kind of space: a
        place to{" "}
        <span className="font-semibold text-[var(--storia-blackLight)]">
          think publicly, consistently and at scale.
        </span>
      </>,
      <>
        For four years, I wrote about the people changing how we work, live and
        build — from founders and creatives to cultural thinkers and new forms
        of leadership. It sharpened my ability to spot patterns early, take what
        was happening in everyday life and{" "}
        <span className="font-semibold text-[var(--storia-blackLight)]">
          connect it to bigger shifts in business, culture and society.
        </span>
      </>,
      "As one of the few Black women with that kind of platform, I understood the responsibility and power of bringing a perspective, curiosity and cultural fluency that was still too rare in those pages.",
    ],
  },
  {
    src: storyImg6,
    alt: "Elizabeth Uviebinené — When the Script Stopped Working",
    title: (
      <>
        When the script
        <br />
        Stopped working
      </>
    ),
    content: [
      "I had the idea for The Reset before Covid, after noticing how many people were starting to question the lives they had worked so hard to build.",
      <>
        They had followed the path, built a career, ticked the boxes and still
        felt a quiet disconnect between the life that looked good on paper and
        the one they actually wanted to live. Then the pandemic arrived, and
        that{" "}
        <span className="font-semibold text-[var(--storia-blackLight)]">
          private reckoning became collective.
        </span>
      </>,
      <>
        <span className="font-semibold text-[var(--storia-blackLight)]">
          The book opened up a broader conversation
        </span>{" "}
        with organisations about the future of work, and what top talent needs
        from the places where they give their time, energy and ideas.
      </>,
    ],
  },
  {
    src: storyImg7,
    alt: "Elizabeth Uviebinené — The Product I Wish Existed",
    title: "The Product I Wish Existed",
    content: [
      <>
        Storia came from noticing a behaviour and{" "}
        <span className="font-semibold text-[var(--storia-blackLight)]">
          problem hiding in plain sight
        </span>
        . People were already using the Notes app, voice notes and group chats
        to process what they were feeling, navigating and outgrowing, but there
        was no{" "}
        <span className="font-semibold text-[var(--storia-blackLight)]">
          beautiful, intelligent product
        </span>{" "}
        built for that everyday need: trying to understand yourself in real time.
      </>,
      <>
        So I built one. Today, Storia has helped more than{" "}
        <span className="font-semibold text-[var(--storia-blackLight)]">
          45,000 people, with over 40 million words journaled
        </span>
        , and has become one of Apple’s most featured self-reflection apps.
      </>,
    ],
  },
  {
    src: storyImg8,
    alt: "Elizabeth Uviebinené — Today",
    title: "Today",
    content: [
      "From books to brands to building products people love, I’m interested in one thing: helping people better understand who they are and who they’re becoming.",
      "My work is about giving people language for the lives they’re living and tools for the futures they’re trying to build.",
    ],
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

      <div className="mt-8 flex max-w-[42rem] flex-col gap-[1em]">
        {slide.content.map((paragraph, index) => (
          <Text
            key={index}
            size="large"
            className="text-[1.0rem] leading-[1.9] text-[var(--storia-blackLight)] sm:text-[1.06rem]"
          >
            {paragraph}
          </Text>
        ))}
      </div>
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

        <div className="pointer-events-none absolute bottom-[10%] left-1/2 z-20 -translate-x-1/2 translate-y-1/2 rounded-full bg-[var(--storia-white75)] px-3 py-1.5 text-[0.82rem] font-medium text-[var(--storia-blackLight)] shadow-[0_8px_18px_rgba(33,37,41,0.08)] backdrop-blur-sm">
          <span className="text-[var(--storia-blackLight)]">{currentStep}</span>
          <span className="px-1 text-[var(--storia-blackLight)]">/</span>
          <span className="text-[var(--storia-blackLight)]">{totalSteps}</span>
        </div>
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
