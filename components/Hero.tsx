import { Medal } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="flex flex-col h-full justify-center items-center text-center gap-y-3 mx-6 md:mx-6">
      <span className="flex flex-row px-4 py-2 rounded-full gap-x-2 items-center border font-semibold bg-yellow-500"><Medal className="size-12"/> N°1 Start Up Innovation </span>
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
