"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect } from "react";
import Section from "../Section";

gsap.registerPlugin(ScrollTrigger);

const Faq = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#faq-section",
        start: "top center+=200",
      },
    });

    tl.fromTo(
      "#faq-title",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1 }
    );
    tl.fromTo(
      "#faq-subtitle",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1 },
      "<"
    );

    tl.fromTo(
      "#faq-accordion",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1 },
      "<"
    );

    tl.fromTo(
      "#faq-image",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1 },
      "<"
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <Section id="faq-section" classname="z-30">
      <div className="mb-3 flex flex-col items-center text-center md:mb-4">
        <h2 id="faq-title" className="opacity-0">
          Faq
        </h2>
        <h3 id="faq-subtitle" className="w-[260px] opacity-0 md:w-[300px]">
          Frequently Asked Questions
        </h3>
      </div>
      <div className="flex flex-row items-center justify-center lg:gap-x-8 xl:gap-x-16">
        <div className="hidden opacity-0 lg:flex lg:w-1/2" id="faq-image">
          <Image
            src="/images/Faq.svg"
            alt="FAQ image (Credits : https://storyset.com/illustration/faq/bro)"
            width={500}
            height={500}
            className="w-full rounded-lg"
          />
        </div>
        <div className="w-full opacity-0 lg:w-1/2" id="faq-accordion">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Is MoniPost free for academics ?
              </AccordionTrigger>
              <AccordionContent>
                <span tabIndex={0}>
                  Yes, MoniPost is free for academic purposes.
                </span>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger> What is the data format? </AccordionTrigger>
              <AccordionContent>
                <span tabIndex={0}>The data format is a XXX file.</span>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How can I ask more questions?</AccordionTrigger>
              <AccordionContent>
                <span tabIndex={0}>
                  You can ask more questions by contacting us at this email :
                  monipost@contact.com
                </span>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Lorem ipsum dolor sit amet ?</AccordionTrigger>
              <AccordionContent>
                <span tabIndex={0}>Lorem ipsum dolor sit amet.</span>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </Section>
  );
};

export default Faq;
