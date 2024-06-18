"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, CircleX, Minus } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import DmsImg from "../../public/images/DMS.svg";
import PosturalImg from "../../public/images/Postural.svg";
import Section from "../Section";

gsap.registerPlugin(ScrollTrigger);

const Models = () => {
  useEffect(() => {
    // Animation GSAP
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#dms-section",
        start: "top center+=100",
      },
    });

    tl.fromTo(
      "#model1",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1 }
    );
    tl.fromTo(
      "#model2",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5 },
      "<"
    );

    // Clean up
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <Section id="dms-section" marginTop={true}>
      <ul className="flex flex-col gap-y-4 md:flex-row md:gap-x-8 md:gap-y-0 lg:text-md 2xl:px-28">
        <li id="model1" className="rounded-md border p-4 opacity-0 xl:p-6">
          <h3 className="text-center">Current Models</h3>
          <ul className="my-4 space-y-1">
            <li className="flex flex-row gap-x-2">
              <Minus /> Driver monitoring systems (DMS)
            </li>
            <li className="flex flex-row gap-x-2">
              <Minus /> Promising technology
            </li>
            <li className="flex flex-row gap-x-2">
              <Minus /> Assess driver&apos;s attention and behavior
            </li>
            <li className="flex flex-row items-center gap-x-2 font-bold text-red-500 md:text-md lg:text-lg">
              <CircleX /> Lack of labeled data
            </li>
          </ul>
          <div className="px-8 xl:px-24">
            <Image src={DmsImg} alt="dms" />
          </div>
        </li>
        <li id="model2" className="rounded-md border-2 border-primary p-4  opacity-0 xl:p-6">
          <h3 className="text-center">MoniPost Model</h3>
          <ul className="my-4 space-y-1">
            <li className="flex flex-row gap-x-2">
              <Minus /> Driver monitoring systems (DMS)
            </li>
            <li className="flex flex-row gap-x-2">
              <Minus /> Promising technology
            </li>
            <li className="flex flex-row gap-x-2">
              <Minus /> Assess driver&apos;s attention and behavior
            </li>
            <li className="flex flex-row items-center gap-x-2 font-bold text-primary-foreground md:text-md lg:text-lg">
              <Check /> Add Postural Data
            </li>
          </ul>
          <div className="px-8 xl:px-24">
            <Image src={PosturalImg} alt="dms" />
          </div>
        </li>
      </ul>
    </Section>
  );
};

export default Models;
