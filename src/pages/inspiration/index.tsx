import Category from "../../components/inspirationPage/Category";
import ImageGallery from "../../components/inspirationPage/PostCard";
import { InspirationPageWrapper } from "@/components/inspirationPage/inspiration.styles";
import { useState } from "react";

const Index: React.FC = () => {
  // Setting the initial selected category to "All" for default rendering
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const handleCategoryChange = (category: string) => {
    // Updated selected category when a category tab is clicked
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

export default Index;
