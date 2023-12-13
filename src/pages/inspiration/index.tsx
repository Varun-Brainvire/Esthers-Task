import Category from "../../components/inspirationPage/Category";
import PostCard from "../../components/inspirationPage/PostCard";
import { InspirationPageWrapper } from "@/components/inspirationPage/inspiration.styles";
import { useState } from "react";

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
        <PostCard selectedCategory={selectedCategory} />
      </InspirationPageWrapper>
    </>
  );
};

export default InspirationPage;
