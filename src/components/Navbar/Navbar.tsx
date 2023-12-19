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

const Navbar = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleTabClick = (category: string) => {
    setSelectedCategory(category);
  };

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
              <LiWrapper isActive={selectedCategory === "Home"}>
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
                {/* <Link href="/login"> */}
                  <Button content={"Sign in"} />
                {/* </Link> */}
              </SignInButtonWrapper>
            </ButtonContainer>
          </NavButtonWrapper>
        </RootHeaderWrapper>
      </NavDiv>
    </div>
  );
};

export default Navbar;
