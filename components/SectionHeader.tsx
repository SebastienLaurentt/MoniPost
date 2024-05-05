import React from "react";

interface SectionHeaderProps {
  title: string;
  titleHighlight: string;
  titleDescription?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  titleHighlight,
  titleDescription,
}) => {
  return (
    <div className="mb-4 flex flex-col items-center text-center md:mb-8 font-bold ">
      <h2>
        <span>{title}</span>{" "}
        <span className="text-primary">{titleHighlight}</span>
      </h2>
      <p>{titleDescription}</p>
    </div>
  );
};

export default SectionHeader;
