import { Car } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="px-4 md:px-10 py-4 xl:px-16 flex flex-row justify-between">
        <Link href="/" className="flex flex-row gap-x-2">
          <Car />
          <span>
            Moni <span>Post</span>
          </span>
        </Link>
        <nav>
          <ul className="flex flex-row gap-x-4">
            <li>
              <Link href="/">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/">Terms of Service</Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
