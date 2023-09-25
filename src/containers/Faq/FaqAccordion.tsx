import React from "react";
import "./FaqAccordion.css";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface IProps {
  question: string;
  answer: string;
}
const FaqAccordion = ({ question, answer }: IProps) => {
  return (
    <>
      <div className="accordion">
        <details className="group">
          <summary className="accordion__heading">
            <span> {question}</span>
            <span className="accordion__icon">
              <AiOutlinePlus className="plus" />
              <AiOutlineMinus className="minus" />
            </span>
          </summary>
          <p className="accordion__content">{answer}</p>
        </details>
      </div>
    </>
  );
};

export default FaqAccordion;
