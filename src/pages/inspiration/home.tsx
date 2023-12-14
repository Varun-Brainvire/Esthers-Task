import PostCard from "../../components/inspirationPage/PostCard";
import Category from "../../components/inspirationPage/Category";
import { InspirationPageWrapper } from "@/components/inspirationPage/inspiration.styles";

const Home: React.FC = () => {
  return (
    <InspirationPageWrapper>
      <Category
        selectedCategory="Home"
        onTabClick={(category) => console.log(category)}
      />
      <PostCard selectedCategory="Home" />
    </InspirationPageWrapper>
  );
};

export default Home;
