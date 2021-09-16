import React from "react";
import Meta from "./Meta";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Meta />
      <Navbar />
      <div style={{ minHeight: "80vh" }} className="py-8 font-kanit">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
