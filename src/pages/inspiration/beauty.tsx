import PostCard from "../../components/inspirationPage/PostCard";
import Category from "../../components/inspirationPage/Category";
import { InspirationPageWrapper } from "@/components/inspirationPage/inspiration.styles";

const Beauty: React.FC = () => {
  return (
    <InspirationPageWrapper>
      <Category
        selectedCategory="Beauty"
        onTabClick={(category) => console.log(category)}
      />
      <PostCard selectedCategory="Beauty" />
    </InspirationPageWrapper>
  );
};

export default Beauty;
