import React from "react";
import { StyledButton } from "./button.styles";

interface ButtonProps {
  content: string;
  margin?: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <div>
      <StyledButton margin={props.margin}>{props.content}</StyledButton>
    </div>
  );
};

export default Button;
