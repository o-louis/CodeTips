import Link from "next/link";
import { posts } from "../getAllPosts";
const Sidebar = () => {
  console.log(posts);
  return (
    <aside className="fixed top-0 w-2/4 h-screen bg-blue-600 text-white px-6 py-3 sm:max-w-xs md:relative">
      <ul>
        {posts.map((post) => (
          <li key={post.link}>
            <Link href={post.link}>{post.module.meta.title}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
