import { Shield } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="w-full bg-primary p-4 md:px-10 xl:px-16 xl:py-6">
      <div className="mx-auto flex flex-row justify-between xl:max-w-screen-xl">
        <Link href="/" className="flex flex-row items-center gap-x-2">
          <Shield color="white" size={36} strokeWidth={3} />
          <span className="text-lg font-bold text-secondary-foreground">
            MoniPost
          </span>
        </Link>
        <nav>
          <ul className="flex flex-row items-center gap-x-4">
            <li>
              <Button className="font-bold">
                <Link href="/#price">Get MoniPost</Link>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
