"use client";

import Nav from "@/components/Nav";
import HeroSection from "@/components/HeroSection";
import BooksSection from "@/components/BooksSection";
import ClientLogosMarquee from "@/components/ClientLogosMarquee";
import TopicsSection from "@/components/TopicsSection";
import SpeakingSection from "@/components/SpeakingSection";
import FounderSection from "@/components/FounderSection";
import BrandsSection from "@/components/BrandsSection";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <Nav />
      <HeroSection />
      <BooksSection />
      <SpeakingSection />
      <ClientLogosMarquee />
      <TopicsSection />
      <FounderSection />
      <BrandsSection />
      {/* <ContactSection /> */}
      <ScrollProgress />
    </>
  );
}
