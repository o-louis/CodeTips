import Head from "next/head";
import Header from "./Header";

const Layout = ({ children, pageTitle, description }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="Description" content={description}></meta>
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap"
        rel="stylesheet"
      ></link>
      <title>{pageTitle}</title>
    </Head>
    <div className="container">
      <Header />
      <div className="pt-16">{children}</div>
    </div>
  </>
);

export default Layout;