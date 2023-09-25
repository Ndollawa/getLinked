import React from "react";
import SectionDescription from "@/components/SectionDescription";
import Image from "next/image";
import {
  JudgingCriteria as img,
  StarPurple,
  Star,
} from "@/utils/images/images";
import DataDescription from "@/components/DataDescription";
import "./JudgingCriteria.css";

const JudgingCriteria = () => {
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
    <section
      className="judging-criteria relative lg:min-h-[100vh]"
      id="criteria"
    >
      <div className="flare--one"></div>
      <div className="flare--two"></div>{" "}
      <SectionDescription
        title="Rules and"
        subTitle="Guidelines"
        content={
          <>
            {judgingCriteria}
            <div className="w-full flex flex-col items-center md:justify-start justify-center">
              <button className="my-5 md:self-start text-sm px-4 py-2 cta-btn">
                Read More
              </button>
            </div>
          </>
        }
        dir="ltr"
        media={
          <>
            {" "}
            <div className="relative w-[720px]">
              {" "}
              <div className="star--one">
                {" "}
                <Image src={StarPurple} width={25} alt="star" />
              </div>
              <div className="star--two">
                <Image src={Star} width={25} alt="star" />
              </div>
              <div className="star--three">
                <Image src={Star} width={25} alt="star" />
              </div>
              <div className="circle-gradient"></div>
              <Image src={img} alt="rules and guidelines" />
            </div>
          </>
        }
      />
    </section>
  );
};

export default JudgingCriteria;
