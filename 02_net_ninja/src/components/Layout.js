import React from "react";

// Components
import Navbar from "./Navbar";

const Layout = props => {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{props.children}</div>
      <footer>
        <p>Copyright 2021 Web Warrior</p>
      </footer>
    </div>
  );
};

export default Layout;
