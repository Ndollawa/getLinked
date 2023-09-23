import React from "react";
import SectionDescription from "@/components/SectionDescription";
import Image from "next/image";
import {
  Libertylogo,
  Libertylogo2,
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
        <div className="">
          <div className="border-b">
            <Image src={Libertylogo2} height={35} alt="" />
          </div>
          <div className="border-l border-r">
            <Image src={Libertylogo} height={70} alt="" />
          </div>
          <div className="border-b">
            <Image src={Winwise} height={70} alt="" />
          </div>
          <div className="border-r">
            <Image src={Wisper} height={35} alt="" />
          </div>
          <div className="border-t">
            <Image src={Paybox} height={70} alt="" />
          </div>
          <div className="border-l">
            <Image src={VizualPlus} height={70} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
