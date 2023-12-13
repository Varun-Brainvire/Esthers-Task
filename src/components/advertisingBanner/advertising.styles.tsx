import colors from "@/theme";
import styled from "styled-components";

interface CenterComponentProps {
  mainText?: string;
  innerText?: string;
  image?: any;
  screen?: boolean;
  marginBottom?: boolean;
}

export const CenterTabContainer = styled.div<CenterComponentProps>`
  padding: 2% 12% 4% 12%;
  background-color: rgb(244, 240, 236);
  margin-bottom: ${({ marginBottom }) => (marginBottom === true ? "70px" : "")};

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
