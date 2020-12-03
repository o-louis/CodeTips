import Layout from "../components/Layout";
import "../styles/tailwind.css";

const App = ({ Component, pageProps }) => {
  return (
    <Layout
      pageTitle="Code Daily"
      description="Ressources to code properly and efficiently in Javascript"
    >
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
