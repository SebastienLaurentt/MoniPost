"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect } from "react";
import Section from "../Section";
import SectionHeader from "../SectionHeader";

gsap.registerPlugin(ScrollTrigger);

const Dms = () => {
  useEffect(() => {
    // Animation GSAP
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#dms-section",
        start: "top center+=100",
      },
    });

    tl.fromTo(
      "#dms-element1",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1 }
    );

    tl.fromTo(
      "#dms-element2",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1 },
      "<" 
    );
    tl.fromTo(
      "#dms-element3",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1 },
      "<"
    );
    tl.fromTo(
      "#dms-element4",
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
    <Section id="dms-section" marginTop={true}>
      <div className="flex flex-col gap-y-4 lg:flex-row-reverse lg:items-center lg:gap-x-16">
        <div className="lg:w-3/4">
          <div className="flex flex-row justify-center xl:justify-start">
            <span
              id="dms-element1"
              className="mb-2 rounded-full border-4 border-primary px-3 text-lg font-extrabold opacity-0 xl:px-4 xl:text-2xl"
            >
              2
            </span>
          </div>
          <SectionHeader
            id="dms-element2"
            title="Current models lack"
            titleHighlight="precision"
            classname="opacity-0 mx-auto"
            textPosition="text-center items-center xl:items-start"
          />
          <p
            id="dms-element3"
            className="text-center text-sm opacity-0 md:text-md lg:text-left"
          >
            Driver monitoring systems, or DMS, are emerging as a promising
            technology to assess a driver&apos;s attention and behavior while
            driving, with potential intervention if needed. However, the
            performance of existing DMS is unsatisfactory due to a lack of
            labeled data, particularly postural data.
          </p>
        </div>
        <div className="rounded-md opacity-0" id="dms-element4">
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
