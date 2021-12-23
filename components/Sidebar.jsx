import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { folders } from '../getAllPosts';

const Sidebar = ({ isMenuOpened, toggleMenu, darkMode, toggleDarkMode }) => {
  return (
    <aside
      className={
        'fixed top-0 z-10 flex flex-col w-3/4 h-screen max-w-xs py-3 overflow-y-auto text-white transition-transform duration-300 transform bg-blue-500 shadow-lg sm:w-2/4 md:inline-block md:translate-x-0 dark:bg-gray-900 ' +
        (isMenuOpened ? 'translate-x-0' : '-translate-x-full')
      }
    >
      <div
        className="relative self-end p-1 rounded-full cursor-pointer right-3 hover:bg-blue-500 md:hidden"
        onClick={toggleMenu}
      >
        <Image
          src="https://s.svgbox.net/hero-outline.svg?ic=x&fill=ffffff"
          width="32"
          height="32"
          alt="Close Menu Icon"
        />
      </div>

      <div className="absolute w-6 h-6 right-16 top-5 md:hidden">
        {darkMode ? (
          <svg
            className="text-blue-300 cursor-pointer hover:text-blue-600"
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
            className="text-white cursor-pointer hover:text-blue-600"
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
        <div className="w-full px-4 text-sm" key={folder.name}>
          <span className="flex w-full text-base font-bold text-yellow-200 uppercase dark:text-gray-100">
            {folder.name}
          </span>
          <ul>
            {folder.posts.map((post) => (
              <li
                className="font-semibold transition-colors ease-in-out dark:text-gray-300"
                key={post.link}
                onClick={toggleMenu}
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
