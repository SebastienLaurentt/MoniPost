import React from "react";

interface SectionHeaderProps {
  title: string;
  titleHighlight: string;
  titleDescription?: string;
  classname?: string;
  textPosition?: "text-center" | "text-left" | "text-right";
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
      className={`mb-8 flex w-[300px] flex-col items-center ${textPosition} font-bold md:mb-8 md:w-[440px] lg:w-[600px] ${classname}`}
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
