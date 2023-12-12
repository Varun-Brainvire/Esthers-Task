import React from "react";
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
              <LiWrapper>
                <AnchorTag href="/home">Home</AnchorTag>
              </LiWrapper>
              <LiWrapper>
                <AnchorTag href="/beauty">Beauty</AnchorTag>
              </LiWrapper>
              <LiWrapper>
                <AnchorTag href="/fashion">Fashion</AnchorTag>
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
