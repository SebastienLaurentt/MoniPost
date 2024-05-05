import { Car } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="w-full">
      <div className="px-4 md:px-10 py-4 xl:px-16 flex flex-row justify-between">
        <Link href="/" className="flex flex-row gap-x-2 items-center">
          <Car />
          <span className="font-bold">
            Moni<span className="text-primary">Post</span>
          </span>
        </Link>
        <nav>
          <ul className="flex flex-row items-center gap-x-4">
            <li>
              <Button>
                <Link href="#price">Get MoniPost for free</Link>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
