import React from "react";
import HeadingText from "../headingComponent/HeadingText";
import beauty from "../../../public/beauty.png";
import home from "../../../public/home.png";
import fashion from "../../../public/fashion.png";
import {
  CategoriesContainer,
  ImageOverlayContainer,
  InnerCategoryContainer,
  OverlayBackground,
  OverlayText,
  StyledImage,
} from "./categories.styles";
import { Container, Row, Col } from "../index";
import Link from "next/link";
const Categories = () => {
  return (
    <CategoriesContainer>
      <InnerCategoryContainer>
        <HeadingText text={"Categories"} marginBottom={true} />

        <Container>
          <Row>
            <Col lg={4} sm={12}>
              <Link href="/inspiration/beauty">
                <ImageOverlayContainer>
                  <StyledImage
                    src={beauty}
                    alt="beauty"
                    width={300}
                    height={189}
                  />
                  <OverlayBackground />
                  <OverlayText>Beauty</OverlayText>
                </ImageOverlayContainer>
              </Link>
            </Col>

            <Col lg={4} sm={12}>
              <Link href="/inspiration/home">
                <ImageOverlayContainer>
                  <StyledImage src={home} alt="home" width={300} height={189} />
                  <OverlayBackground />
                  <OverlayText>Home</OverlayText>
                </ImageOverlayContainer>
              </Link>
            </Col>
            <Col lg={4} sm={12}>
              <Link href="/inspiration/fashion">
                <ImageOverlayContainer>
                  <StyledImage
                    src={fashion}
                    alt="fashion"
                    width={300}
                    height={189}
                  />
                  <OverlayBackground />
                  <OverlayText>Fashion</OverlayText>
                </ImageOverlayContainer>
              </Link>
            </Col>
          </Row>
        </Container>
      </InnerCategoryContainer>
    </CategoriesContainer>
  );
};

export default Categories;
