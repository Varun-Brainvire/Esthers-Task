import ImageGallery from "../components/inspirationPage/ImageGallery";
import Category from "../components/inspirationPage/Category";
import { InspirationPageWrapper } from "../pages/inspiration";

const Beauty: React.FC = () => {
  return (
    <InspirationPageWrapper>
      <Category
        selectedCategory="Beauty"
        onTabClick={(category) => console.log(category)}
      />
      <ImageGallery selectedCategory="Beauty" />
    </InspirationPageWrapper>
  );
};

export default Beauty;
