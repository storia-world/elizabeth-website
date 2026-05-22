"use client";

import Image from "next/image";

import { Eyebrow, FadeIn, Section, Text } from "@/components/common";

import appOfTheDayBadge from "@/assets/images/appOfTheDay.png";
import storiaHomepage from "@/assets/images/storiaHomepage.png";

export default function FounderSection() {
  return (
    <Section id="founder">
      <Eyebrow>founder</Eyebrow>

      <div className="mt-14 grid grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-[64px]">
        <div className="flex min-w-0 justify-center md:justify-start">
          <div className="mx-auto w-full max-w-[240px]">
            <Image
              src={storiaHomepage}
              alt="Storia app homepage on iPhone"
              width={storiaHomepage.width}
              height={storiaHomepage.height}
              className="h-auto w-full"
            />
          </div>
        </div>

        <FadeIn direction="right" distance={30} duration={0.7} className="min-w-0">
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
