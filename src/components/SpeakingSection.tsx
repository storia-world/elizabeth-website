"use client";

import { Button, Eyebrow, FadeIn, Section, Text } from "@/components/common";
import Image from "next/image";

import speakerImg from "@/assets/images/speakerImg.jpg";

const SPEAKING_TOPICS = [
  "Reframing failure as data acquisition",
  "Growth through vulnerability",
  "Considered risk-taking",
  "The power of connection",
  "Promoting psychological safety",
  "Measuring the value of diversity",
];

function SpeakingIntro() {
  return (
    <>
      <Eyebrow>Speaking</Eyebrow>

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
          <p
            className="font-display font-light text-[var(--storia-black)]"
            style={{
              fontSize: "2.2rem",
              lineHeight: 1.2,
              marginBottom: 24,
            }}
          >
            Sought-after speaker
          </p>

          <Text>
            Elizabeth Uviebinené is a sought-after public speaker and has
            delivered talks and workshops to numerous organisations, such as
            Facebook, Google, Bumble, Spotify and more.
          </Text>
          <Text className="mt-4 text-[var(--storia-black)]">
            {`Elizabeth Uviebinené's talks inspire, empower and educate, leaving
            audiences with new perspectives on class, politics, feminism,
            racism, and how they intersect.`}
          </Text>

          <div className="mt-8 w-full shrink-0">
            <p className="mb-4 font-body text-[0.8rem] font-medium uppercase tracking-[0.24em] text-[var(--storia-gray)]">
              She speaks on
            </p>

            <ul className="grid list-none grid-cols-1 gap-x-8 gap-y-3 p-0 sm:grid-cols-2">
              {SPEAKING_TOPICS.map((topic) => (
                <li
                  key={topic}
                  className="border-b border-[var(--storia-black15)] pb-3 font-display text-[1.02rem] font-medium leading-[1.35] text-[var(--storia-black)]"
                >
                  {topic}
                </li>
              ))}
            </ul>

            <div className="mt-7">
              <p className="mb-6 font-display text-[0.95rem] italic leading-[1.7] text-[var(--storia-black)]">
                {`Elizabeth's keynotes and fireside chats are designed to inspire and
            empower, leaving audiences with a new perspective on failure,
            learning and growth.`}
              </p>

              <Button
                color="var(--storia-black)"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                ENQUIRE
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
