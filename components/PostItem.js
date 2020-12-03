import Link from "next/link";

const PostItem = ({ post }) => {
  const {
    link,
    module: { meta },
  } = post;

  return (
    <>
      <article>
        <h1>{meta.title}</h1>
        <div className="">
          <span>{meta.date}</span>
        </div>
        <Link href={"/posts" + link}>
          <a>Read more &rarr;</a>
        </Link>
      </article>
    </>
  );
};

export default PostItem;
