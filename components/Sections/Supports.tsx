import Image from "next/image";
import EiffelLogo from "../../public/images/Eiffel.svg";
import Lyon1Logo from "../../public/images/Lyon1.jpg";
import UniversityLogo from "../../public/images/UniversityLyon.svg";
import Section from "../Section";
import SectionHeader from "../SectionHeader";

const Supports = () => {
  return (
    <Section marginTop={true}>
      <SectionHeader title="Our" titleHighlight="Supports" />
      <ul className="flex flex-row justify-between items-center gap-x-4 md:gap-x-12 lg:gap-x-16 xl:gap-x-20 w-full px-4 md:px-20 lg:px-24 xl:px-48 2xl:px-80">
        <li className="w-1/3">
          <Image src={EiffelLogo} alt="University Eiffel Logo" className="w-full" />
        </li>
        <li className="w-1/3">
          <Image src={Lyon1Logo} alt="University Lyon 1 Logo" className="w-full" />
        </li>
        <li className="w-1/3">
          <Image src={UniversityLogo} alt="University Lyon Logo" className="w-full" />
        </li>
      </ul>
    </Section>
  );
};

export default Supports;
