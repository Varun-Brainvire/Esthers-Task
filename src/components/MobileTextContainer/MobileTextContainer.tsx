import React from "react";
import { MidMainContainer } from "../MidContainer/MidContainerStyle";
import { Container, MobileDiv, TextDiv } from "./MobileTextStyle";
import Image from "next/image";

interface Props {}

const MobileTextContainer = (props: Props) => {
  return (
    <>
      <Container>
        <div className="custom-style">
          <MobileDiv>
            <Image
              src="/Images/mobimg.svg"
              height={674}
              width={565}
              alt="img"
            />
          </MobileDiv>
          <TextDiv>
            <h3 className="content1">
              Your content and product links in one place
            </h3>
            <p className="content2">
              Get your own personal creator shop where all your outfits, styles,
              and recommendations are easily made shoppable for your followers
              to buy. Simply upload your photos and videos, or create curated
              styleboards, and tag them with our library of 2 000 000 +
              affiliate links gathered from all large networks. Share it with
              your followers to save time and earn money while enjoying happy
              followers.
            </p>
          </TextDiv>
        </div>
      </Container>
    </>
  );
};

export default MobileTextContainer;
