import SectionDescription from "@/components/SectionDescription";
import Image from "next/image";
import React from "react";
import { RulesAndGuidelines, StarPurple, Star } from "@/utils/images/images";
import "./Rules.css";

const RulesSection = () => {
  return (
    <section className="rules m-6 relative w-full overflow-auto" id="rules">
      <div className="flare--one"></div>
      <div className="flare--two"></div>
      <div className="container center h-full">
        <SectionDescription
          title="Rules and"
          subTitle="Guidelines"
          content="Our tech hackathon is a melting pot of visionaries, and its purpose is as
clear as day: to shape the future. Whether you're a coding genius, a 
design maverick, or a concept wizard, you'll have the chance to transform 
your ideas into reality. Solving real-world problems, pushing the boundaries
of technology, and creating solutions that can change the world,
that's what we're all about!"
          dir="rtl"
          media={
            <>
              <div className="circle-gradient"></div>
              <div className="animate-pulse">
                {" "}
                <Image src={StarPurple} width={25} alt="star" />
              </div>
              <div className="star--two">
                <Image src={Star} width={25} alt="star" />
              </div>
              <Image
                src={RulesAndGuidelines}
                width={400}
                className="z-[1]"
                alt="rules and guidelines"
              />
            </>
          }
        />
      </div>
    </section>
  );
};

export default RulesSection;
