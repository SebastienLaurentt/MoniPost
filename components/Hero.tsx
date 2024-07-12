"use client";

import gsap from "gsap";
import { ArrowRightIcon, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import EiffelLogo from "../public/images/Eiffel.svg";
import Lyon1Logo from "../public/images/Lyon1.png";
import UniversityLogo from "../public/images/UniversityLyon.svg";
import Section from "./Section";
import AnimatedShinyText from "./ui/animated-shiny-text";
import { Button } from "./ui/button";
import WaitList from "./WaitList";

const Hero = () => {
  useEffect(() => {
    const screenWidth = window.innerWidth;
    // Hero Text Animation
    gsap.fromTo(
      "#hero-title",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1 }
    );
    gsap.fromTo(
      "#hero-description",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1 }
    );
    gsap.fromTo(
      "#hero-button",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1 }
    );
    gsap.fromTo(
      "#hero-partners",
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 0.5 }
    );
    gsap.fromTo(
      "#hero-introducing",
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 0.5 }
    );
  }, []);

  return (
    <div className="bg-background px-2 pb-2 md:px-6 md:pb-6 ">
      <Section classname="relative overflow-hidden flex flex-col pt-16 pb-16 items-center text-center bg-primary rounded-b-md">
        <div className="flex flex-col items-center text-white">
          <Link
            href="/#background-section"
            id="hero-introducing"
            className="opacity-0"
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4  transition ease-out hover:text-neutral-600 hover:duration-300">
              <Shield className="mr-1 size-4 md:size-6" />
              <span className="text-xs md:text-sm"> Introducing MoniPost</span>
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </Link>
          <div className="my-6 flex w-full flex-col justify-center">
            <h1 id="hero-title" className="mb-3 opacity-0">
              Enhance Driving Safety. <br /> Empowering Safer Journeys.
            </h1>
            <p
              id="hero-description"
              className="mx-auto w-[340px] text-[14px] opacity-0 md:w-[540px] md:text-md"
            >
              An innovative way to create safer driving experiences through
              scientific analysis of postural data
            </p>
          </div>
          <WaitList />
        </div>
        <div
          id="hero-partners"
          className="mt-8 flex flex-col items-center opacity-0"
        >
          <ul className="flex w-[300px] flex-row items-center justify-between gap-x-4 md:w-[400px] lg:w-[500px] lg:gap-x-6 xl:w-[600px] xl:gap-x-8">
            <li className="w-1/3">
              <Image
                src={EiffelLogo}
                alt="University Eiffel Logo"
                className="w-full"
              />
            </li>
            <li className="w-1/3">
              <Image
                src={Lyon1Logo}
                alt="University Lyon 1 Logo"
                className="w-full"
              />
            </li>
            <li className="w-1/3">
              <Image
                src={UniversityLogo}
                alt="University Lyon Logo"
                className="w-full"
              />
            </li>
          </ul>
          {/* <video preload="yes" autoPlay loop muted className="xl:w-4/5">
          <source src="../videos/HeroVid.mp4" type="video/mp4" />
        </video> */}
        </div>
        <div className="absolute left-8 size-[1000px] rounded-full border  border-white bg-secondary/50 md:left-80 lg:left-[800px] lg:top-40 xl:left-[1000px] xl:top-60 2xl:left-[1600px] 2xl:top-80" />
      </Section>
    </div>
  );
};

export default Hero;
