import React from "react";
import { StyledButton } from "./button.styles";
import { useRouter } from "next/router";
import Link from "next/link";

interface ButtonProps {
  content: string;
  margin?: boolean;
  type?: string;
  color?: boolean;
  id?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  const router = useRouter();
  return (
    <div>
      {/* <Link href="/signUp" > */}
      <StyledButton
        color={props.color}
        margin={props.margin}
        type={props.type}
        onClick={() => {
          router.push({ pathname: "/signuppage", query: { type: props.type } });
        }}
        id={props.id}
      >
        {props.content}
      </StyledButton>
      {/* </Link> */}
    </div>
  );
};

export default Button;
