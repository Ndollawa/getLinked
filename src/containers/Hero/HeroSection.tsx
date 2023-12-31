"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import "./Hero.css";
import { clashDisplay, unicaOne } from "@/utils/fonts/fonts";
import { Montserrat } from "next/font/google";

import {
  HeroImage,
  LensFlare,
  HeroImageOverlay,
  Idea,
  Link,
  Blast,
  Star,
} from "@/utils/images/images";
import CountDownTimer from "@/components/CountDownTimer";
const montserrat = Montserrat({ subsets: ["latin"] });

const HeroSection = () => {
  const currentDate = new Date();
  const targetDate = new Date(currentDate);
  targetDate.setDate(currentDate.getDate() + 7);
  return (
    <section className="hero" id="home">
      <div className="container w-full">
        <div className="hero__heading">
          <h2 className="">
            Igniting a Revolution in{" "}
            <span className="relative">
              HR Innovation{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="255"
                height="17"
                viewBox="0 0 255 17"
                fill="none"
              >
                <path
                  d="M1 14.043C43.3333 5.7097 154.4 -5.95697 254 14.043"
                  stroke="#FF26B9"
                  strokeWidth="5"
                />
              </svg>
            </span>
          </h2>
        </div>
        <div className="hero__flare"></div>
        <div className="hero__content">
          <div className="hero__content--intro">
            <Image src={Star} className="star--one" alt="star" />
            <Image src={Star} className="star--two" alt="star" />
            <Image src={Star} className="star--three" alt="star" />
            <div className="hero__content--intro__box">
              <div className="hero__content--intro__box--heading">
                <h1 className={clashDisplay.className}>
                  getlinked Tech Hackathon
                  <span> 1.0</span>
                </h1>
                <Image
                  src={Idea}
                  className="hero__content--intro__box--heading__image--one"
                  alt="hero-image"
                />
                <Image
                  src={Link}
                  className="hero__content--intro__box--heading__image--two"
                  alt="hero-image"
                />
                <Image
                  src={Blast}
                  className="hero__content--intro__box--heading__image--three"
                  alt="hero-image"
                />
              </div>
              <p>
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    `Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize`,
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: "1.4rem", display: "inline-block" }}
                  repeat={Infinity}
                />
              </p>
              <button>Register</button>
            </div>
            <CountDownTimer targetDate={targetDate} />
          </div>
          <div className="hero__content--images">
            <Image
              src={HeroImage}
              className="hero__content--images__image"
              alt="hero-image"
            />
            <Image
              src={HeroImageOverlay}
              className="hero__content--images__overlay"
              alt="hero-image-overlay"
              width={640}
            />
            <Image
              src={LensFlare}
              className="hero__content--images__lensflare"
              alt="hero-image-lensflare"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
