import styled from "styled-components";
import { media, Row as sbgRow } from "styled-bootstrap-grid";

interface RowProps {
  screen?: boolean;
}

export const Row = styled(sbgRow)<RowProps>`
  @media (max-width: 425px) {
    display: ${({ screen }) => (screen ? "flex" : "")};
    flex-wrap: ${({ screen }) => (screen ? "nowrap" : "")};
    overflow-x: ${({ screen }) => (screen ? "auto" : "")};
  }
`;
