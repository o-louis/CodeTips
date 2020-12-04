export default function BlogPost({ children, meta }) {
  return (
    <section className="m-auto w-10/12 py-8 md:w-11/12">
      <h1 className="text-3xl font-bold text-blue-600 pb-4">{meta.title}</h1>
      <article className="text-lg lg:text-xl text-blue-900 md:max-w-2xl">
        {children}
      </article>
    </section>
  );
}
