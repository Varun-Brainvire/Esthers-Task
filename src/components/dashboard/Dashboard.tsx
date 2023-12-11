import React from "react";
import Layout from "../Layout";
import Banner from "../bannerImage/Banner";
import image1 from "../../../public/exuh39vgrvovmqfyygz4.jpg.png";
import image2 from "../../../public/htskse9m0xyldvqdtfvt.jpg.png";
import image3 from "../../../public/k1c24ostzy9wpkdggibz.jpg.png";
import image4 from "../../../public/josefiin.png";
import image5 from "../../../public/m27yhspfsiuqrhg2sdsu.jpg.png";
import TopCreators from "../topCreators/TopCreators";
import Categories from "../categories/Categories";
import CenterTabComponent from "../centerTabComponent/CenterTabComponent";
import beauty from "../../../public/beauty.png";
import home from "../../../public/home.png";

const Dashboard = () => {
  const images = [
    { image: image1, text: "hairbyriddhi" },
    { image: image2, text: "oliver" },
    { image: image3, text: "divum" },
    { image: image4, text: "varun" },
    { image: image5, text: "rushikesh" },
    { image: image1, text: "hairbyriddhi" },
    { image: image2, text: "rushikesh" },
  ];
  return (
    <div>
      <Banner text={"Shop the styles of your favorite creators"} />
      <TopCreators images={images} />
      <Categories />
      <CenterTabComponent
        mainText={"Makeup genius?"}
        innerText={"Share your best tips & products with your followers"}
        image={beauty}
      />
      <CenterTabComponent
        mainText={"Got a beautiful home?"}
        innerText={"Share your design inspiration & make your home shoppable"}
        image={home}
      />
    </div>
  );
};

Dashboard.getLayout = (page: any) => <Layout>{page}</Layout>;

export default Dashboard;
