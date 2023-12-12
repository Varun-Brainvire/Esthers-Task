import styled from "styled-components";
import { media, Col as sbgCol } from "styled-bootstrap-grid";

export const Col = styled(sbgCol)`
  padding-left: 10px;
  padding-right: 10px;

  ${media.lg`
  padding-left: 10px;
  padding-right: 10px;
  `}

  ${media.xl`
  padding-left: 10px; 
  padding-right: 10px;
  `}

  ${media.md`
  padding-left: 5px !important;
  padding-right: 5px !important;
  `}

   ${media.sm`
  padding-left: 5px;
  padding-right: 5px;
  `}

  @media (max-width: 768px) {
    padding-left: ${({ screen }) => (screen ? "0" : "10px")};
    padding-right: ${({ screen }) => (screen ? "0" : "10px")};
  }
`;
