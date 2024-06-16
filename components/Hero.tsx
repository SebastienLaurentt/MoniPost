import { ArrowRightIcon, Shield } from "lucide-react";
import Link from "next/link";
import Section from "./Section";
import AnimatedShinyText from "./ui/animated-shiny-text";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <Section classname="flex flex-col  pt-36 pb-24 items-center text-center bg-primary">
      <div className=" mb-20 flex flex-col items-center  text-white">
        <AnimatedShinyText className=" inline-flex items-center justify-center px-4  transition ease-out hover:text-neutral-600 hover:duration-300">
          <Shield className="mr-1" />
          <span> Introducing MoniPost</span>
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>
        <div className="my-6 flex w-full flex-col justify-center">
          <h1 className="mb-3">
            Enhance Driving Safety. <br /> Empowering Safer Journeys.
          </h1>
          <p className="mx-auto w-[340px] text-[14px] md:w-[540px] md:text-md">
            Collect, analyze and make driving experience safer with postural
            data. We provide you a innovative way to create a safer driving
            experience.
          </p>
        </div>
        <Button className="font-bold">
          <Link href="/#price">Get MoniPost</Link>
        </Button>
      </div>
      {/* <div className="flex flex-col items-center">
        <ul className="flex flex-row justify-between items-center gap-x-4 w-[300px] md:w-[400px] mb-12">
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
        <video preload="yes" autoPlay loop muted className="xl:w-4/5">
          <source src="../videos/HeroVid.mp4" type="video/mp4" />
        </video>
      </div> */}
    </Section>
  );
};

export default Hero;
