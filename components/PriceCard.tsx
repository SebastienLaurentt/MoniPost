import { Check } from "lucide-react";
import { Button } from "./ui/button";

interface PriceCardProps {
  forfait: string;
  forfaitDescription: string;
  price: number;
}

const PriceCard = ({ forfait, forfaitDescription, price }: PriceCardProps) => {
  return (
    <div className="flex flex-col rounded-xl border p-4">
      <div className="border-b px-2 pb-8 pt-4">
        <h4>{forfait}</h4>
        <span className="block italic  xl:w-[320px]">{forfaitDescription}</span>
      </div>
      <div className="flex flex-col gap-y-2 border-b px-2 py-8">
        <span className="">
          <span className="text-3xl font-bold">${price}</span>{" "}
          <span> /month</span>
        </span>
        <Button
          variant="price"
          size="price"
          className="bg-primary text-lg text-secondary-foreground"
        >
          Choose
        </Button>
      </div>
      <div className="flex flex-col gap-y-2 px-2 pb-4 pt-8 ">
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
