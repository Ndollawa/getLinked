import React from "react";
import SectionDescription from "@/components/SectionDescription";
import Image from "next/image";
import { Question, Faq as img } from "@/utils/images/images";
import DataDescription from "@/components/DataDescription";
import "./Timeline.css";
import { clashDisplay } from "@/utils/fonts/fonts";

const TimelineSection = () => {
  const eventTimelines = [
    {
      title: "Hackathon Announcement",
      content: `The getlinked tech hackathon 1.0 is formally announced
to the general public and teams begin to get ready to register`,
      date: "November 18, 2023",
    },
    {
      title: "Teams Registration begins ",
      content: `Interested teams can now show their interest in the
getlinked tech hackathon 1.0 2023 by proceeding to register`,
      date: "November 18, 2023",
    },
    {
      title: "Teams Registration ends",
      content: `Interested Participants are no longer Allowed to
register`,
      date: "November 18, 2023",
    },
    {
      title: "Announcement of the accepted teams and ideas",
      content: `All teams whom idea has been accepted into getlinked tech
hackathon 1.0 2023 are formally announced`,
      date: "November 18, 2023",
    },
    {
      title: "Getlinked Hackathon 1.0 Offically Begins ",
      content: `Accepted teams can now proceed to build their
ground breaking skill driven solutions`,
      date: "November 18, 2023",
    },
    {
      title: "Demo Day",
      content: `Teams get the opportunity to pitch their projects to judges.
The winner of the hackathon will also be announced on
this day`,
      date: "November 18, 2023",
    },
  ];

  const events = eventTimelines.map((e, i) => (
    <div className="timeline__box--contents" key={(i = 1)}>
      <div className="content">
        <h3 className={clashDisplay.className}>{e.title}</h3>
        <p>{e.content} </p>
      </div>
      <div className="bullet">
        <div className="line"></div>
        <div className="gradient-circle">{i + 1}</div>
      </div>
      <div className="date">
        <h3 className={clashDisplay.className}>{e.date}</h3>
      </div>
    </div>
  ));
  return (
    <section className="timeline relative lg:min-h-[100vh]" id="timeline">
      <div className="flare--one"></div>
      <div className="flare--two"></div>
      <div className="timeline__heading">
        <h1 className={clashDisplay.className}>Timeline </h1>
        <p className="">
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </p>
      </div>
      <div className="timeline__box">{events}</div>
    </section>
  );
};

export default TimelineSection;
