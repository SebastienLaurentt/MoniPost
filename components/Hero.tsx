import { Medal } from "lucide-react";
import { Button } from "./ui/button";
import Section from "./Section";

const Hero = () => {
  return (
    <Section classname="flex flex-col  pt-32 items-center text-center  ">
      <span className="flex flex-row px-4 mb-1 py-2 rounded-full gap-x-2 items-center border font-semibold bg-yellow-500">
        <Medal className="size-12" /> N°1 Start Up Innovation{" "}
      </span>
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
        <Button>Get MoniPost for free</Button>
      </div>
    </Section>
  );
};

export default Hero;
