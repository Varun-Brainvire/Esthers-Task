import colors from "@/theme";
import Link from "next/link";
import styled from "styled-components";

interface Props {
  marginLeft?: boolean;
  marginTop?: boolean;
  screen?: boolean;
  margin?: boolean;
}

export const FooterWrapper = styled.div<Props>`
  background-color: rgb(52, 85, 74);
  color: ${colors.color.beige};
  padding: 20px 0px 20px;

  width: 100%;
  bottom: 0px;
  z-index: 102;

  @media (min-width: 991px) {
    position: fixed;
  }
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

  @media (max-width: 425px) {
    margin-bottom: ${({ margin }) => (margin ? "30px" : "")};
  }
`;

export const BarSeparator = styled.div<Props>`
  border: 0.2px solid rgba(242, 244, 244, 0.2);
  height: 30px;
  margin-left: 20px;
  margin-right: 20px;
  background-color: rgba(242, 244, 244, 0.2);

  @media (max-width: 425px) {
    height: ${({ screen }) => (screen ? "100px" : "30px")};
  }

  @media (max-width: 768px) {
    height: 100px;
  }
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
`;

export const FooterPara = styled.div<Props>`
  font-size: 16px;
  font-weight: 500;
  font-family: Strawford, "Lexend Deca", Inter, sans-serif;
  color: ${colors.color.beige};

  @media (max-width: 425px) {
    font-size: ${({ screen }) => (screen ? "12px" : "16px")};
  }
`;

interface FooterLinkProps {
  screen?: boolean;
}

export const FooterLink = styled(Link)<FooterLinkProps>`
  font-size: 16px;
  font-weight: 500;
  color: ${colors.color.beige};
  margin-top: 0px;
  text-decoration: none;

  @media (max-width: 768px) {
    font-size: ${({ screen }) => (screen ? "14px" : "16px")};
    font-weight: ${(screen) => (screen ? "600" : "")};
  }
`;

export const FlexDiv = styled.div`
  display: flex;
`;

export const PaddingWrapper = styled.div`
  padding: 0 4%;

  @media (max-width: 768px) {
    display: none;
  }
`;

// Responsive Footer css
export const ResponsiveFooter = styled.div`
  @media (min-width: 991px) {
    display: none;
  }
`;

export const SectionMain = styled.div`
  /* background-color: yellow; */
`;

export const SectionLeftForMobile = styled.div``;

export const ImageFlexDivForMobile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
`;

export const UlWrapperForMobile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 8px;
  border-top: 1px solid rgba(242, 244, 244, 0.2);
  border-bottom: 1px solid rgba(242, 244, 244, 0.2);
  padding: 0 12px;

  @media (max-width: 768px) {
    height: 100px;
  }
`;

export const ListOfMobile = styled.li<FooterLinkProps>`
  list-style: none;
  font-size: 14px;
  text-align: center;

  @media (max-width: 768px) {
    font-weight: ${(screen) => (screen ? "600" : "")};
  }
`;

export const SocialIconWrapperDivForMobile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 12px;
`;

export const FooterParaForMobile = styled.div`
  text-align: center;
`;
