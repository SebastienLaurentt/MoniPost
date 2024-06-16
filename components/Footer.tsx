import { Shield } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-primary p-6 text-secondary-foreground md:px-10 xl:px-16">
      <div className="mx-auto flex flex-row items-center justify-between xl:max-w-screen-xl">
        <Link href="/" className="flex flex-row items-center gap-x-2">
          <Shield color="white" size={36} strokeWidth={3} />
          <span className="text-lg font-bold">MoniPost</span>
        </Link>
        <nav className="text-xs md:w-fit md:text-sm">
          <ul className="flex w-full flex-row justify-between gap-x-2 md:gap-x-6">
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/tes">Terms of Service</Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
