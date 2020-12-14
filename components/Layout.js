import Head from "next/head";
import Header from "./Header";
import Sidebar from "./Sidebar";

import React, { useState, useEffect } from "react";

const Layout = ({ children, pageTitle, description }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const bodyTag = document.querySelector("body");
    if (darkMode) {
      bodyTag.classList.add("dark");
    } else {
      bodyTag.classList.remove("dark");
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
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        ></link>
        <title>{pageTitle}</title>
      </Head>
      <div className="flex w-full">
        <Sidebar showMenu={showMenu} closeMenu={closeMenu} />
        <div className="w-full md:ml-60">
          <Header
            openMenu={openMenu}
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
          />
          <div className="">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
