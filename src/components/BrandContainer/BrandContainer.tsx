import React from "react";
import {
  BrandItemsFour,
  BrandItemsOne,
  BrandItemsThree,
  BrandItemsTwo,
  MainBrandContainer,
} from "./brand.style.tsx";
import Image from "next/image";
import brandImageOne from "../../../public/Images/brand1.svg";
import brandImageTwo from "../../../public/Images/brand2.svg";
import brandImageThree from "../../../public/Images/brand3.svg";
import brandImageFour from "../../../public/Images/brand4.svg";
import { Col, Container, Row } from "..";

interface Props {}
const BrandContainer = (props: Props) => {
  return (
    <>
      <MainBrandContainer>
        <BrandItemsOne>
          <Image src={brandImageOne} alt="" />
        </BrandItemsOne>
        <BrandItemsTwo>
          <Image src={brandImageTwo} alt="" />
        </BrandItemsTwo>
        <BrandItemsThree>
          <Image src={brandImageThree} alt="" />
        </BrandItemsThree>
        <BrandItemsFour>
          <Image src={brandImageFour} alt="" />
        </BrandItemsFour>
      </MainBrandContainer>
    </>
  );
};

export default BrandContainer;
