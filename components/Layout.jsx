import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = ({ children, pageTitle, description }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const parent = document.querySelector('body');
    const children = document.querySelector('#__next > div:first-child');
    if (darkMode) {
      parent.classList.add('dark');
      children.classList.add('dark');
    } else {
      parent.classList.remove('dark');
      children.classList.remove('dark');
    }
  }, [darkMode]);

  const openMenu = () => {
    setShowMenu(true);
  };

  const closeMenu = () => {
    setShowMenu(false);
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
      <div className="flex w-full h-full dark:bg-gray-900">
        <Sidebar
          showMenu={showMenu}
          closeMenu={closeMenu}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <div className="w-full md:ml-60">
          <Header
            openMenu={openMenu}
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
          />
          <div className="dark:bg-gray-900">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
