import Link from "next/link";

const Header = () => {
  return (
    <nav className="">
      <div className="">
        <div>
          <Link href="/">LearnDaily</Link>
        </div>
        <ul className="">
          <li className="">
            <Link href="/articles">Articles</Link>
          </li>
          <li className="">
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
