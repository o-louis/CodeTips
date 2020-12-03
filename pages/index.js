import PostItem from "../components/PostItem";
import { posts } from "../getAllPosts";

const Index = () => {
  return (
    <div>
      <section className="">
        <header className="">
          <h1 className="">Welcome to you all </h1>
          <p className="">
            Here you'll find all my articles about my personal development
            journey
          </p>
          <p className="">
            I hope you'll like them and they'll be valuable to you
          </p>
        </header>
      </section>

      <section className="">
        <h1 className="">Latest Articles</h1>
        <div>
          {posts.map((post) => (
            <PostItem key={post.link} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
