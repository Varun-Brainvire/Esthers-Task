import styled from "styled-components";
import { media, Container as sbgContainer } from "styled-bootstrap-grid";

interface ContainerProps {
  screen?: boolean;
}

export const Container = styled(sbgContainer)<ContainerProps>`
  @media (max-width: 425px) {
    overflow: ${({ screen }) => (screen ? "auto" : "")};
  }
`;
