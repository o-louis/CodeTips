import Link from "next/link";

const Header = ({ handleClick }) => {
  return (
    <nav className="py-3 bg-blue-100 text-blue-600 text-xl w-full">
      <div className="m-auto w-10/12 flex justify-between items-center md:w-11/12">
        <div className="font-bold ">
          <Link href="/">CodeDaily</Link>
        </div>

        <div
          className="rounded-full p-1 cursor-pointer hover:bg-gray-50 md:hidden"
          onClick={handleClick}
        >
          <img
            src="https://s.svgbox.net/hero-outline.svg?ic=menu-alt-3&fill=1c64f2"
            width="32"
            height="32"
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
