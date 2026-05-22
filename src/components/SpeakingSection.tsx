"use client";

import { Eyebrow, FadeIn, Section, Text } from "@/components/common";

function SpeakingIntro() {
  return (
    <>
      <Eyebrow>Speaking</Eyebrow>

      <div className="mt-14 grid grid-cols-1 items-center gap-12 lg:grid-cols-[45%_55%] lg:gap-16">
        <FadeIn
          direction="left"
          distance={30}
          duration={0.7}
          className="w-[380px] max-w-full"
          style={{
            aspectRatio: "4 / 5",
            borderRadius: 8,
            background: "var(--storia-coffee)",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.1)",
          }}
          aria-hidden
        />

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
          <Text className="mt-4">
            {`Elizabeth Uviebinené's talks inspire, empower and educate, leaving
            audiences with new perspectives on class, politics, feminism,
            racism, and how they intersect.`}
          </Text>
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
