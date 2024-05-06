import Image from "next/image";
import BackgroundImg from "../../public/images/Background.png";
import Section from "../Section";
import SectionHeader from "../SectionHeader";

const Background = () => {
  return (
    <Section marginTop={true}>
      <SectionHeader
        title="Posture as a innovative"
        titleHighlight="measurement"
      />
      <div className="flex flex-col md:flex-row md:items-center md:gap-x-4 lg:gap-x-12 xl:gap-x-20 gap-y-4">
        <div className="md:w-1/2 md:p-4 xl:p-12">
          <h3 className="hidden md:block text-3xl font-medium">Awareness Detection</h3>
          <p>
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor laborum voluptates praesentium architecto vero consequuntur perspiciatis reprehenderit excepturi nostrum iure quae deleniti, eaque tempore! Ducimus, sit voluptate. Reiciendis distinctio expedita, dolorum porro earum quod possimus libero? Cumque facere soluta vitae.
          </p>
        </div>
        <div className="md:w-1/2 md:p-4 xl:p-12">
          <Image src={BackgroundImg} alt="Background Image" className="w-full" />
        </div>
      </div>
    </Section>
  );
};

export default Background;
