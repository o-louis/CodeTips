import Layout from "../components/Layout";
import "../styles/tailwind.css";

const App = ({ Component, pageProps }) => {
  return (
    <Layout pageTitle="Learn Daily" description="My Personal Blog">
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
