import styled from "styled-components";
import { media, Col as sbgCol } from "styled-bootstrap-grid";

interface ColProps {
  padding?: boolean;
  paddingInBanner?: boolean;
}

export const Col = styled(sbgCol)<ColProps>`
  padding-left: 5px;
  padding-right: 5px;

  ${media.lg`
  padding-left: 10px;
  padding-right: 10px;
  `}

  ${media.xl`
  padding-left: 10px; 
  padding-right: 10px;

   @media (min-width: 768px) {
    padding-left: ${({ paddingInBanner }) => (paddingInBanner ? "10px" : "0")};
    padding-right: ${({ paddingInBanner }) => (paddingInBanner ? "10px" : "0")};
  }
  `}

  ${media.md`

  @media (min-width: 768px) {
    padding-left: ${({ paddingInBanner }) => (paddingInBanner ? "10px" : "0")};
    padding-right: ${({ paddingInBanner }) => (paddingInBanner ? "10px" : "0")};
  }
  `}

   ${media.sm`
   padding-left: 5px;
   padding-right: 5px;
  `}

  
  @media (min-width: 768px) {
    padding-left: ${({ isMobile }) => (isMobile ? "0" : "5px")};
    padding-right: ${({ isMobile }) => (isMobile ? "0" : "5px")};
  }

  @media (max-width: 375px) {
    flex: ${({ padding }) => (padding ? "0 0 auto" : "")};
    min-width: ${({ padding }) => (padding ? "300px" : "")};
  }

  @media (max-width: 375px) {
    padding-left: ${({ padding }) => (padding ? "5px" : "0")};
    padding-right: ${({ padding }) => (padding ? "5px" : "0")};
  }
`;
