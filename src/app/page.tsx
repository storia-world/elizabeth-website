"use client";

import Nav from "@/components/Nav";
import HeroSection from "@/components/HeroSection";
import BooksSection from "@/components/BooksSection";
import ClientLogosMarquee from "@/components/ClientLogosMarquee";
import SpeakingSection from "@/components/SpeakingSection";
import PodcastingSection from "@/components/PodcastingSection";
import PressSection from "@/components/PressSection";
import FounderSection from "@/components/FounderSection";
import BrandsSection from "@/components/BrandsSection";
import AwardsSection from "@/components/AwardsSection";
import ScrollProgress from "@/components/ScrollProgress";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <HeroSection />
      <BooksSection />
      <PodcastingSection />
      <SpeakingSection />
      <ClientLogosMarquee />
      <PressSection />
      <FounderSection />
      <BrandsSection />
      <AwardsSection />
      <ContactSection />
      <Footer />
      <ScrollProgress />
    </>
  );
}
