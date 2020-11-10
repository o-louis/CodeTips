import Head from "next/head";
import Header from "./Header";

type Props = {
  children: any;
  pageTitle: string;
  description: string;
};

const Layout: React.FC<Props> = ({ children, pageTitle, description }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="Description" content={description}></meta>
      <title>{pageTitle}</title>
    </Head>
    <div className="container">
      <Header />
      <div className="pt-16">{children}</div>
    </div>
  </>
);

export default Layout;
