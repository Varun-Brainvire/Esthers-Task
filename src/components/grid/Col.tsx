import styled from "styled-components"
import { media, Col as sbgCol } from "styled-bootstrap-grid"

export const Col = styled(sbgCol)`
  /* padding: 0;
  margin: 0; */
  padding-left: 10px;
  padding-right: 10px;

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
  padding-left: 10px !important;
  padding-right: 10px !important;
  `}
`
