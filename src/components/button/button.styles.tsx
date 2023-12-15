import colors from "@/theme";
import styled from "styled-components";

interface StyledButtonProps {
  margin?: boolean;
  color?: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;

  background-color: ${({ color }) =>
    color ? colors.color.transparentBtnColor : colors.color.btnBackgroundColor};
  color: ${({ color }) =>
    color ? colors.color.white : colors.color.btnColorText};
  border: ${({ color }) => (color ? "none" : "1px solid rgb(238, 238, 238)")};
  padding: 24px 20px;
  max-height: 45px;
  width: auto;
  height: auto;
  font-size: 14px;
  font-weight: 600;
  font-family: Strawford, "Lexend Deca", Inter, sans-serif;
  line-height: 1;
  transition: all 0.3s ease 0s;
  letter-spacing: 0.3px;
  border-radius: 99px;
  margin-top: ${(props) => (props.margin ? "15%" : "0")};
  cursor: pointer;
`;
