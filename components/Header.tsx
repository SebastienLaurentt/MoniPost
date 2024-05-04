import { Car } from "lucide-react";
import Link from "next/link";

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
          <ul className="flex flex-row gap-x-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">MingMing</Link>
            </li>
            <li>
              <Link href="/">Maserati</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
