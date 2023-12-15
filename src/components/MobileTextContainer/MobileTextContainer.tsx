import React from "react";
import { Col, Container, Row } from "..";
import { MobileDiv, MobileImage, TextDiv } from "./mobiletext.style";
import Image from "next/image";
import image from "../../../public/Images/mobimg.svg";

interface Props {}

const MobileTextContainer = (props: Props) => {
  return (
    <>
      <Container>
        <Row>
          <Col xl={6} md={6} lg={6} sm={12} sx={12}>
            <div>
              {/* <Image
                src="/Images/mobimg.svg"
                width={588}
                height={554}
                alt="img"
              /> */}

              <MobileImage
                src={image}
                width={1250}
                height={500}
                alt="Picture"
              />
            </div>
          </Col>
          <Col xl={6} md={6} lg={6} sm={12} sx={12}>
            <TextDiv>
              <h3 className="content1">
                Your content and product links in one place
              </h3>
              <p className="content2">
                Get your own personal creator shop where all your outfits,
                styles, and recommendations are easily made shoppable for your
                followers to buy. Simply upload your photos and videos, or
                create curated styleboards, and tag them with our library of 2
                000 000 + affiliate links gathered from all large networks.
                Share it with your followers to save time and earn money while
                enjoying happy followers.
              </p>
            </TextDiv>
          </Col>
        </Row>
        {/* <div className="custom-style">
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
        </div> */}
      </Container>
    </>
  );
};

export default MobileTextContainer;
