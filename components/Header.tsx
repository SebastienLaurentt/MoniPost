"use client";

import { Shield } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import ProjectsDropdown from "./ProjectsDropdown/ProjectsDropdown";

const Header = () => {
  const pathname = usePathname();
  const headerRounded = pathname === "/" ? "rounded-t-md" : "rounded-md";

  return (
    <header className="px-2 pt-2 md:px-6 md:pt-6 ">
      <div
        className={`mx-auto max-w-[2000px] ${headerRounded} bg-primary p-4 md:px-10 xl:px-16 xl:py-6`}
      >
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
          <nav className="hidden lg:block">
            <ul className="flex flex-row items-center gap-x-4 text-md text-white">
              <li>
                <Link
                  href="/#background-section"
                  aria-label="Background section link"
                  className="lg:hover:underline lg:hover:underline-offset-2"
                >
                  Background
                </Link>
              </li>
              <li>
                <Link
                  href="/#models-section"
                  aria-label="Models section link"
                  className="lg:hover:underline lg:hover:underline-offset-2"
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/#prices-section"
                  aria-label="Prices section link"
                  className="lg:hover:underline lg:hover:underline-offset-2"
                >
                  Prices
                </Link>
              </li>
              <li>
                <Link
                  href="/#team-section"
                  aria-label="Team section link"
                  className="lg:hover:underline lg:hover:underline-offset-2"
                >
                  Team
                </Link>
              </li>
            </ul>
          </nav>
          <ProjectsDropdown />
        </div>
      </div>
    </header>
  );
};

export default Header;
