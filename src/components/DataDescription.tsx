import React from "react";
import { clashDisplay } from "@/utils/fonts/fonts";

interface CProp {
  title: string;
  subTitle: string;
  content: React.JSX.Element | React.JSX.Element[] | string;
  media: React.JSX.Element | String;
  alignment: string;
  dir: "ltr" | "rtl";
}
type dataDescriptionProps = Partial<CProp>;
const DataDescription = ({
  title,
  subTitle,
  content,
  media,
  dir,
}: dataDescriptionProps) => {
  const reverse = dir == "rtl" ? "flex-row-reverse" : null;
  return (
    <div className={`m-auto flex flex-wrap z-[1] flex-row ${reverse}`}>
      <div className="w-full flex flex-col items-center justify-start md:justify-center py-5">
        <p className="text-white text-base  z-[1] md:text-left text-center">
          <span
            className={
              clashDisplay.className +
              " text-lg z-[1] secondary-text-color mb-4 font-extrabold md:text-left text-center"
            }
          >
            {title}
          </span>{" "}
          {content}
        </p>
      </div>
    </div>
  );
};

export default DataDescription;
