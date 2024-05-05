import { Check } from "lucide-react";
import { Button } from "./ui/button";

interface PriceCardProps {
  forfait: string;
  forfaitDescription: string;
  price: number;
}

const PriceCard = ({ forfait, forfaitDescription, price }: PriceCardProps) => {
  return (
    <div className="border p-4 rounded-lg flex flex-col">
      <div className="px-2 py-8 border-b">
        <h4>{forfait}</h4>
        <span className="w-[100px]  italic">{forfaitDescription}</span>
      </div>
      <div className="px-2 py-8 border-b flex flex-col gap-y-2">
        <span className="">
          <span className="font-bold text-2xl">${price}</span> <span> /month</span>
        </span>
        <Button>Choose</Button>
      </div>
      <div className="px-2 py-8 ">
        <span className="flex flex-row gap-x-2">
          <span>
            <Check />
          </span>
          <span className="text-foreground/70">Lorem, ipsum dolor.</span>
        </span>
        <span className="flex flex-row gap-x-2">
          <span>
            <Check />
          </span>
          <span className="text-foreground/70">Lorem, ipsum dolor.</span>
        </span>
        <span className="flex flex-row gap-x-2">
          <span>
            <Check />
          </span>
          <span className="text-foreground/70">Lorem, ipsum dolor.</span>
        </span>
        <span className="flex flex-row gap-x-2">
          <span>
            <Check />
          </span>
          <span className="text-foreground/70">Lorem, ipsum dolor.</span>
        </span>
        <span></span>
      </div>
    </div>
  );
};

export default PriceCard;
