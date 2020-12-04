import Link from "next/link";
import { posts } from "../getAllPosts";

const Sidebar = ({ showMenu, closeMenu }) => {
  console.log(posts);
  return (
    <aside
      className={
        "transition-transform duration-300 transform flex flex-col fixed top-0 w-3/4 h-screen bg-blue-500 text-white py-3 max-w-xs sm:w-2/4 md:inline-block md:translate-x-0 " +
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
      <ul>
        {posts.map((post) => (
          <li
            className="py-3 divide-gray-50 text-sm font-semibold hover:text-yellow-200 transition-colors ease-in-out"
            key={post.link}
            onClick={closeMenu}
          >
            <Link className="px-6" href={"/posts" + post.link}>
              {post.module.meta.title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
