import React from 'react';
import Layout from '../components/Layout';
import '../styles/tailwind.css';

const App = ({ Component, pageProps }) => {
  return (
    <Layout
      pageTitle="CodeTips - Best practices, Must-Know, Useful Tips in JavaScript"
      description="Best practices, Must-Know, Useful Tips in JavaScript"
    >
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
