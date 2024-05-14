import { HumansFactors } from "../Graphs/HumanFactors";
import Section from "../Section";
import SectionHeader from "../SectionHeader";

const Background = () => {
  return (
    <Section marginTop={true}>
      <SectionHeader title="Human factors in" titleHighlight="accidents" />
      <div className="flex flex-col lg:flex-row lg:items-center  lg:gap-x-8  gap-y-4">
        <div className="lg:w-1/3 lg:p-4 xl:p-12">
          <h3 className="hidden lg:block text-3xl font-medium">
            Awareness Detection
          </h3>
          <p>
            Posture measurement can provide fundamental information for
            understanding driver behavior. Posture measurement can provide
            fundamental information for understanding driver behavior. Posture
            measurement can provide fundamental information for understanding
            driver behavior
          </p>
        </div>
        <div className="lg:w-2/3 lg:p-4 xl:p-12">
          <HumansFactors />
        </div>
      </div>
    </Section>
  );
};

export default Background;
