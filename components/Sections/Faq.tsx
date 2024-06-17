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
import SectionHeader from "../SectionHeader";

gsap.registerPlugin(ScrollTrigger);

const Faq = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#faq-section",
        start: "top center+=100",
      },
    });

    tl.fromTo(
      "#faq-title",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1 }
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
    <Section id="faq-section" marginTop={true} marginBottom={true}>
      <SectionHeader
        title="Frequently Asked"
        titleHighlight=" Questions"
        classname=" mx-auto opacity-0"
        textPosition="text-center items-center"
        id="faq-title"
      />
      <div className="flex flex-row items-center justify-center lg:gap-x-8 xl:gap-x-16">
        <div
          className="hidden opacity-0 lg:flex lg:w-1/3 xl:w-1/3"
          id="faq-image"
        >
          <Image
            src="/images/faq.png"
            alt="DMS"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
        <div className="w-full opacity-0 lg:w-2/3 xl:w-1/2" id="faq-accordion">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Is MoniPost free for academics purposes?
              </AccordionTrigger>
              <AccordionContent>
                Yes, MoniPost is free for academics purposes.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger> What is the data format? </AccordionTrigger>
              <AccordionContent>
                The data format is a XXX file.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How can I ask more questions?</AccordionTrigger>
              <AccordionContent>
                You can ask more questions by contacting us at
                monipost@contact.com.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Lorem ipsum dolor sit amet.</AccordionTrigger>
              <AccordionContent>Lorem ipsum dolor sit amet.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </Section>
  );
};

export default Faq;
