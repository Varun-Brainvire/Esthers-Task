import colors from "@/theme";
import styled from "styled-components";

export const LoginMainDiv = styled.div`
  background-color: ${colors.color.white};
  height: auto;
  width: 100px;
  margin-top: -36px;
  text-align: center;
  border: 1px solid rgb(238, 238, 238);
  padding: 36px 42px;
  min-width: 40%;

  @media only screen and (max-width: 400px) {
   width :90% ;
  }

  @media only screen and (max-width: 500px) {
   width :90% ;
  }

  @media only screen and (max-width: 768px) {
   width :90% ;
  }
`;

export const LoginDivContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 120px;
`