import Image from "next/image";
import Section from "../Section";
import SectionHeader from "../SectionHeader";

const Dms = () => {
  return (
    <Section marginTop={true}>
      <SectionHeader title="Current models lack" titleHighlight="precision" />
      <div className="flex flex-col md:flex-row md:items-center gap-y-4 lg:px-12 xl:px-32">
        <div className="md:w-1/2">
          <p>
            Driver monitoring systems, or DMS, are emerging as a promising
            technology to assess a driver&apos;s attention and behavior while
            driving, with potential intervention if needed. General safety
            regulations and the EuroNCAP program promote widespread adoption of
            DMS technology. According to a report, the DMS market is expected to
            reach $4.72 billion by 2030. However, the performance of existing
            DMS is unsatisfactory due to a lack of labeled data, particularly
            postural data.
          </p>
        </div>
        <div>
          <Image src="/images/DMS.png" alt="DMS" width={500} height={500} />
        </div>
      </div>
    </Section>
  );
};

export default Dms;
