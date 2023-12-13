import React from "react";
import { Heading } from "./heading.styles";

interface HeadingTextProps {
  text: string;
  marginBottom?: boolean;
}

const HeadingText: React.FC<HeadingTextProps> = (props) => {
  return (
    <>
      <Heading marginBottom={props.marginBottom} screen={true}>
        {props.text}
      </Heading>
    </>
  );
};

export default HeadingText;
