import React from "react";
import {
  CategoryContainer,
  SingleCategoryCard,
  HeadContainer,
  TitleContainer,
  OverlayDiv,
  OverlayText,
} from "./category.styles";
import { CategoryImage } from "./category.styles";
import beautypic from "public/inspirationpageimages/beauty 1.jpg";
import fashionpic from "public/inspirationpageimages/Fashion 1.png";
import homepic from "public/inspirationpageimages/home 2 - alt 1.png";
import { Container, Row, Col } from "../index";
import { useRouter } from "next/router";

interface Category {
  label: string;
  imageSrc?: string | any;
}

interface CategoryProps {
  selectedCategory: string;
  onTabClick: (category: string) => void;
}

const Category: React.FC<CategoryProps> = ({
  selectedCategory,
  onTabClick,
}) => {
  const router = useRouter();
  const filters: Category[] = [
    { label: "All" },
    { label: "Beauty", imageSrc: beautypic },
    { label: "Home", imageSrc: homepic },
    { label: "Fashion", imageSrc: fashionpic },
  ];

  const getTitleContent = (tab: string) => {
    switch (tab) {
      case "All":
        return "Explore";
      case "Beauty":
        return "Beauty Inspiration";
      case "Home":
        return "Home Inspiration";
      case "Fashion":
        return "Fashion Inspiration";
      default:
        return "Explore";
    }
  };

  return (
    <>
      <HeadContainer>
        <Container>
          <Row>
            <Col lg={12}>
              <TitleContainer>
                {getTitleContent(selectedCategory)}
              </TitleContainer>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <CategoryContainer>
              {filters.map((filter) => (
                <Col lg={3} sm={3} md={3}>
                  <SingleCategoryCard
                    key={filter.label}
                    onClick={() => {
                      onTabClick(filter.label);
                      if (filter.label === "All") {
                        router.push("/inspiration");
                      } else {
                        router.push(`/${filter.label.toLowerCase()}`);
                      }
                    }}
                    style={{
                      backgroundColor:
                        selectedCategory === "All"
                          ? "rgba(52, 85, 74, 1)"
                          : "rgba(244, 240, 236, 1)",
                    }}
                  >
                    {filter.imageSrc && (
                      <CategoryImage
                        src={filter.imageSrc}
                        alt={`${filter.label} pic`}
                        width={230}
                        height={180}
                        style={{
                          opacity:
                            selectedCategory === filter.label ? "1" : "0.6",
                        }}
                      />
                    )}
                    <OverlayDiv
                      style={{
                        backgroundColor:
                          selectedCategory === "All"
                            ? "rgba(52, 85, 74, 0.5)"
                            : "rgba(0, 0, 0, 0.0)",
                      }}
                    >
                      <OverlayText>{filter.label}</OverlayText>
                    </OverlayDiv>
                  </SingleCategoryCard>
                </Col>
              ))}
            </CategoryContainer>
          </Row>
        </Container>
      </HeadContainer>
    </>
  );
};

export default Category;
