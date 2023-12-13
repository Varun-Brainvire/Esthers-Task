import ImageGallery from "../components/inspirationPage/ImageGallery";
import Category from "../components/inspirationPage/Category";
import { InspirationPageWrapper } from "../pages/inspiration";

const Home: React.FC = () => {
  return (
    <InspirationPageWrapper>
      <Category
        selectedCategory="Home"
        onTabClick={(category) => console.log(category)}
      />
      <ImageGallery selectedCategory="Home" />
    </InspirationPageWrapper>
  );
};

export default Home;
