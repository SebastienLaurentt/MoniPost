import Image from "next/image";
import Section from "../Section";
import SectionHeader from "../SectionHeader";

const Dms = () => {
  return (
    <Section marginTop={true} dark={true}>
      <SectionHeader title="Current models lack" titleHighlight="precision" />
      <div className="flex flex-col lg:flex-row-reverse lg:items-center gap-y-4 lg:gap-x-16  xl:px-32">
        <div className="lg:w-3/4">
          <p className="text-center lg:text-left text-sm md:text-md">
            Driver monitoring systems, or DMS, are emerging as a promising
            technology to assess a driver&apos;s attention and behavior while
            driving, with potential intervention if needed.  However, the performance of existing DMS is
            unsatisfactory due to a lack of labeled data, particularly postural
            data.
          </p>
        </div>
        <div>
          <Image src="/images/DMS.jpg" alt="DMS" width={1000} height={500} className='rounded-lg' />
        </div>
      </div>
    </Section>
  );
};

export default Dms;
