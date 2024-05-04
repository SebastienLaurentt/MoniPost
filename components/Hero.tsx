import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="flex flex-col h-full justify-center items-center text-center gap-y-4 mx-6 md:mx-6">
      <h1>
        Moni<span className="text-primary">Post</span> helps world to <br /> <span className="bg-primary text-secondary p-2 rounded-lg"> drive safe.</span> 
      </h1>
      <p className="w-[300px] md:w-[540px]">
        Collect, analyze and make driving experience safer with postural data. We provide you a innovative way to create a safer driving experience. 
      </p>
      <Button>Get MoniPost for free</Button>
    </div>
  );
};

export default Hero;
