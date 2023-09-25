import React from "react";
import SectionDescription from "@/components/SectionDescription";
import Image from "next/image";
import {
  Libertylogo,
  Libertylogo2,
  Lines,
  Paybox,
  Question,
  VizualPlus,
  Winwise,
  Wisper,
  Faq as img,
} from "@/utils/images/images";
import DataDescription from "@/components/DataDescription";
import "./Partners.css";
import { clashDisplay } from "@/utils/fonts/fonts";

const PartnersSection = () => {
  return (
    <section className="partners">
      <div className="partners__heading">
        <h1 className={clashDisplay.className}>Partners and Sponsors</h1>
        <p className="">
          Getlinked Hackathon 1.0 is honored to have the following major
          companies as its partners and sponsors
        </p>
      </div>
      <div className="partners__box">
        <div className="relative">
          <div className="absolute place-self-center ">
            <Image src={Lines} width={520} className="" />
          </div>
          <div className="">
            <Image src={Libertylogo2} height={55} alt="" />
          </div>
          <div className="">
            <Image src={Libertylogo} height={70} alt="" />
          </div>
          <div className="">
            <Image src={Winwise} height={70} alt="" />
          </div>
          <div className="">
            <Image src={Wisper} height={55} alt="" />
          </div>
          <div className="">
            <Image src={Paybox} height={70} alt="" />
          </div>
          <div className="pl-5">
            <Image src={VizualPlus} height={70} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
