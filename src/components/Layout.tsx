import React, { useState } from "react";
import {
  AnchorTag,
  BarButtonWrapper,
  ButtonContainer,
  HeaderDiv,
  ImageWrapperDiv,
  LiWrapper,
  NavButtonWrapper,
  NavWrapperContainer,
  RootHeaderWrapper,
  SearchButtonWrapper,
  SignInButtonWrapper,
  UlWrapper,
} from "./dashboard/navbar.styles";
import Image from "next/image";
import logo from "../../public/Frame.svg";
import darkLogo from "../../public/darkLogo.png";
import { FaBars } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import Button from "./button/Button";
import Link from "next/link";
import Footer from "./footer/Footer";
import { useRouter } from "next/router";

const Layout = ({ children }: any) => {
  const route = useRouter();

  console.log(route.route, "route");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleTabClick = (category: string) => {
    setSelectedCategory(category);
  };
  return (
    <>
      <HeaderDiv>
        <RootHeaderWrapper screen={true}>
          <ImageWrapperDiv>
            <Link href="/">
              <Image src={darkLogo} alt="logo" />
            </Link>
          </ImageWrapperDiv>
          <NavWrapperContainer>
            <UlWrapper>
              <LiWrapper isActive={selectedCategory === "Home"}>
                {/* <AnchorTag href="/inspiration/home">Home</AnchorTag>
                 */}
                <AnchorTag
                  href="/inspiration/home"
                  onClick={() => handleTabClick("Home")}
                >
                  Home
                </AnchorTag>
              </LiWrapper>
              <LiWrapper isActive={selectedCategory === "Beauty"}>
                <AnchorTag
                  href="/inspiration/beauty"
                  onClick={() => handleTabClick("Beauty")}
                >
                  Beauty
                </AnchorTag>
              </LiWrapper>
              <LiWrapper isActive={selectedCategory === "Fashion"}>
                <AnchorTag
                  href="/inspiration/fashion"
                  onClick={() => handleTabClick("Fashion")}
                >
                  Fashion
                </AnchorTag>
              </LiWrapper>
            </UlWrapper>
          </NavWrapperContainer>

          <NavButtonWrapper>
            <ButtonContainer>
              <SearchButtonWrapper>
                <BiSearch />
              </SearchButtonWrapper>
              <BarButtonWrapper>
                <FaBars />
              </BarButtonWrapper>
              <SignInButtonWrapper>
                <Link href="/signIn">
                  <Button content={"Sign in"} />
                </Link>
              </SignInButtonWrapper>
            </ButtonContainer>
          </NavButtonWrapper>
        </RootHeaderWrapper>
      </HeaderDiv>
      <main>{children}</main>
      {route.route === "/create-post" ? " " : <Footer />}
    </>
  );
};

export default Layout;
