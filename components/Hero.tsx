import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="flex flex-col h-full justify-center items-center gap-y-2">
      <h1>
        Moni <span className="text-accent">Post</span> helps world to drive safe
      </h1>
      <p>
        Collect, analyze and make driving experience safer with postural data
      </p>
      <Button>Get MoniPost for free</Button>
    </div>
  );
};

export default Hero;
