import Head from 'next/head';
import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = ({ children, pageTitle, description }) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpened((state) => !state);
  };

  const toggleDarkMode = () => {
    setDarkMode((theme) => !theme);
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <title>{pageTitle}</title>
      </Head>
      <div
        className={`flex w-full h-full dark:bg-gray-900 ${
          darkMode ? 'dark' : ''
        }`}
      >
        <Sidebar
          isMenuOpened={isMenuOpened}
          toggleMenu={toggleMenu}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <div className="w-full md:ml-60">
          <Header
            toggleMenu={toggleMenu}
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
          />
          <div className="h-full dark:bg-gray-900">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
