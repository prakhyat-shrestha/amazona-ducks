import React from "react";
import Menu from "./Menu";
import Header from "./Header";
import Footer from "./Footer";
import Copyright from "./Copyright";

const Layout = ({ className, children }) => (
  <div>
    <Header />
    <Menu />
    <div className={className}>{children}</div>
    <Footer />
    <Copyright />
  </div>
);

export default Layout;
