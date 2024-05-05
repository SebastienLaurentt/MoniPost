import { Check } from "lucide-react";
import { Button } from "./ui/button";

interface PriceCardProps {
  forfait: string;
  forfaitDescription: string;
  price: number;
}

const PriceCard = ({ forfait, forfaitDescription, price }: PriceCardProps) => {
  return (
    <div>
      <div>
        <h3>{forfait}</h3>
        <span>{forfaitDescription}</span>
      </div>
      <div>
        <span>
          <span>${price}</span> <span> /month</span>
        </span>
        <Button>Choose</Button>
      </div>
      <div>
        <span className="flex flex-row gap-x-2">
          <span>
            <Check />
          </span>
          <span>Lorem, ipsum dolor.</span>
        </span>
        <span className="flex flex-row gap-x-2">
          <span>
            <Check />
          </span>
          <span>Lorem, ipsum dolor.</span>
        </span>
        <span className="flex flex-row gap-x-2">
          <span>
            <Check />
          </span>
          <span>Lorem, ipsum dolor.</span>
        </span>
        <span className="flex flex-row gap-x-2">
          <span>
            <Check />
          </span>
          <span>Lorem, ipsum dolor.</span>
        </span>
        <span></span>
      </div>
    </div>
  );
};

export default PriceCard;
