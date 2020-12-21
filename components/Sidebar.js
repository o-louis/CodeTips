import Link from "next/link";
import { folders } from "../getAllPosts";

const Sidebar = ({ showMenu, closeMenu }) => {
  return (
    <aside
      className={
        "transition-transform duration-300 transform flex flex-col fixed top-0 w-3/4 h-screen shadow-lg bg-blue-500 text-white py-3 max-w-xs sm:w-2/4 md:inline-block md:translate-x-0 overflow-y-auto dark:bg-gray-900 " +
        (showMenu ? "translate-x-0" : "-translate-x-full")
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
                <Link href={"/posts" + post.link}>
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
