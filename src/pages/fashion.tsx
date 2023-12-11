import Category from "../components/inspirationPage/Category";
import ImageGallery from "../components/inspirationPage/ImageGallery";
import { InspirationPageWrapper } from "../pages/inspiration";

const Fashion: React.FC = () => {
  return (
    <InspirationPageWrapper>
      <Category
        selectedCategory="Fashion"
        onTabClick={(category) => console.log(category)}
      />
      <ImageGallery selectedCategory="Fashion" />
    </InspirationPageWrapper>
  );
};

export default Fashion;
