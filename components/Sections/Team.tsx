"use client";

import gsap from "gsap";
import { Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import FounderImg from "../../public/images/Founder.jpg";
import Section from "../Section";

const Team = () => {
  useEffect(() => {
    // Animation GSAP
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#team-section",
        start: "top center+=50",
      },
    });

    tl.fromTo(
      "#team-element1",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1 }
    );

    tl.fromTo(
      "#team-element2",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1 },
      "<"
    );

    tl.fromTo(
      "#team-element3",
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
    <Section marginBottom={true} id="team-section">
      <div className="2xl:px-28">
        <div
          id="team-element1"
          className="mb-4 flex flex-col items-center text-center opacity-0"
        >
          <h2 className="">Team</h2>
          <h3 className="md:w-[300px]">They Found MoniPost</h3>
        </div>
        <div className="flex flex-col md:w-full md:flex-row md:items-center md:justify-center lg:px-12 xl:px-28">
          <div
            id="team-element2"
            className=" mb-2 opacity-0  md:mx-auto md:mb-0 md:w-1/2 md:px-8  "
          >
            <Image
              src={FounderImg}
              alt="Founder profil pic"
              className="rounded-xl"
            />
          </div>
          <div id="team-element3" className="opacity-0 md:w-1/2">
            <span className=" flex flex-row justify-center text-lg font-semibold leading-5 md:justify-start lg:text-xl  lg:leading-6">
              Mingming Zhao
            </span>
            <p className="my-2 text-center md:text-left lg:text-md">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repudiandae aut pariatur, repellendus aspernatur at possimus
              dignissimos labore voluptatem libero impedit.
            </p>
            <ul className="flex flex-row items-center justify-center gap-x-4 md:justify-start">
              <li>
                <Link
                  href="https://www.linkedin.com/in/mingming-zhao-23b13a146/"
                  target="_blank"
                  aria-label="Linkedin Mingming Zhao"
                >
                  <Linkedin className="size-6" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://orcid.org/0000-0003-4355-7688"
                  className="size-6 rounded-full bg-secondary p-1 font-semibold text-secondary-foreground"
                  target="_blank"
                  aria-label="ORCID Mingming Zhao"
                >
                  ID
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Team;
