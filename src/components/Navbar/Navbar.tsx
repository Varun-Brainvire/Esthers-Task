import React, { useState } from "react";
import {
  AnchorTag,
  BarButtonWrapper,
  ButtonContainer,
  ImageWrapperDiv,
  LiWrapper,
  NavButtonWrapper,
  NavDiv,
  NavWrapperContainer,
  RootHeaderWrapper,
  SearchButtonWrapper,
  SignInButtonWrapper,
  UlWrapper,
} from "../dashboard/navbar.styles";
import darkLogo from "../../../public/darkLogo.png";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import Button from "../button/Button";
import Image from "next/image";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <div>
      <NavDiv>
        <RootHeaderWrapper screen={true}>
          <ImageWrapperDiv>
            <Link href="/">
              <Image src={darkLogo} alt="darkLogo" />
            </Link>
          </ImageWrapperDiv>
          <NavWrapperContainer>
            <UlWrapper>
              <LiWrapper
                isActive={router.asPath === "/inspiration/home" ? true : false}
              >
                <AnchorTag href="/inspiration/home">Home</AnchorTag>
              </LiWrapper>

              <LiWrapper
                isActive={
                  router.asPath === "/inspiration/beauty" ? true : false
                }
              >
                <AnchorTag href="/inspiration/beauty">Beauty</AnchorTag>
              </LiWrapper>
              <LiWrapper
                isActive={
                  router.asPath === "/inspiration/fashion" ? true : false
                }
              >
                <AnchorTag href="/inspiration/fashion">Fashion</AnchorTag>
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
      </NavDiv>
    </div>
  );
};

export default Navbar;
