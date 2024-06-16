import HumansFactors from "../Graphs/HumanFactors";
import Section from "../Section";
import SectionHeader from "../SectionHeader";

const Background = () => {
  return (
    <Section marginTop={true}>
      <SectionHeader
        title="Human factors are primarily responsible for"
        titleHighlight="road accidents"
      />
      <div className="flex flex-col gap-y-12 md:flex-row md:items-center">
        <div className="md:w-1/2 lg:mr-8 lg:w-2/3 xl:mr-24">
          <p className="text-center text-sm md:text-left md:text-md">
            Addressing human factors in road accidents is crucial for enhancing
            safety. Understanding and mitigating human errors can significantly
            reduce accident rates, saving lives and preventing injuries on the
            road.
          </p>
        </div>
        <div className="md:w-1/2">
          <HumansFactors />
        </div>
      </div>
    </Section>
  );
};

export default Background;
