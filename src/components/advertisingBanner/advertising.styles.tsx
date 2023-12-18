import colors from "@/theme";
import styled from "styled-components";

interface CenterComponentProps {
  mainText?: string;
  innerText?: string;
  image?: any;
  screen?: boolean;
  marginBottom?: boolean;
  backgroundColor?: boolean;
  isSpace?: boolean;
}

export const CenterTabContainer = styled.div<CenterComponentProps>`
  padding: 3% 12% 3% 12%;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? "#fff" : "rgb(244, 240, 236)"};

  @media (min-width: 991px) {
    position: ${({ isSpace }) => (isSpace ? "absolute" : "")};
    width: ${({ isSpace }) => (isSpace ? "100%" : "")};
    height: ${({ isSpace }) => (isSpace ? "65%" : "")};
  }

  @media (max-width: 768px) {
    padding: ${({ screen }) => (screen ? "0" : "")};
    margin-bottom: 30px;
  }

  @media (min-width: 1000px) and (max-width: 2560px) {
    height: ${({ isSpace }) => (isSpace ? "65%" : "")};
  }

  @media (min-width: 2560px) and (max-width: 4000px) {
    height: ${({ isSpace }) => (isSpace ? "41%" : "")};
  }
`;

export const InnerTabContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
`;

export const OverlayTextContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${colors.color.white};
  text-align: center;
  width: 100%;
  font-family: Strawford, "Lexend Deca", Inter, sans-serif;

  p {
    font-size: 28px;
    font-weight: bold;
    padding-bottom: 10px;
    font-family: Strawford, "Lexend Deca", Inter, sans-serif;
  }

  span {
    margin: 5px 0px 20px;
    font-family: Strawford, "Lexend Deca", Inter, sans-serif;
  }
`;

export const ButtonDiv = styled.div`
  margin-top: 20px;
`;

export const ImageDiv = styled.div<CenterComponentProps>`
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: multiply;
  height: 200px;
`;
