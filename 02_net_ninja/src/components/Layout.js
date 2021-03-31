import React from "react";

// Components
import Navbar from "./Navbar";

import "../styles/global.css";

const Layout = props => {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{props.children}</div>
      <footer>
        <p>Copyright {new Date().getFullYear()} Web Warrior</p>
      </footer>
    </div>
  );
};

export default Layout;
