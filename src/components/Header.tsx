import Link from "next/link";

const Header: React.FC = () => {
  return (
    <nav className="container py-5 fixed">
      <div className="mx-auto w-10/12 flex justify-between">
        <div>LearnDaily</div>
        <ul className="flex">
          <li className="hover:underline">
            <Link href="/articles">Articles</Link>
          </li>
          <li className="hover:underline">
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
