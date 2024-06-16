import PriceCard from "../PriceCard";
import Section from "../Section";
import SectionHeader from "../SectionHeader";

const Price = () => {
  return (
    <Section marginTop={true} id="price">
      <SectionHeader title="Choose your right" titleHighlight="plan" />

      <ul className="flex flex-col gap-y-8 lg:flex-row lg:justify-between lg:gap-x-4">
        <li>
          <PriceCard
            forfait="Basic"
            forfaitDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            price={0}
          />
        </li>
        <li>
          <PriceCard
            forfait="Premium"
            forfaitDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. "
            price={19.99}
          />
        </li>
        <li>
          <PriceCard
            forfait="Enterprise"
            forfaitDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            price={39.99}
          />
        </li>
      </ul>
    </Section>
  );
};

export default Price;
