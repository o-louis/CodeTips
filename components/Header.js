import Link from "next/link";

const Header = ({ openMenu, darkMode, toggleDarkMode }) => {
  return (
    <nav className="py-3 bg-blue-100 text-blue-600 text-xl w-full dark:text-white dark:bg-gray-900">
      <div className="m-auto w-10/12 flex justify-between items-center md:w-11/12">
        <div className="font-bold ">
          <Link href="/">CodeTips</Link>
        </div>

        {darkMode ? (
          <svg
            className="w-6 h-6 hidden md:inline-block md:cursor-pointer md:text-blue-300 md:hover:text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            onClick={toggleDarkMode}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            ></path>
          </svg>
        ) : (
          <svg
            className="w-6 h-6 hidden md:inline-block md:cursor-pointer md:text-blue-300 md:hover:text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            onClick={toggleDarkMode}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            ></path>
          </svg>
        )}
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
