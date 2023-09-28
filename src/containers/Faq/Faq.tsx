import React from "react";
import SectionDescription from "@/components/SectionDescription";
import Image from "next/image";
import { FaqStars, Question, Faq as img } from "@/utils/images/images";
import DataDescription from "@/components/DataDescription";
import "./Faq.css";
import FaqAccordion from "./FaqAccordion";

const FaqSection = () => {
  const faqs = [
    {
      question: "Can I work on a project I started before the hackathon?",
      answer: `Evaluate the uniqueness and creativity of the
solution. Consider whether it addresses a real-world problem in a novel 
way or introduces innovative features.`,
    },
    {
      question: "What happens if I need help during the hackathon?",
      answer: `Assess how well the solution works. Does it perform its 
intended functions effectively and without major issues? Judges would
consider the completeness and robustness of the solution.`,
    },
    {
      question: "What happens if I don't have an idea for a project",
      answer: `Determine the potential impact of the solution 
in the real world. Does it address a significant problem, and is it relevant 
to the target audience? Judges would assess the potential social, 
economic, or environmental benefits.`,
    },
    {
      question: "Can I join a team or do I have to come with one?",
      answer: `Evaluate the technical sophistication of the solution. 
Judges would consider the complexity of the code, the use of advanced 
technologies or algorithms, and the scalability of the solution.`,
    },
    {
      question: "What happens after the hackathon ends",
      answer: `Judges will Ensure that the team adhered 
to the rules and guidelines of the hackathon, including deadlines, use of 
specific technologies or APIs, and any other competition-specific requirements.`,
    },
    {
      question: "Can I work on a project I started before the hackathon?",
      answer: `Judges will Ensure that the team adhered 
to the rules and guidelines of the hackathon, including deadlines, use of 
specific technologies or APIs, and any other competition-specific requirements.`,
    },
  ];

  const faqsData = faqs.map((f, i) => (
    <FaqAccordion key={i} question={f.question} answer={f.answer} />
  ));
  return (
    <section className="faq relative min-h-[100vh] w-full" id="faqs">
      <div className="faq-stars -z-2 animate-pulse absolute w-full">
        <Image src={FaqStars} alt="faq-stars" />
      </div>
      <div className="flare--one"></div>
      <div className="flare--two"></div>
      <div className="container">
        <SectionDescription
          title="Frequently Asked"
          subTitle="Questions"
          description="We got answers to the questions that you might
want to ask about getlinked Hackathon 1.0"
          content={
            <>
              <div className="z-[2] mx-auto my-5 px-5">
                <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
                  {faqsData}
                </div>
              </div>
            </>
          }
          dir="rtl"
          media={
            <>
              <div className="relative">
                <div className="question--one">
                  <Image src={Question} width={25} alt="q-1" />
                </div>

                <div className="question--two">
                  <Image src={Question} width={40} alt="q-2" />
                </div>
                <div className="question--three">
                  <Image src={Question} width={25} alt="q-3" />
                </div>

                <Image src={img} alt="rules and guidelines" />
              </div>
            </>
          }
        />
      </div>
    </section>
  );
};

export default FaqSection;
