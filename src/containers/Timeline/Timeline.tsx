import React from "react";
import SectionDescription from "@/components/SectionDescription";
import Image from "next/image";
import { Question, Faq as img } from "@/utils/images/images";
import DataDescription from "@/components/DataDescription";
import "./Timeline.css";
import { clashDisplay } from "@/utils/fonts/fonts";

const TimelineSection = () => {
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
    <section className="timeline relative h-[100vh]">
      <div className="flare--one"></div>
      <div className="flare--two"></div>
      <div className="timeline__heading">
        <h1 className={clashDisplay.className}>Timeline </h1>
        <p className="">
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </p>
      </div>
      <div className="timeline__box">
        <div className="timeline__box--contents">
          <div className="content">
            <h3 className={clashDisplay.className}>Hackathon Announcement</h3>
            <p>
              The getlinked tech hackathon 1.0 is formally announced to the
              general public and teams begin to get ready to register
            </p>
          </div>
          <div className="bullet">
            <div>1gg</div>
            <div>2</div>
          </div>
          <div className="date">
            <h3 className={clashDisplay.className}>November 18, 2023</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
