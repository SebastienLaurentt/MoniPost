"use client";

import gsap from "gsap";
import { useEffect } from "react";
import PriceCard from "../PriceCard";
import Section from "../Section";

const Price = () => {
  useEffect(() => {
    // Animation GSAP
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#price-section",
        start: "top center+=200",
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
      { opacity: 1, y: 0, duration: 1 },
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
    tl.fromTo(
      "#price-element5",
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
    <Section marginBottom={true} id="price-section">
      <div className="mb-3 flex flex-col items-center text-center md:mb-4">
        <h2 id="price-element1" className="opacity-0">
          Prices
        </h2>
        <h3 id="price-element2" className="w-[260px] opacity-0 md:w-[300px]">
          Choose Your Right Plan
        </h3>
      </div>

      <ul className="flex flex-col gap-y-8 md:px-8 lg:flex-row lg:justify-around lg:gap-x-4 lg:px-0">
        <li id="price-element3">
          <PriceCard
            forfait="Starter"
            forfaitDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            price={0}
            iconType="CirclePlay"
          />
        </li>
        <li id="price-element4">
          <PriceCard
            forfait="Premium"
            forfaitDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. "
            price={19.99}
            iconType="FileText"
          />
        </li>
        <li id="price-element5">
          <PriceCard
            forfait="Enterprise"
            forfaitDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            price={39.99}
            iconType="BriefcaseBusiness"
            isFavorite={true}
          />
        </li>
      </ul>
    </Section>
  );
};

export default Price;
