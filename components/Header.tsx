import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full">
      <div className="px-4 md:px-10 xl:px-16">
        <span>Logo</span>
        <nav>
          <ul>
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
