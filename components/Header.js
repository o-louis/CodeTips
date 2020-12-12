import Link from "next/link";

const Header = ({ openMenu }) => {
  return (
    <nav className="py-3 bg-blue-100 text-blue-600 text-xl w-full">
      <div className="m-auto w-10/12 flex justify-between items-center md:w-11/12">
        <div className="font-bold ">
          <Link href="/">CodeTips</Link>
        </div>

        <svg
          class="w-6 h-6 hidden md:inline-block md:cursor-pointer md:text-blue-300 md:hover:text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          ></path>
        </svg>
        <div
          className="rounded-full p-1 cursor-pointer hover:bg-gray-50 md:hidden"
          onClick={openMenu}
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
