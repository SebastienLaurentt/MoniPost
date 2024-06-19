'use client'

import { Shield } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const headerRounded = pathname === "/" ? "rounded-t-md" : "rounded-md";

  return (
    <header className="px-2 pt-2 md:px-6 md:pt-6">
      <div className={`w-full ${headerRounded} bg-primary p-4 md:px-10 xl:px-16 xl:py-6`}>
        <div className="mx-auto flex flex-row justify-between xl:max-w-screen-xl">
          <Link href="/" className="flex flex-row items-center gap-x-2">
            <Shield
              color="white"
              className="size-6 md:size-8"
              strokeWidth={3}
            />
            <span className=" text-md font-bold text-secondary-foreground md:text-lg">
              MoniPost
            </span>
          </Link>
          <nav>
            <ul className="flex flex-row items-center gap-x-4">
              <li>
                <Button className="font-bold">
                  <Link href="/#price-section">Get MoniPost</Link>
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
