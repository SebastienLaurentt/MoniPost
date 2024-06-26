import { BriefcaseBusiness, Check, CirclePlay, FileText } from "lucide-react";
import { Button } from "./ui/button";

interface PriceCardProps {
  forfait: string;
  forfaitDescription: string;
  price: number;
  iconType?: "CirclePlay" | "FileText" | "BriefcaseBusiness";
  isFavorite?: boolean;
}

const iconComponents = {
  CirclePlay: CirclePlay,
  FileText: FileText,
  BriefcaseBusiness: BriefcaseBusiness,
};

const PriceCard = ({
  forfait,
  forfaitDescription,
  price,
  iconType = "CirclePlay",
  isFavorite,
}: PriceCardProps) => {
  const IconComponent = iconComponents[iconType];

  const bgColor = isFavorite ? "bg-secondary" : "";
  const textColor = isFavorite ? "text-white" : "";
  const buttonStyle = isFavorite
    ? "bg-emerald-600 text-md text-secondary-foreground hover:bg-emerald-600/80"
    : "bg-secondary text-md text-secondary-foreground hover:bg-secondary/80";

  const iconStyle = isFavorite
    ? "bg-background text-foreground"
    : "bg-secondary text-secondary-foreground";

  const checkStyle = isFavorite
    ? "text-foreground bg-background"
    : "bg-secondary text-secondary-foreground";

  return (
    <div
      className={`relative flex flex-col overflow-hidden rounded-xl border p-4 ${bgColor} ${textColor}`}
    >
      <div className="border-b px-2 pb-8 pt-4 text-left">
        <IconComponent
          className={`mb-2 size-12 rounded-full p-3 ${iconStyle}`}
        />
        <span className="text-xl font-bold">{forfait}</span>
        <span className="block italic xl:w-[320px]">{forfaitDescription}</span>
      </div>
      <div className="flex flex-col gap-y-2 border-b px-2 py-8">
        <span className="">
          <span className="text-3xl font-bold">${price}</span>{" "}
          <span> /month</span>
        </span>
        <Button variant="price" size="price" className={`${buttonStyle}`}>
          Get Started
        </Button>
      </div>
      <div className="flex flex-col gap-y-2 px-2 pb-4 pt-8">
        <span className="flex flex-row items-center gap-x-2">
          <span className={`rounded-full  ${checkStyle} p-0.5`}>
            <Check className="size-6" />
          </span>
          <span>Lorem, ipsum dolor.</span>
        </span>
        <span className="flex flex-row items-center gap-x-2">
          <span className={`rounded-full  ${checkStyle} p-0.5`}>
            <Check className="size-6" />
          </span>
          <span>Lorem, ipsum dolor.</span>
        </span>
        <span className="flex flex-row items-center gap-x-2">
          <span className={`rounded-full  ${checkStyle} p-0.5`}>
            <Check className="size-6" />
          </span>
          <span>Lorem, ipsum dolor.</span>
        </span>
        <span className="flex flex-row items-center gap-x-2">
          <span className={`rounded-full  ${checkStyle} p-0.5`}>
            <Check className="size-6" />
          </span>
          <span>Lorem, ipsum dolor.</span>
        </span>
        {isFavorite && (
          <div className="absolute -right-14 top-6 flex h-8 w-48 rotate-45 items-center justify-center bg-emerald-600 text-center font-bold uppercase text-secondary-foreground">
            {" "}
            Favorite{" "}
          </div>
        )}
        {isFavorite && (
          <div className="absolute left-20 size-[1000px] rounded-full  border border-gray-800 bg-secondary/50 md:left-60 lg:left-20 " />
        )}
      </div>
    </div>
  );
};

export default PriceCard;
