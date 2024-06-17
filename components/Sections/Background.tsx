"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import HumansFactors from "../Graphs/HumanFactors";
import Section from "../Section";
import SectionHeader from "../SectionHeader";

gsap.registerPlugin(ScrollTrigger);

const Background = () => {
  useEffect(() => {
    // Animation GSAP
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#background-section",
        start: "top center+=300",
      },
    });
    tl.fromTo(
      "#background-element1",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 0.8 }
    );
    tl.fromTo(
      "#background-element2",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1 },
      "<"
    );
    tl.fromTo(
      "#background-element3",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1 },
      "<"
    );
    tl.fromTo(
      "#background-element4",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 0.3 },
      "<"
    );

    // Clean up
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <Section id="background-section" classname="mt-12 xl:mt-16">
      <div className="flex flex-col md:items-center">
        <div className="flex flex-row justify-center">
          <span
            id="background-element1"
            className="mb-2 rounded-full border-4 border-primary px-3 text-lg font-extrabold opacity-0 xl:px-4 xl:text-2xl"
          >
            1
          </span>
        </div>
        <SectionHeader
          id="background-element2"
          title="Human factors are primarily responsible for"
          titleHighlight="road accidents"
          classname="opacity-0 mx-auto"
          textPosition="text-center items-center"
        />
        <div className="flex flex-col md:w-full md:flex-row md:items-center md:gap-x-2 lg:mt-6 lg:gap-x-4">
          <p
            id="background-element3"
            className="mb-4 text-center text-sm opacity-0 md:w-[400px] md:text-left md:text-md lg:w-[600px] xl:mb-0"
          >
            Addressing human factors in road accidents is crucial for enhancing
            safety. Understanding and mitigating human errors can significantly
            reduce accident rates, saving lives and preventing injuries on the
            road.
          </p>
          <div
            id="background-element4"
            className="w-[350px] opacity-0 md:mx-auto 2xl:w-[609px]"
          >
            <HumansFactors />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Background;
