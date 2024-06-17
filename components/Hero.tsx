import { ArrowRightIcon, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import EiffelLogo from "../public/images/Eiffel.svg";
import Lyon1ss from "../public/images/Lyon1ss.png";
import UniversityLogo from "../public/images/UniversityLyon.svg";
import Section from "./Section";
import AnimatedShinyText from "./ui/animated-shiny-text";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <Section classname="flex flex-col pt-20 pb-20 items-center text-center bg-primary">
      <div className="flex flex-col items-center text-white">
        <AnimatedShinyText className="inline-flex items-center justify-center px-4  transition ease-out hover:text-neutral-600 hover:duration-300">
          <Shield className="mr-1 size-4 md:size-6" />
          <span className="text-xs md:text-sm"> Introducing MoniPost</span>
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>
        <div className="my-6 flex w-full flex-col justify-center">
          <h1 className="mb-3">
            Enhance Driving Safety. <br /> Empowering Safer Journeys.
          </h1>
          <p className="mx-auto w-[340px] text-[14px] md:w-[540px] md:text-md">
            MoniPost enhances driving safety through scientific analysis of
            postural data, offering an innovative way to create safer driving
            experiences.
          </p>
        </div>
        <Button className="font-bold">
          <Link href="/#price">Get MoniPost</Link>
        </Button>
      </div>
      <div className="mt-8 flex flex-col items-center">
        <ul className="mb-12 flex w-[300px] flex-row items-center justify-between gap-x-4 md:w-[400px]">
          <li className="w-1/3">
            <Image
              src={EiffelLogo}
              alt="University Eiffel Logo"
              className="w-full"
            />
          </li>
          <li className="w-1/3">
            <Image
              src={Lyon1ss}
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
    </Section>
  );
};

export default Hero;
