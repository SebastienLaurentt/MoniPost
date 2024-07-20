"use client";

import { Heart, Linkedin, Shield } from "lucide-react";
import Link from "next/link";
import WaitList from "./WaitList";

const Footer = () => {
  return (
    <footer className="sticky bottom-0 -z-10 w-full px-2 pb-4 md:px-6 md:pb-6">
      <div className=" mx-auto max-w-[2000px] rounded-lg bg-primary p-6 text-secondary-foreground md:pt-8 lg:pt-12 xl:px-16 ">
        <div className="relative mx-auto flex flex-col xl:max-w-screen-xl">
          <div className="flex flex-row justify-center">
            <div className="flex flex-col items-center gap-y-2 xl:gap-y-4">
              <Link href="/" className="flex flex-row items-center gap-x-2">
                <Shield
                  color="white"
                  className="size-8 lg:size-14"
                  strokeWidth={3}
                />
                <span className="text-3xl font-bold leading-8 lg:text-7xl lg:leading-[48px]">
                  MoniPost
                </span>
              </Link>
              <p className="lg:text-md"> Wanna Try MoniPost Soon ? </p>
              <WaitList />
            </div>
            {/* <div className="absolute bottom-8 right-0 hidden md:flex lg:bottom-12 xl:bottom-8">
              <Image
                src={FooterLogo}
                alt="Safe Driving image (Credits : https://storyset.com/illustration/driving/bro)"
                className=" md:w-[400px] xl:w-[450px]"
              />
            </div> */}
          </div>
          <div className="py-4 md:py-6 lg:py-8">
            <div className="mb-2 flex justify-center">
              <ul className="flex flex-row gap-x-4 xl:text-md">
                <li>
                  <Link
                    href="/#background-section"
                    className="lg:hover:underline lg:hover:underline-offset-2"
                    aria-label="Background section link"
                  >
                    Background
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#models-section"
                    className="lg:hover:underline lg:hover:underline-offset-2"
                    aria-label="Solution section link"
                  >
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#price-section"
                    className="lg:hover:underline lg:hover:underline-offset-2"
                    aria-label="Prices section link"
                  >
                    Prices
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#team-section"
                    className="lg:hover:underline lg:hover:underline-offset-2"
                    aria-label="Team section link"
                  >
                    Team
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mb-3">
              <ul className="flex flex-row items-center justify-center gap-x-3 text-foreground">
                <li>
                  <Link
                    href="https://www.linkedin.com/in/mingming-zhao-23b13a146/"
                    target="_blank"
                    aria-label="Linkedin Mingming Zhao"
                  >
                    <Linkedin className="size-6 rounded-sm bg-background p-1" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://orcid.org/0000-0003-4355-7688"
                    className="size-6 rounded-sm bg-background p-1 font-bold"
                    target="_blank"
                    aria-label="ORCID Mingming Zhao"
                  >
                    ID
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mx-auto flex w-full flex-col-reverse items-center justify-center gap-y-1 text-xs text-secondary-foreground/70 md:flex-row md:justify-between md:gap-y-0 md:text-sm lg:justify-center">
            <Link
              href="https://sebastienlaurent.fr"
              className="flex flex-row items-center gap-x-1 md:mr-auto md:hidden lg:flex"
            >
              Made by Sébastien with <Heart className="size-4" fill="white" />
            </Link>
            <span className="lg:absolute ">
              &copy; 2024 MoniPost - All right reserved
            </span>
            <nav className="md:ml-auto">
              <ul className="mt-1 flex w-full flex-row justify-between gap-x-2 md:mt-0 md:gap-x-4">
                <li>
                  <Link
                    href="/privacy"
                    className="lg:hover:underline lg:hover:underline-offset-2"
                    aria-label="Privacy Policy link"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tes"
                    className="lg:hover:underline lg:hover:underline-offset-2"
                    aria-label="Terms of Service link"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
