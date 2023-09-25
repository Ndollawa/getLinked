"use client";

import Image from "next/image";
import { useEffect } from "react";
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
import ScrollReveal from "scrollreveal";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const shouldInitializeScrollReveal = true;

      if (shouldInitializeScrollReveal) {
        ScrollReveal({
          reset: true,
          distance: "80px",
          duration: 2000,
          delay: 200,
        });

        ScrollReveal().reveal(
          ".hero__content--intro,.timeline .timeline__box--contents .bullet,.partners .partners__heading,.rules .content__wrapper--media, .hero__content--intro__box--heading h1",
          {
            origin: "top",
          }
        );
        ScrollReveal().reveal(
          ".hero__content--images,.partners .partners__box, .about .content__wrapper--contentbox,.faq .content__wrapper--contentbox,.rewards .content__wrapper--contentbox,.privacy .content__wrapper--contentbox,.criteria .content__wrapper--contentbox,.footer__box",
          { origin: "bottom" }
        );
        ScrollReveal().reveal(
          ".hero__content--timer,.timeline .timeline__box--contents .content, .about .content__wrapper--media,.rewards .content__wrapper--media,.privacy .content__wrapper--media,.criteria .content__wrapper--media",
          {
            origin: "left",
          }
        );
        ScrollReveal().reveal(
          ".hero__content--intro p,.timeline timeline__box--contents .dates,.rules .content__wrapper--contentbox,.faq .content__wrapper--media, .about__content",
          {
            origin: "right",
          }
        );
      }
    }
  }, []);
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
