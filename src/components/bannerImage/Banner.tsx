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

interface BannerProps {
  text: string;
}

const Banner: React.FC<BannerProps> = (props) => {
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
            <Button content={"Start exploring"} margin={true} />
          </SingleBannerButton>
          <SingleBannerButton>
            <Button content={"Create your shop"} margin={true} />
          </SingleBannerButton>
        </BannerButtonDiv>
      </Overlay>
    </BannerContainer>
  );
};

export default Banner;
