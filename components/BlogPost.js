export default function BlogPost({ children, meta }) {
  return (
    <section className="prose lg:prose-xl">
      <h1>{meta.title}</h1>
      <div className="details">
        <span>{meta.date}</span>
      </div>
      <article>{children}</article>
    </section>
  );
}
