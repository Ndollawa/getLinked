import SectionDescription from "@/components/SectionDescription";
import Image from "next/image";
import React from "react";
import { TheBigIdea, StarPurple, Arrow } from "@/utils/images/images";
import "./About.css";

const AboutSection = () => {
  return (
    <section className="about m-6 relative">
      <div className="star--one">
        {" "}
        <Image src={StarPurple} width={25} alt="star" />
      </div>
      <div className="star--two">
        {" "}
        <Image src={StarPurple} width={25} alt="star" />
      </div>

      <div className="container">
        <SectionDescription
          title="Introduction to getlinked"
          subTitle="tech Hackathon 1.0"
          content="Our tech hackathon is a melting pot of visionaries, and its purpose is as
clear as day: to shape the future. Whether you're a coding genius, a 
design maverick, or a concept wizard, you'll have the chance to transform 
your ideas into reality. Solving real-world problems, pushing the boundaries
of technology, and creating solutions that can change the world,
that's what we're all about!"
          dir="ltr"
          media={
            <div className="relative">
              <div className="thebigidea"> </div>
              <Image src={TheBigIdea} width={270} alt="the-big-idea" />
              <div className="arrow">
                <Image src={Arrow} width={50} alt="arrow" />
              </div>
            </div>
          }
        />
      </div>
    </section>
  );
};

export default AboutSection;
