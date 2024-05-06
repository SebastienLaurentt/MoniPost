import Image from "next/image";
import Link from "next/link";
import Logo from "../public/images/Logo.webp";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="px-4 md:px-10 py-4 xl:px-16 flex flex-row justify-between">
        <Link href="/" className="hidden md:flex flex-row gap-x-2 items-center">
          <Image src={Logo} alt="Car" className="w-8" />
          <span className="font-bold">
            Moni<span className="text-primary">Post</span>
          </span>
        </Link>
        <nav className="w-full md:w-fit">
          <ul className="flex flex-row w-full justify-between gap-x-4">
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
