import Image from "next/image";
import {
  HeroSection,
  AboutSection,
  RulesSection,
  JudgingCriteria,
  FaqSection,
  TimelineSection,
  RewardsSection,
  PrivacySection,
  PartnersSection,
} from "@/containers";
import { Footer } from "@/components";

export default function Home() {
  return (
    <>
      <main className="main">
        <HeroSection />
        <AboutSection />
        <RulesSection />
        <JudgingCriteria />
        <FaqSection />
        <TimelineSection />
        <RewardsSection />
        <PartnersSection />
        <PrivacySection />
      </main>
      <Footer />
    </>
  );
}
