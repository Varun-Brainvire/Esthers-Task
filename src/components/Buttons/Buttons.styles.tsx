import styled from "styled-components";

export interface Props {
  googleButton?: boolean;
  isActive?: boolean;
  forText?: boolean;
  forStep2?: boolean;
  background?: boolean;
  color?: boolean;
  border?: boolean;
  flex?: boolean;
}

export const ButtonsDiv = styled.div`
  display: flex;
  /* background-color: yellowgreen; */
  justify-content: space-around;
`;

export const BothButtonDiv = styled.div<Props>`
  min-width: ${({ forStep2 }) => (forStep2 ? "237px" : "254px")};
  padding: 10px;
  position: relative;
  text-align: center;
  width: 50%;
  /* background-color: rgb(244, 240, 236); */
  background-color: ${({ isActive }) => (isActive ? "white" : "#f4f0ec")};

  @media only screen and (max-width: 376px) {
    min-width: 140px;
  }

  @media only screen and (max-width: 426px) {
    min-width: 140px;
  }

  @media only screen and (min-width: 768px) {
    min-width: 254px;
  }
  
`;

export const MainButtonDiv = styled.div`
  display: inline-flex;
  justify-content: space-around;
  background: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 5px;
  width: 100%;
  margin: auto;
  overflow: hidden;
  position: relative;
  border: 1px solid rgb(238, 238, 238);
`;

export const ElementBox = styled.div<Props>`
  margin-bottom: ${({ forStep2 }) => (forStep2 ? "" : "10px")};
  display: ${({ forText }) => (forText ? "flex" : "")};
  justify-content: ${({ forText }) => (forText ? "center" : "")};
  text-align: ${({ forText }) => (forText ? "left" : "")};
  min-height: ${({ forStep2 }) => (forStep2 ? "100vh" : "")};
  padding-bottom: ${({ forStep2 }) => (forStep2 ? "120px" : "")};
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const Inputs = styled.input`
  opacity: 0;
  margin: 0px;
  inset: 0px;
  position: absolute;
  width: 100%;
  cursor: pointer;
  height: 100%;
`;

export const Label = styled.label<Props>`
  cursor: pointer;
  font-weight: 500;
  padding: 10px;
  font-size: 14px;
  color: ${({ isActive }) => (isActive ? "#3a3a3a" : "#3a3a3a80")};
  /* color: #3a3a3a; */
  @media only screen and (max-width: 400px) {
    padding: 0px;
  }

  @media only screen and (max-width: 500px) {
    padding: 0px;
  }
`;

export const Button = styled.button<Props>`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ googleButton }) =>
    googleButton ? "transparent" : "#4267b2"};
  color: ${({ googleButton }) => (googleButton ? "#3a3a3a" : "white")};
  border: 1px solid;
  border-color: ${({ googleButton }) => (googleButton ? "#eeeeee" : "")};
  max-height: 45px;
  width: 100%;
  height: auto;
  font-size: 14px;
  font-weight: 500;
  font-family: Inter, sans-serif;
  line-height: 1;
  transition: all 0.3s ease 0s;
  letter-spacing: 0.3px;
  border-radius: 99px;
  cursor: pointer;
  padding: 12px 18px;
`;
