import Image from "next/image";
import EiffelLogo from "../../public/images/Eiffel.svg";
import Lyon1Logo from "../../public/images/Lyon1.jpg";
import UniversityLogo from "../../public/images/UniversityLyon.png";
import Section from "../Section";
import SectionHeader from "../SectionHeader";

const Supports = () => {
  return (
    <Section>
      <SectionHeader title="Our" titleHighlight="Supports" />
      <ul className="flex flex-row justify-center items-center gap-x-8 w-full mx-auto">
        <li className="w-1/3">
          <Image src={EiffelLogo} alt="University Eiffel Logo" />
        </li>
        <li className="w-1/3">
          <Image src={Lyon1Logo} alt="University Lyon 1 Logo" />
        </li>
        <li className="w-1/3">
          <Image src={UniversityLogo} alt="University Lyon Logo" />
        </li>
      </ul>
    </Section>
  );
};

export default Supports;
