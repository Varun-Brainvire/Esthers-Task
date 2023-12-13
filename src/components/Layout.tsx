import React, { ReactNode } from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./footer/Footer";
import { useRouter } from "next/router";

const Layout = ({ children }: { children: ReactNode }) => {
  const route = useRouter();

  return (
    <>
      <Navbar />
      <main>{children}</main>
      {route.route === "/create-post" ? " " : <Footer />}
    </>
  );
};

export default Layout;
