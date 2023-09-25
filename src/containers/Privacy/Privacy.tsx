import React from "react";
import SectionDescription from "@/components/SectionDescription";
import Image from "next/image";
import { Vector, Security, PrivacyStars } from "@/utils/images/images";
import DataDescription from "@/components/DataDescription";
import { AiFillCheckCircle } from "react-icons/ai";
import "./Privacy.css";

const PrivacySection = () => {
  return (
    <section className="privacy relative h-[100vh]">
      <div className="flare--one"></div>
      <div className="flare--two"></div>
      <div className="faq-stars -z-2 star--two absolute w-full">
        <Image src={PrivacyStars} alt="faq-stars" />
      </div>
      <SectionDescription
        title="Privacy Policy and"
        subTitle="Terms"
        description={
          <>
            <p className="p-muted">Last updated on September 12, 2023</p>
            <p className="mb-3">
              Below are our privacy & policy, which outline a lot of goodies.
              it’s our aim to always take of our participant
            </p>
          </>
        }
        content={
          <>
            <div className="privacy__container">
              <div className="z-[1]">
                <p className="">
                  At getlinked tech Hackathon 1.0, we value your privacy and are
                  committed to protecting your personal information. This
                  Privacy Policy outlines how we collect, use, disclose, and
                  safeguard your data when you participate in our tech hackathon
                  event. By participating in our event, you consent to the
                  practices described in this policy.
                </p>
                <div>
                  <h3 className="text-xl secondary-text-color font-semibold">
                    Licencing Policy
                  </h3>
                  <p className="text-base mb-4">
                    Here are terms of our Standard License:
                  </p>
                  <ul>
                    <li className="mb-2 ml-2 flex flex-nowrap">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="8.5" cy="8.5" r="8.5" fill="#2DE100" />
                        <path
                          d="M5 8L7 10.5L13.5 6"
                          stroke="white"
                          stroke-width="2"
                        />
                      </svg>
                      <p>
                        {" "}
                        The Standard License grants you a non-exclusive right to
                        navigate and register for our event
                      </p>
                    </li>
                    <li className="mb-2 ml-2 flex flex-nowrap">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="8.5" cy="8.5" r="8.5" fill="#2DE100" />
                        <path
                          d="M5 8L7 10.5L13.5 6"
                          stroke="white"
                          stroke-width="2"
                        />
                      </svg>
                      <p>
                        You are licensed to use the item available at any free
                        source sites, for your project developement
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col items-center md:justify-start justify-center">
              <button className="my-5 md:self-start text-sm px-4 py-2 cta-btn">
                Read More
              </button>
            </div>
          </>
        }
        dir="rtl"
        media={
          <>
            <div className="relative grid place-content-center">
              <div className="security">
                <Image src={Vector} width={360} alt="q-1" />
              </div>

              {/* <div className="question--two">
                <Image src={Question} width={40} alt="q-2" />
              </div>
              <div className="question--three">
                <Image src={Question} width={25} alt="q-3" />
              </div> */}

              <Image
                src={Security}
                width={360}
                height={720}
                className="lock"
                alt="rules and guidelines"
              />
            </div>
          </>
        }
      />
    </section>
  );
};

export default PrivacySection;
