export default function BlogPost({ children, meta }) {
  return (
    <section className="">
      <h1>{meta.title}</h1>
      <div className="">
        <span>{meta.date}</span>
      </div>
      <article>{children}</article>
    </section>
  );
}
