
import HumansFactors from "../Graphs/HumanFactors";
import Section from "../Section";
import SectionHeader from "../SectionHeader";

const Background = () => {
  return (
    <Section marginTop={true} dark={true}>
      <SectionHeader
        title="Human factors are primarily responsible for"
        titleHighlight="road accidents"
      />
      <div className="flex flex-col md:flex-row md:items-center gap-y-12 xl:px-32">
        <div className="md:w-1/2 lg:w-2/3 lg:mr-8 xl:mr-24">
          <p className="text-center md:text-left text-sm md:text-md">
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
