import styled from "styled-components";

interface HeadingProps {
  marginBottom?: boolean;
}

export const Heading = styled.div<HeadingProps>`
  color: #3a3a3a;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: ${(props) => (props.marginBottom ? "15px" : "")};
  font-family: Strawford, "Lexend Deca", Inter, sans-serif;
`;
