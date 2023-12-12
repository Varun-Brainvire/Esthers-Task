import colors from "@/theme";
import Link from "next/link";
import styled from "styled-components";

export const FooterWrapper = styled.div`
  background-color: rgb(52, 85, 74);
  color: ${colors.color.beige};
  padding: 20px 0px 20px;
  position: fixed;
  width: 100%;
  bottom: 0px;
  z-index: 102;
`;

export const MainUlWrapper = styled.div`
  display: flex;
  margin: 0px;
  padding: 0px;
  justify-content: space-between;
`;

export const FooterLeftSection = styled.div`
  display: flex;
  margin: 0px;
  padding: 0px;
`;

export const FooterLogoSpanWrapper = styled.div`
  padding-top: 1%;
`;

export const WrapperDivForLeftSection = styled.div`
  display: block;
`;

export const LeftSectionDiv = styled.div`
  display: flex;
  padding: 0px;
  font: inherit;
  align-items: center;
  margin-top: 10px;
`;

export const UlWrapperForLestSection = styled.div`
  display: flex;
  align-items: center;
`;

interface Props {
  marginLeft?: boolean;
  marginTop?: boolean;
}

export const UlOfLeftSection = styled.ul<Props>`
  display: flex;
  list-style: none;
  margin: 0px;
  padding: 0px;
  flex-direction: column;
  margin-left: ${({ marginLeft }) => (marginLeft ? "20px" : "0")};
`;

export const LiOfLeftSection = styled.li<Props>`
  font-size: 16px;
  font-weight: 500;
  font-family: Strawford, "Lexend Deca", Inter, sans-serif;
  color: ${colors.color.beige};
  margin-top: ${({ marginTop }) => (marginTop ? "19%" : "0px")};
`;

export const BarSeparator = styled.div`
  border: 0.2px solid rgba(242, 244, 244, 0.2);
  height: 30px;
  margin-left: 20px;
  margin-right: 20px;
  background-color: rgba(242, 244, 244, 0.2);
`;

export const FooterRightSection = styled.div`
  display: flex;
  align-items: center;
`;

export const SocialMediaLogoWrapperDiv = styled.div`
  display: flex;
  padding-right: 40px;
`;

export const SocialMediaIndividualDivWrapper = styled.div`
  margin: 5px;
  /* height: 16px; */
`;

export const FooterPara = styled.div`
  font-size: 16px;
  font-weight: 500;
  font-family: Strawford, "Lexend Deca", Inter, sans-serif;
  color: ${colors.color.beige};
`;

export const FooterLink = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  color: ${colors.color.beige};
  margin-top: 0px;
  text-decoration: none;
`;

export const FlexDiv = styled.div`
  display: flex;
`;
