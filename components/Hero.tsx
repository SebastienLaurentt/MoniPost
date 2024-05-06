import { Medal } from "lucide-react";
import Link from "next/link";
import Section from "./Section";
import { Button } from "./ui/button";
import EiffelLogo from "../public/images/Eiffel.svg";
import Lyon1Logo from "../public/images/Lyon1.jpg";
import UniversityLogo from "../public/images/UniversityLyon.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <Section classname="flex flex-col  pt-36 pb-20 items-center text-center  ">
      <ul className="flex flex-row justify-between items-center gap-x-4 w-[300px] md:w-[400px]">
        <li className="w-1/3">
          <Image src={EiffelLogo} alt="University Eiffel Logo" className="w-full" />
        </li>
        <li className="w-1/3">
          <Image src={Lyon1Logo} alt="University Lyon 1 Logo" className="w-full" />
        </li>
        <li className="w-1/3">
          <Image src={UniversityLogo} alt="University Lyon Logo" className="w-full" />
        </li>
      </ul>
      <div className=" flex flex-col items-center gap-y-4">
        <h1>
          Moni<span className="text-primary">Post</span> helps world to <br />{" "}
          <span className="bg-primary text-secondary p-2 rounded-lg">
            drive safer.
          </span>
        </h1>
        <p className="w-[340px] md:w-[540px] text-[14px] md:text-[16px]">
          Collect, analyze and make driving experience safer with postural data.
          We provide you a innovative way to create a safer driving experience.
        </p>
        <Button>
          <Link href="#price">Get MoniPost for free</Link>
        </Button>
      </div>
    </Section>
  );
};

export default Hero;
