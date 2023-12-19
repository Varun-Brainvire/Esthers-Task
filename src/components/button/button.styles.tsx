import styled from "styled-components";

interface StyledButtonProps {
  margin?: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  background-color: rgb(255, 255, 255);
  color: rgb(52, 85, 74);
  border: 1px solid rgb(238, 238, 238);
  padding: 22px 18px;
  max-height: 45px;
  width: auto;
  height: auto;
  font-size: 14px;
  font-weight: 500;
  font-family: Inter, sans-serif;
  line-height: 1;
  transition: all 0.3s ease 0s;
  letter-spacing: 0.3px;
  border-radius: 99px;
  margin-top: ${(props) => (props.margin ? "15%" : "0")};
  cursor: pointer;
`;
