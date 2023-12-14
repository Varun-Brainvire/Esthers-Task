import colors from "@/theme";
import styled from "styled-components";

interface CenterComponentProps {
  mainText?: string;
  innerText?: string;
  image?: any;
  screen?: boolean;
  marginBottom?: boolean;
  backgroundColor?: boolean;
}

export const CenterTabContainer = styled.div<CenterComponentProps>`
  padding: 3% 12% 3% 12%;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? "#fff" : "rgb(244, 240, 236)"};
  margin-bottom: ${({ marginBottom }) => (marginBottom ? "7%" : " ")};

  @media (max-width: 768px) {
    padding: ${({ screen }) => (screen ? "0" : "")};
    margin-bottom: 20px;
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
