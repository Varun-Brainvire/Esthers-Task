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
  const categoryData = [
    { image: beauty, text: "Beauty" },
    { image: home, text: "Home" },
    { image: fashion, text: "Fashion" },
  ];

  return (
    <CategoriesContainer screen={true}>
      <InnerCategoryContainer>
        <HeadingText text={"Categories"} marginBottom={true} />

        <Container>
          <Row>
            {categoryData.map((cardCategory) => {
              return (
                <Col lg={4} xs={4} md={4}>
                  <ImageOverlayContainer width={true}>
                    <StyledImage
                      src={cardCategory.image}
                      alt="beauty"
                      width={300}
                      height={189}
                    />
                    <OverlayBackground />
                    <OverlayText>{cardCategory.text}</OverlayText>
                  </ImageOverlayContainer>
                </Col>
              );
            })}
          </Row>
        </Container>
      </InnerCategoryContainer>
    </CategoriesContainer>
  );
};

export default Categories;
