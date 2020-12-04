export default function BlogPost({ children, meta }) {
  return (
    <section className="m-auto w-10/12 py-8 md:w-11/12 py-8 sm:text-4xl lg:text-5xl">
      <h1 className="text-3xl font-bold text-blue-600 pb-1">{meta.title}</h1>

      <article>{children}</article>
    </section>
  );
}
