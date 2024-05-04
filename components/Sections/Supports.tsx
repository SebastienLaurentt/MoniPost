import Image from "next/image";
import Section from "../Section";
import SectionHeader from "../SectionHeader";
import EiffelLogo from "../../public/images/Eiffel.png";
import Lyon1Logo from "../../public/images/Lyon1.png";
import UniversityLogo from "../../public/images/UniversityLogo.png";

const Supports = () => {
  return <Section>
    <SectionHeader title="Our" titleHighlight="Supports" />
    <ul>
      <li>
        <Image src={EiffelLogo} alt="Phone" width={24} height={24} />
      </li>
      <li>
        <Image src={Lyon1Logo} alt="Phone" width={24} height={24} />
      </li>
      <li>
        <Image src={UniversityLogo} alt="Phone" width={24} height={24} />
      </li>
    </ul>
  </Section>;
};

export default Supports;
