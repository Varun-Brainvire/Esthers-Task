// import React from "react";
// import {
//   ImageDiv,
//   JoinButton,
//   MidMainContainer,
//   TextContainer,
//   TextDivStyle,
// } from "./midcontainer.style";
// import Image from "next/image";
// import { Col, Container, Row } from "..";
// import Banner from "../bannerImage/Banner";

// type Props = {};

// function MidContainer({}: Props) {
//   const imageUrl = "/images/aboutus_banner.png";
//   return (
//     <>
{
  /* <Banner text={"Shop the styles of your favorite creators"} /> */
}
{
  /* <MidMainContainer>
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
      </MidMainContainer> */
}
{
  /* </>
  );
} */
}

// export default MidContainer;

import Image from "next/image";
import React from "react";
import image from "../../../public/Images/aboutus_banner.png";
import image2 from "../../../public/Images/img-3.svg";
import Button from "../button/Button";
import {
  BannerButtonDiv,
  BannerContainer,
  BannerImage,
  Overlay,
  Overlay2,
  SingleBannerButton,
  Text,
} from "./midcontainer.style";
import { useRouter } from "next/router";
import { Col, Container, Row } from "..";
import { MobileImage } from "../mobileTextContainer/mobiletext.style";

interface BannerProps {
  text: string;
}

const MidContainer: React.FC<BannerProps> = (props) => {
  const router = useRouter();
  return (
    <>
      <BannerContainer>
        <BannerImage
          src={image}
          width={1250}
          height={500}
          alt="Picture of the author"
          screen={true}
        />

        {/* <Overlay> */}
        {/* <Text screen={true}>{props.text}</Text> */}
        {/* </Overlay> */}
      </BannerContainer>
      <Overlay2>
        <Container>
          <Row>
            <Col xl={6} md={6} lg={6} sm={12} sx={12}>
              <BannerButtonDiv>
                <SingleBannerButton marginRight={true}>
                  {/* <Button content={"Join for free"} margin={true} type="register" /> */}
                  <div style={{ marginTop: "142px" }}>
                    <span className="text-banner">
                      Grow your affiliate business by making your content
                      shoppable
                    </span>
                    <button className="btn-join">Join for free</button>
                  </div>
                </SingleBannerButton>
                <SingleBannerButton>
                  {/* <Button content={"Create your shop"} margin={true} type="creator" /> */}
                </SingleBannerButton>
              </BannerButtonDiv>
            </Col>
            <Col xl={6} md={6} lg={6} sm={12} sx={12}>
              <MobileImage
                src={image2}
                width={517}
                height={775}
                alt="Picture"
              />
            </Col>
          </Row>
        </Container>
      </Overlay2>
    </>
  );
};

export default MidContainer;
