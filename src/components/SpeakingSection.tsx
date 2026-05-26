"use client";

import { Button, Eyebrow, FadeIn, Section, Text } from "@/components/common";
import Image from "next/image";

import speakerImg from "@/assets/images/speakerImg.jpg";

const SPEAKING_TOPICS = [
  "Ambition in an Uncertain World",
  "The Future of Mental Health",
  "Identity, Belonging and Modern Work",
  "The Power of Storytelling",
  "How to Pivot",
  "How Culture Shapes Confidence",
];

function SpeakingIntro() {
  return (
    <>
      <FadeIn className="text-center">
        <Eyebrow>Speaking</Eyebrow>
        <h2 className="font-display text-4xl font-light text-[var(--storia-black)] md:text-5xl">
          For rooms ready to think bigger
        </h2>
      </FadeIn>

      <div className="mt-14 grid grid-cols-1 items-center gap-4 lg:grid-cols-[40%_60%] lg:gap-4">
        <FadeIn
          direction="left"
          distance={30}
          duration={0.7}
          className="w-[380px] max-w-full"
          style={{
            aspectRatio: "4 / 5",
            borderRadius: 8,
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
          }}
        >
          <div className="relative h-full w-full">
            <Image
              src={speakerImg}
              alt="Elizabeth Uviebinené speaking at an event"
              fill
              className="object-cover"
              sizes="(max-width: 1023px) 100vw, 380px"
            />
          </div>
        </FadeIn>

        <FadeIn direction="right" distance={30} duration={0.7} delay={0.15}>
          <Text className="mb-4">
            I bring warmth, humour and sharp cultural insight to every room I
            speak in. Whether I’m talking about ambition, failure, emotional
            health, the future of work or reinvention, my strength is making big
            ideas feel human, relatable and useful. I don’t just want audiences
            to feel inspired in the moment. I want them to leave with a fresh
            perspective, a greater sense of empowerment and action.
          </Text>
          <Text className="mb-4">
            I've worked with a range of companies, including Facebook, Imperial 
            College London, Google, Tortoise, and Spotify.
          </Text>

          <div className="mt-8 w-full shrink-0">
            <p className="mb-4 font-body text-[0.8rem] font-medium uppercase tracking-[0.24em] text-[var(--storia-gray)]">
              Panels, keynotes and fireside chats
            </p>

            <ul className="grid list-none grid-cols-1 gap-x-8 gap-y-3 p-0 sm:grid-cols-2">
              {SPEAKING_TOPICS.map((topic) => (
                <li
                  key={topic}
                  className="border-b border-[var(--storia-black15)] pb-3 text-[0.9rem] leading-[1.35] text-[var(--storia-black)]"
                >
                  {topic}
                </li>
              ))}
            </ul>

            <div className="mt-7">
              <Button
                color="var(--storia-black)"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Book Elizabeth to Speak
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </>
  );
}

export default function SpeakingSection() {
  return (
    <Section id="speaker" padding="120px 8vw 0">
      <SpeakingIntro />
    </Section>
  );
}
