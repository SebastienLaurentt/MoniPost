import Image from "next/image";
import Section from "../Section";
import SectionHeader from "../SectionHeader";

const Dms = () => {
  return (
    <Section marginTop={true}>
      <SectionHeader
        title="Current models lack"
        titleHighlight="precision"
        classname="2xl:hidden mx-auto"
        textPosition="text-center"
      />
      <div className="flex flex-col gap-y-4 lg:flex-row-reverse lg:items-center lg:gap-x-16 ">
        <div className="lg:w-3/4">
          <SectionHeader
            title="Current models lack"
            titleHighlight="precision"
            classname="hidden 2xl:flex"
            textPosition="text-left"
          />
          <p className="text-center text-sm md:text-md lg:text-left">
            Driver monitoring systems, or DMS, are emerging as a promising
            technology to assess a driver&apos;s attention and behavior while
            driving, with potential intervention if needed. However, the
            performance of existing DMS is unsatisfactory due to a lack of
            labeled data, particularly postural data.
          </p>
        </div>
        <div>
          <Image
            src="/images/DMS.jpg"
            alt="DMS"
            width={1000}
            height={500}
            className="rounded-lg"
          />
        </div>
      </div>
    </Section>
  );
};

export default Dms;
