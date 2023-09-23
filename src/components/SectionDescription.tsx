import React from "react";
import { clashDisplay } from "@/utils/fonts/fonts";

interface CProp {
  title: string;
  subTitle: string;
  description: React.JSX.Element | string;
  content: React.JSX.Element | string;
  media: React.JSX.Element | String;
  dir: "ltr" | "rtl";
}
type sectionDescriptionProps = Partial<CProp>;
const SectionDescription = ({
  title,
  subTitle,
  description,
  content,
  media,
  dir,
}: sectionDescriptionProps) => {
  const reverse = dir == "rtl" ? "flex-row-reverse" : null;
  return (
    <div
      className={`ds m-auto flex flex-wrap min-h-[50vh] z-[1] flex-row ${reverse}`}
    >
      <div className={`w-full md:w-6/12 z-[1]`}>
        <div className="w-full h-full flex flex-col items-center justify-center relative">
          {" "}
          {media && media}
        </div>
      </div>
      <div className="w-full md:w-6/12 flex flex-col items-center justify-start md:justify-center p-5">
        <div className="">
          <h2
            className={
              clashDisplay.className +
              " text-xl md:text-3xl z-[1] text-white font-extrabold text-center md:text-left"
            }
          >
            {title}
          </h2>
          <h2
            className={
              clashDisplay.className +
              " text-xl md:text-3xl z-[1] secondary-text-color mb-4 font-extrabold md:text-left text-center"
            }
          >
            {subTitle}
          </h2>
          {description && (
            <div className="text-base text-white">{description}</div>
          )}
        </div>
        <div className="text-white text-base  z-[1] md:text-left text-center">
          {content}
        </div>
      </div>
    </div>
  );
};

export default SectionDescription;
