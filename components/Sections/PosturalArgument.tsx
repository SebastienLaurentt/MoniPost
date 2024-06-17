"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect } from "react";
import Section from "../Section";
import SectionHeader from "../SectionHeader";

gsap.registerPlugin(ScrollTrigger);

const PosturalArgument = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#postural-section",
        start: "top center+=100",
      },
    });
    tl.fromTo(
      "#postural-element1",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1 }
    );
    tl.fromTo(
      "#postural-element2",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1 },
      "<"
    );
    tl.fromTo(
      "#postural-element3",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1 },
      "<"
    );
    tl.fromTo(
      "#postural-element4",
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
    <Section id="postural-section" marginTop={true} marginBottom={true}>
      <div className="flex flex-col gap-y-4 lg:items-center lg:gap-x-16 xl:flex-row">
        <div className="xl:w-3/4">
          <div className="flex flex-row justify-center xl:justify-start">
            <span
              id="postural-element1"
              className="mb-2 rounded-full border-4 border-primary px-3 text-lg font-extrabold opacity-0 xl:px-4 xl:text-2xl"
            >
              3
            </span>
          </div>
          <SectionHeader
            id="postural-element2"
            title="Postural data offers a"
            titleHighlight="better model"
            classname="opacity-0 mx-auto"
            textPosition="text-center items-center xl:items-start"
          />
          <p
            id="postural-element3"
            className="text-center text-sm opacity-0 md:text-md xl:text-left"
          >
            To address the lack of data, we were able to establish a
            large-scale, high-quality annotated dataset within the
            vehicle&apos;s interior, leveraging 3D modeling. Through deep
            learning in artificial intelligence, we developed software aimed at
            estimating the driver&apos;s posture from an image, more accurately
            and reliably than the state of the art, to better understand the
            driver&apos;s condition.
          </p>
        </div>
        <div className="rounded-md opacity-0" id="postural-element4">
          <Image
            src="/images/Posture.jpg"
            alt="DMS"
            width={1000}
            height={500}
            className="rounded-lg "
          />
        </div>
      </div>
    </Section>
  );
};

export default PosturalArgument;
