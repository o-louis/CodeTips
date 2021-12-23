import Link from 'next/link';
import React from 'react';
import { folders } from '../getAllPosts';

const Sidebar = ({ showMenu, closeMenu, darkMode, toggleDarkMode }) => {
  return (
    <aside
      className={
        'transition-transform duration-300 transform flex flex-col fixed top-0 w-3/4 h-screen shadow-lg bg-blue-500 text-white py-3 max-w-xs sm:w-2/4 md:inline-block md:translate-x-0 overflow-y-auto dark:bg-gray-900 ' +
        (showMenu ? 'translate-x-0' : '-translate-x-full')
      }
    >
      <div
        className="self-end relative right-3 cursor-pointer rounded-full p-1 hover:bg-blue-500 md:hidden"
        onClick={closeMenu}
      >
        <img
          src="https://s.svgbox.net/hero-outline.svg?ic=x&fill=ffffff"
          width="32"
          height="32"
        />
      </div>

      <div className="w-6 h-6 absolute right-16 top-5 md:hidden">
        {darkMode ? (
          <svg
            className="cursor-pointer text-blue-300 hover:text-blue-600"
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
            className="cursor-pointer text-white hover:text-blue-600"
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
      </div>

      {folders.map((folder) => (
        <div className="text-sm px-4 w-full" key={folder.name}>
          <span className="font-bold text-base uppercase text-yellow-200 w-full flex dark:text-gray-100">
            {folder.name}
          </span>
          <ul>
            {folder.posts.map((post) => (
              <li
                className="transition-colors ease-in-out font-semibold dark:text-gray-300"
                key={post.link}
                onClick={closeMenu}
              >
                <Link href={'/posts' + post.link}>
                  {post.module.meta.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
