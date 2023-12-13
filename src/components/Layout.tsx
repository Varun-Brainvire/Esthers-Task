import React from "react";
import Image from "next/image";
import logo from "../../public/Frame.svg";
import { FaBars } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import Button from "./button/Button";
import Link from "next/link";
import Footer from "./footer/Footer";
import { useRouter } from "next/router";
import Navbar from "./Navbar/Navbar";

const Layout = ({ children }: any) => {
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
