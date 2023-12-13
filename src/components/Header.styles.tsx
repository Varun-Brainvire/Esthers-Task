import colors from "@/theme";
import styled from "styled-components";

export const HeaderDiv = styled.div`
  background-color: ${colors.color.green};
  padding-top: 155px;
  padding-bottom: 81px;
  text-align: center;
  line-height: 1.25;
  overflow-wrap: break-word;
  font-weight: 500;
  h1 {
    font-size: 36px;
    line-height: 1.25;
    color: #efe1d0;
    overflow-wrap: break-word;
    font-weight: 500;
    font-family: Strawford, "Lexend Deca", Inter, sans-serif;
    @media only screen and (max-width: 400px) {
      padding-right: 8px;
    padding-left: 8px;
  }

  @media only screen and (max-width: 500px) {
    padding-right: 8px;
    padding-left: 8px;
  }
    
  }
`;
