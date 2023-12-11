import Image from "next/image";
import React from "react";

interface Props {}

const MultiImage = (props: Props) => {
  return (
    <>
      <Image src="/Images/Image.svg" height={150} width={150} alt="" />
    </>
  );
};

export default MultiImage;
