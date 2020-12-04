const Index = () => {
  return (
    <div className="py-8">
      <section className="m-auto w-10/12 text-blue-900 text-lg md:w-11/12">
        <h1 className="text-3xl font-bold text-blue-600 pb-1 sm:text-4xl lg:text-5xl">
          JavaScript Tips
        </h1>
        <h2 className="text-2xl font-semibold text-blue-500 sm:text-3xl lg:text-4xl">
          Best Practices
          <br></br>to simplify your code
        </h2>

        <div className="flex flex-col md:flex-col-reverse">
          <div className="pt-4 max-w-sm self-end md:max-w-md">
            <img src="./illustration_home.png" />
          </div>
          <section className="md:max-w-xl lg:text-xl">
            <p className="pt-6 pb-6 leading-relaxed">
              As a developer, we spend our time searching on google (even basic
              concepts..) and thus I've decided to create a census that gather
              all the JavaScript Fundamentals for saving time.
            </p>
            <p>
              I hope you'll find everything you're looking for and more ! 🚀
            </p>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Index;
