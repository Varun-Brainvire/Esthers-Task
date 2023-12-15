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
  const categoryData = [
    { image: home, text: "Home" },
    { image: beauty, text: "Beauty" },
    { image: fashion, text: "Fashion" },
  ];

  return (
    <CategoriesContainer screen={true}>
      <InnerCategoryContainer>
        <HeadingText text={"Categories"} marginBottom={true} />

        <Container screen={true}>
          <Row screen={true}>
            {categoryData.map((category) => {
              return (
                <Col xl={4} lg={4} md={4} sm={12} sx={12} padding={true}>
                  <>
                    <Link href="/inspiration/beauty">
                      <ImageOverlayContainer>
                        <StyledImage
                          src={category.image}
                          alt="beauty"
                          width={300}
                          height={189}
                        />
                        <OverlayBackground />
                        <OverlayText>{category.text}</OverlayText>
                      </ImageOverlayContainer>
                    </Link>
                  </>
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
