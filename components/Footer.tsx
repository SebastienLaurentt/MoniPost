import { Linkedin, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FooterLogo from "../public/images/FooterLogo.svg";

const Footer = () => {
  return (
    <footer className=" px-2 pb-2 md:px-6 md:pb-6 ">
      <div className=" w-full rounded-lg bg-primary p-6 text-secondary-foreground md:pt-8 xl:px-16 ">
        <div className="relative mx-auto flex flex-col xl:max-w-screen-xl">
          <div className=" mb-2 flex flex-row justify-center md:mb-6 md:justify-between">
            <Link href="/" className="flex flex-row items-center gap-x-2">
              <Shield
                color="white"
                className="size-8 md:size-10 lg:size-14"
                strokeWidth={3}
              />
              <span className="text-xl font-bold md:text-3xl lg:text-4xl">
                MoniPost
              </span>
            </Link>
            <div className="absolute bottom-8 right-0 hidden md:flex lg:bottom-12 xl:bottom-8">
              <Image
                src={FooterLogo}
                alt="MoniPost Logo"
                className=" md:w-[400px] xl:w-[450px]"
              />
            </div>
          </div>
          <div className="mb-3 flex justify-center md:justify-start">
            <ul className="flex flex-row gap-x-4 xl:text-md">
              <li>
                <Link href="/#background-section">Background</Link>
              </li>
              <li>
                <Link href="/#price-section">Prices</Link>
              </li>
              <li>
                <Link href="/#team-section">Team</Link>
              </li>
            </ul>
          </div>
          <div className="mb-3">
            <ul className="flex flex-row items-center justify-center gap-x-3 text-foreground md:justify-start">
              <li>
                <Link
                  href="https://www.linkedin.com/in/mingming-zhao-23b13a146/"
                  target="_blank"
                >
                  <Linkedin className="size-6 rounded-sm bg-background p-1" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://orcid.org/0000-0003-4355-7688"
                  className="size-6 rounded-sm bg-background p-1 font-bold"
                  target="_blank"
                >
                  ID
                </Link>
              </li>
            </ul>
          </div>
          <div className="mx-auto flex w-full flex-col-reverse items-center justify-between text-xs text-secondary-foreground/70 md:flex-row md:text-sm">
            <span> &copy; 2024 MoniPost - All right reserved</span>
            <nav className="">
              <ul className="mt-1 flex w-full flex-row justify-between gap-x-2 md:mt-0 md:gap-x-6">
                <li>
                  <Link href="/privacy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/tes">Terms of Service</Link>
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
