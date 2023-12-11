import React from "react";
import { MainMakeupConatiner, MakeBackImg, MakeupBox } from "./MakeupStyle";
import Image from "next/image";
import backImage from "../../../public/Images/beauty1.svg";

interface Props {}
const MakeupContainer = (props: Props) => {
  return (
    <>
      <MainMakeupConatiner>
        <MakeupBox>
          <Image src={backImage} alt="image" />
        </MakeupBox>
      </MainMakeupConatiner>
    </>
  );
};

export default MakeupContainer;
