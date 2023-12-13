import colors from "@/theme";
import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes } from "react";
import styled, { css } from "styled-components";

interface ListTagProps {
  isActive: boolean;
}

export const NavDiv = styled.div`
  background-color: beige;
`;

interface LayoutProps {
  screen?: boolean;
}

export const RootHeaderWrapper = styled.div<LayoutProps>`
  padding-left: 48px;
  padding-right: 48px;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  display: flex;
  width: 100%;
  max-width: 1600px;
  z-index: 10;
  position: fixed;
  background-color: ${colors.color.white};
  border-bottom: 1px solid rgb(243, 244, 246);

  @media (max-width: 425px) {
    padding-left: ${({ screen }) => (screen ? "12px" : "48px")};
    padding-right: ${({ screen }) => (screen ? "12px" : "48px")};
  }
`;

export const ImageWrapperDiv = styled.div`
  width: 32px;
  height: 32px;
`;

export const NavWrapperContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 27px;

  @media (max-width: 425px) {
    display: none;
  }
`;

export const UlWrapper = styled.ul`
  margin: 0px;
  padding: 0px;
  color: inherit;
  display: flex;
  width: 100%;
`;

export const LiWrapper = styled.li<ListTagProps>`
  margin-right: 0px;
  padding-left: 25px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  font-family: Strawford, "Lexend Deca", Inter, sans-serif;
  ${(props) => {
    console.log("isActive:", props.isActive);
    return (
      props.isActive &&
      css`
        color: rgb(58, 58, 58);
        border-bottom: 3px solid rgb(58, 58, 58);
        margin-bottom: -21px;
      `
    );
  }}
`;

export const AnchorTag = styled(Link)`
  text-decoration: none;
  display: block;
  height: 100%;
  color: inherit;
  opacity: 1;
`;

export const NavButtonWrapper = styled.div`
  display: flex;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(244, 240, 236);
  color: rgb(58, 58, 58);
  height: 38px;
  width: 38px;
  min-width: 38px;
  min-height: 38px;
  border-radius: 99px;
  border: none;
  transition: background 0.2s ease 0s;
  padding: 7px;
  opacity: 1;
  margin: 0 6px;
`;
export const BarButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(244, 240, 236);
  color: rgb(58, 58, 58);
  height: 38px;
  width: 38px;
  min-width: 38px;
  min-height: 38px;
  border-radius: 99px;
  border: none;
  transition: background 0.2s ease 0s;
  padding: 7px;
  opacity: 1;
  margin: 0 6px;
`;
export const SignInButtonWrapper = styled.div``;
