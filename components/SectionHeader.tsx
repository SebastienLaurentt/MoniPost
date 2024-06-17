import React from "react";

interface SectionHeaderProps {
  title: string;
  titleHighlight: string;
  titleDescription?: string;
  classname?: string;
  textPosition?:
    | "text-center items-center"
    | "text-left xl:items-start"
    | "text-right";
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  titleHighlight,
  titleDescription,
  classname,
  textPosition,
}) => {
  return (
    <div
      className={`mb-6 flex w-[300px] flex-col ${textPosition} font-bold md:w-[440px] lg:w-[600px] xl:mb-4 ${classname}`}
    >
      <h2>
        <span>{title}</span>{" "}
        <span className="text-primary">{titleHighlight}</span>
      </h2>
      <p>{titleDescription}</p>
    </div>
  );
};

export default SectionHeader;
