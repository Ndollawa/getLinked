// "use client";

import Image from "next/image";
// import { useEffect } from "react";
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
// import ScrollReveal from "scrollreveal";

export default function Home() {
  // useEffect(() => {
  //   ScrollReveal({
  //     reset: true,
  //     distance: "80px",
  //     duration: 2000,
  //     delay: 200,
  //   });

  //   ScrollReveal().reveal(".hero__container--intro, .heading", {
  //     origin: "top",
  //   });
  //   ScrollReveal().reveal(
  //     ".hero__container--image, .service__container,.project_container,.blog__container,.contact__container",
  //     { origin: "bottom" }
  //   );
  //   ScrollReveal().reveal(".hero__container--intro h1, .about__image", {
  //     origin: "left",
  //   });
  //   ScrollReveal().reveal(".hero__container--intro p, .about__content", {
  //     origin: "right",
  //   });
  // }, []);
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
