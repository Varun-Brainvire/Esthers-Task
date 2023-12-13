import Category from "../components/inspirationPage/Category";
import ImageGallery from "../components/inspirationPage/ImageGallery";
import styled from "styled-components";
import { useState } from "react";

export const InspirationPageWrapper = styled.div`
  padding-top: 65px;
  padding-left: 120px;
  padding-right: 120px;
`;

const InspirationPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <InspirationPageWrapper>
        <Category
          selectedCategory={selectedCategory}
          onTabClick={handleCategoryChange}
        />
        <ImageGallery selectedCategory={selectedCategory} />
      </InspirationPageWrapper>
    </>
  );
};

export default InspirationPage;
