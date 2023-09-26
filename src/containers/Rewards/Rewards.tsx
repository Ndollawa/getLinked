import React from "react";
import SectionDescription from "@/components/SectionDescription";
import Image from "next/image";
import {
  BronzMedal,
  GoldMedal,
  Question,
  RewardsStars,
  SilverMedal,
  Trophy as img,
} from "@/utils/images/images";
import DataDescription from "@/components/DataDescription";
import "./Reward.css";
import { clashDisplay } from "@/utils/fonts/fonts";
import { Star, StarPurple } from "@/utils/images/images";

const RewardsSection = () => {
  const criteria = [
    {
      title: "Innovation and Creativity:",
      content: `Evaluate the uniqueness and creativity of the
solution. Consider whether it addresses a real-world problem in a novel 
way or introduces innovative features.`,
    },
    {
      title: "Functionality: ",
      content: `Assess how well the solution works. Does it perform its 
intended functions effectively and without major issues? Judges would
consider the completeness and robustness of the solution.`,
    },
    {
      title: "Impact and Relevance: ",
      content: `Determine the potential impact of the solution 
in the real world. Does it address a significant problem, and is it relevant 
to the target audience? Judges would assess the potential social, 
economic, or environmental benefits.`,
    },
    {
      title: "Technical Complexity: ",
      content: `Evaluate the technical sophistication of the solution. 
Judges would consider the complexity of the code, the use of advanced 
technologies or algorithms, and the scalability of the solution.`,
    },
    {
      title: "Adherence to Hackathon Rules: ",
      content: `Judges will Ensure that the team adhered 
to the rules and guidelines of the hackathon, including deadlines, use of 
specific technologies or APIs, and any other competition-specific requirements.`,
    },
  ];

  const judgingCriteria = criteria.map((c, i) => (
    <DataDescription key={i} title={c.title} content={c.content} />
  ));
  return (
    <section className="rewards relative lg:min-h-[100vh] w-full" id="rewards">
      <div className="faq-stars -z-2 animate-pulse absolute w-full">
        <Image src={RewardsStars} alt="faq-stars" />
      </div>
      <div className="container w-full">
        <SectionDescription
          title="Prizes and"
          subTitle="Rewards"
          description={
            <p className="mb-4 w-56 text-center md:text-left">
              Highlight of the prizes or rewards for winners and for
              participants
            </p>
          }
          content={
            <>
              <Image src={StarPurple} className="star--two" alt="star" />
              <Image src={Star} className="star--three" alt="star" />
              <div className="rewards__box">
                <div className="rewards__card silver-medal">
                  <Image src={SilverMedal} width={130} alt="2nd runner up" />
                  <div>
                    <h2 className={clashDisplay.className}>2nd</h2>
                    <p> Runner</p>
                    <div className={clashDisplay.className}>N500 000</div>
                  </div>
                </div>
                <div className="rewards__card gold-medal">
                  <Image src={GoldMedal} width={320} alt="1st runner up" />
                  <div>
                    {" "}
                    <h2 className={clashDisplay.className}>1st</h2>
                    <p>Runner</p>
                    <div className={clashDisplay.className}>N500 000</div>
                  </div>
                </div>

                <div className="rewards__card bronze-medal">
                  <Image src={BronzMedal} width={130} alt="3rd runner up" />
                  <div>
                    {" "}
                    <h2 className={clashDisplay.className}>3rd</h2>
                    <p>Runner</p>
                    <div className={clashDisplay.className}>N500 000</div>
                  </div>
                </div>
              </div>
            </>
          }
          dir="ltr"
          media={
            <>
              <div className="relative">
                <Image src={img} alt="rules and guidelines" />
              </div>
            </>
          }
        />
      </div>
    </section>
  );
};

export default RewardsSection;
