import Category from "../../components/inspirationPage/Category";
import PostCard from "../../components/inspirationPage/PostCard";
import { InspirationPageWrapper } from "@/components/inspirationPage/inspiration.styles";

const Fashion: React.FC = () => {
  return (
    <InspirationPageWrapper>
      <Category
        selectedCategory="Fashion"
        onTabClick={(category) => console.log(category)}
      />
      <PostCard selectedCategory="Fashion" />
    </InspirationPageWrapper>
  );
};

export default Fashion;
