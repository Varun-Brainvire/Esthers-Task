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

const Categories = () => {
  return (
    <CategoriesContainer screen={true}>
      <InnerCategoryContainer>
        <HeadingText text={"Categories"} marginBottom={true} />

        <Container>
          <Row>
            <Col lg={4}>
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
            </Col>
            <Col lg={4}>
              <ImageOverlayContainer>
                <StyledImage src={home} alt="home" width={300} height={189} />
                <OverlayBackground />
                <OverlayText>Home</OverlayText>
              </ImageOverlayContainer>
            </Col>
            <Col lg={4}>
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
            </Col>
          </Row>
        </Container>
      </InnerCategoryContainer>
    </CategoriesContainer>
  );
};

export default Categories;
