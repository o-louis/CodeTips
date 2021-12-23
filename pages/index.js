import React from 'react';

const Index = () => {
  return (
    <div className="py-8">
      <section className="m-auto w-10/12 text-blue-900 text-lg md:w-11/12">
        <h1 className="text-3xl font-bold text-blue-600 pb-1 sm:text-4xl lg:text-5xl dark:text-white">
          JavaScript Tips
        </h1>
        <h2 className="text-2xl font-semibold text-blue-500 sm:text-3xl lg:text-4xl mt-4 dark:text-white">
          Best Practices
          <br></br>to simplify your code
        </h2>

        <div className="flex flex-col md:flex-col-reverse">
          <div className="pt-4 max-w-sm self-end md:max-w-md">
            <img src="./illustration_home.png" />
          </div>
          <section className="md:max-w-xl lg:text-xl dark:text-white">
            <p className="pt-6 pb-6 leading-relaxed">
              As a developer, we spend our time googling, even basic
              concepts. Therefore I&apos;ve decided to create a list that gathers
              all the JavaScript Fundamentals to save time.
            </p>
            <p>
              I hope you&apos;ll find everything you&apos;re looking for and more ! 🚀
            </p>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Index;
