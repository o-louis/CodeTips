import PostItem from "../components/PostItem";
import { posts } from "../getAllPosts";

const Index = () => {
  return (
    <div className="py-8">
      <section className="m-auto w-10/12 text-blue-900 text-lg">
        <h1 className="text-3xl font-bold text-blue-600 pb-1 md:text-4xl">
          JavaScript Tips
        </h1>
        <h2 className="text-2xl font-semibold text-blue-500 md:text-3xl">
          Best Practices
          <br></br>to simplify your code
        </h2>

        <div className="md:flex md: flex-row-reverse">
          <div className="pt-4">
            <img src="./illustration_home.png" />
          </div>
          <section>
            <p className="pt-6 pb-4">
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
