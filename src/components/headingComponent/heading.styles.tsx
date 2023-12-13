import styled from "styled-components";

interface HeadingProps {
  marginBottom?: boolean;
  screen?: true;
}

export const Heading = styled.div<HeadingProps>`
  color: #3a3a3a;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: ${(props) => (props.marginBottom ? "15px" : "")};
  font-family: Strawford, "Lexend Deca", Inter, sans-serif;

  @media (max-width: 768px) {
    font-size: ${({ screen }) => (screen ? "12px" : "20px")};
  }
`;
