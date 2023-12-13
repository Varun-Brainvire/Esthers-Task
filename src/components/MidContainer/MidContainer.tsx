import React from "react";
import {
  ImageDiv,
  JoinButton,
  MidMainContainer,
  TextContainer,
  TextDivStyle,
} from "./midcontainerstyle";
import Image from "next/image";

type Props = {};

function MidContainer({}: Props) {
  return (
    <>
      <MidMainContainer>
        <TextDivStyle>
          <TextContainer>
            <p className="heading">
              Grow your affiliate business by making your content shoppable
            </p>
            <div style={{ marginTop: "30px" }}>
              <JoinButton>
                <span className="btn">Join for free</span>
              </JoinButton>
            </div>
          </TextContainer>
          <ImageDiv>
            <Image
              src="/Images/banner3.svg"
              height={400}
              width={400}
              alt="img"
              className="banner-img"
            />
          </ImageDiv>
        </TextDivStyle>
      </MidMainContainer>
    </>
  );
}

export default MidContainer;
