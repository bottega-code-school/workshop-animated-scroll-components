import * as React from "react";
import NavBar from "./NavBar";
const bgImage = require("../../static/assets/images/coding.jpg");

type Props = {
  children: React.ReactNode;
};
const Layout = ({ children }: Props) => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <NavBar />

      <div className="container">
        <div className="content">
          <img src={bgImage} className="content__img" />

          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
