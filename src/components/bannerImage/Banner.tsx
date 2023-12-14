import Image from "next/image";
import React from "react";
import image from "../../../public/image.png";
import Button from "../button/Button";
import {
  BannerButtonDiv,
  BannerContainer,
  BannerImage,
  Overlay,
  SingleBannerButton,
  Text,
} from "./banner.styles";
import { useRouter } from "next/router";

interface BannerProps {
  text: string;
}

const Banner: React.FC<BannerProps> = (props) => {
  const router = useRouter();
  return (
    <BannerContainer>
      <BannerImage
        src={image}
        width={1250}
        height={500}
        alt="Picture of the author"
        screen={true}
      />

      <Overlay>
        <Text screen={true}>{props.text}</Text>
        <BannerButtonDiv>
          <SingleBannerButton marginRight={true}>
            <Button content={"Start exploring"} margin={true} type="register" />
          </SingleBannerButton>
          <SingleBannerButton>
            <Button content={"Create your shop"} margin={true} type="creator" />
          </SingleBannerButton>
        </BannerButtonDiv>
      </Overlay>
    </BannerContainer>
  );
};

export default Banner;
