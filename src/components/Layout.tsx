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

const Layout = ({ children }: any) => {
  return (
    <>
      <HeaderDiv>
        <RootHeaderWrapper>
          <ImageWrapperDiv>
            <Link href="/">
              <Image src={darkLogo} alt="logo" />
            </Link>
          </ImageWrapperDiv>
          <NavWrapperContainer>
            <UlWrapper>
              <LiWrapper>
                <a>Beauty</a>
              </LiWrapper>
              <LiWrapper>
                <AnchorTag>Home</AnchorTag>
              </LiWrapper>
              <LiWrapper>
                <AnchorTag>Fashion</AnchorTag>
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
    </>
  );
};

export default Layout;