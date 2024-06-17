"use client";

import gsap from "gsap";
import { useEffect } from "react";
import PriceCard from "../PriceCard";
import Section from "../Section";
import SectionHeader from "../SectionHeader";

const Price = () => {
  useEffect(() => {
    // Animation GSAP
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#price-section",
        start: "top center+=50",
      },
    });

    tl.fromTo(
      "#price-element1",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1 }
    );

    tl.fromTo(
      "#price-element2",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1  },
      "<"
    );
    tl.fromTo(
      "#price-element3",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1 },
      "<"
    );
    tl.fromTo(
      "#price-element4",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1 },
      "<"
    );

    // Clean up
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <Section marginTop={true} id="price-section">
      <SectionHeader
        title="Choose your right"
        titleHighlight="plan"
        classname=" mx-auto"
        textPosition="text-center"
        id="price-element1"
      />

      <ul className="flex flex-col gap-y-8 md:px-8 lg:flex-row lg:justify-around lg:gap-x-4 lg:px-0">
        <li id="price-element2">
          <PriceCard
            forfait="Starter"
            forfaitDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            price={0}
          />
        </li>
        <li id="price-element3">
          <PriceCard
            forfait="Premium"
            forfaitDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. "
            price={19.99}
          />
        </li>
        <li id="price-element3">
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
