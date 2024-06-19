"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect } from "react";
import BackgroundImg from "../../public/images/Background.svg";
import Section from "../Section";

gsap.registerPlugin(ScrollTrigger);

const Background = () => {
  useEffect(() => {
    // Animation GSAP
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#background-section",
        start: "top center+=350",
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
        <div className="mb-2 flex flex-col items-center text-center">
          <h2 id="background-element1" className="opacity-0">Background</h2>
          <h3 id="background-element2" className="opacity-0 md:w-[400px]">
            Humans factors mainly causes road accidents
          </h3>
        </div>

        <div className="flex flex-col md:w-full md:flex-row md:items-center md:gap-x-6 2xl:px-28">
          <p
            id="background-element3"
            className="mb-2 text-center text-sm opacity-0 md:w-1/2 md:text-left lg:text-md xl:mb-0"
          >
            Addressing human factors in road accidents is crucial for enhancing
            safety. Understanding and mitigating human errors can significantly
            reduce accident rates, saving lives and preventing injuries on the
            road.
          </p>
          <div
            id="background-element4"
            className="mx-auto opacity-0 md:w-1/2 lg:w-3/5 2xl:w-[609px]"
          >
            <Image src={BackgroundImg} alt="car crash image" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Background;
