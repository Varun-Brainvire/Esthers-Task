import { Inter } from "next/font/google";
import image1 from "../../public/exuh39vgrvovmqfyygz4.jpg.png";
import image2 from "../../public/htskse9m0xyldvqdtfvt.jpg.png";
import image3 from "../../public/k1c24ostzy9wpkdggibz.jpg.png";
import image4 from "../../public/josefiin.png";
import image5 from "../../public/m27yhspfsiuqrhg2sdsu.jpg.png";
import beauty from "../../public/beauty.png";
import home from "../../public/home.png";
import Banner from "@/components/bannerImage/Banner";
import TopCreators from "@/components/topCreators/TopCreators";
import Categories from "@/components/categories/Categories";
import AdvertisingBanner from "@/components/advertisingBanner/AdvertisingBanner";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const images = [
    { image: image1, text: "hairbyriddhi" },
    { image: image2, text: "oliver" },
    { image: image3, text: "divum" },
    { image: image4, text: "varun" },
    { image: image5, text: "rushikesh" },
    { image: image1, text: "hairbyriddhi" },
    { image: image2, text: "rushikesh" },
    { image: image2, text: "rushikesh" },
    { image: image2, text: "rushikesh" },
    { image: image2, text: "rushikesh" },
  ];

  return (
    <>
      <div>
        <Banner text={"Shop the styles of your favorite creators"} />
        <TopCreators data={images} />
        <Categories />
        <AdvertisingBanner
          mainText={"Got a beautiful home?"}
          innerText={"Share your design inspiration & make your home shoppable"}
          image={home}
          isMobile={true}
        />
        <AdvertisingBanner
          mainText={"Makeup genius?"}
          innerText={"Share your best tips & products with your followers"}
          image={beauty}
          backgroundColor={true}
          isMobile={true}
          marginBottom={true}
        />
      </div>
    </>
  );
}
