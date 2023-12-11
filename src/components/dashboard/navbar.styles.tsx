import styled from "styled-components";

export const HeaderDiv = styled.div`
  background-color: beige;
`;

export const RootHeaderWrapper = styled.div`
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
  background-color: white;
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
`;

export const UlWrapper = styled.ul`
  margin: 0px;
  padding: 0px;
  color: inherit;
  display: flex;
  width: 100%;
`;

export const LiWrapper = styled.li`
  margin-right: 0px;
  padding-left: 25px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
`;

export const AnchorTag = styled.a`
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
