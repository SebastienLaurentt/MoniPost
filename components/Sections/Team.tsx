import Image from "next/image";
import FounderImg from "../../public/images/Founder.jpg";
import Section from "../Section";

const Team = () => {
  return (
    <Section classname="mt-12 xl:mt-16">
      <div className="2xl:px-28">
        <div className="mb-4 flex flex-col items-center text-center">
          <h2 className="">Team</h2>
          <h3 className="md:w-[300px]">They Found MoniPost</h3>
        </div>
        <div className="flex flex-col md:w-full md:flex-row md:items-center md:justify-center lg:px-12 xl:px-28">
          <div className=" mb-2  md:mx-auto md:mb-0 md:w-1/2 md:px-8  ">
            <Image
              src={FounderImg}
              alt="Founder profil pic"
              className="rounded-xl"
            />
          </div>
          <div className="md:w-1/2">
            <span className="text-lg font-semibold lg:text-xl">
              Mingming Zhao
            </span>
            <p className="md:mt-2 lg:text-md">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repudiandae aut pariatur, repellendus aspernatur at possimus
              dignissimos labore voluptatem libero impedit.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Team;
