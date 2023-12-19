import React from "react";
import { MainContainer } from "./howitStyle";
import { NavbarContainer } from "../../components/Navbar/NavbarStyle";
import MidContainer from "../../components/midContainer/MidContainer";
import MobileTextContainer from "../../components/mobileTextContainer/MobileTextContainer";
// import TopCreatorContainer from "@/components/TopCreatorContainer/TopCreatorContainer";
// import data from "../../constants/topcreators.json";
// import { MainMakeupConatiner } from "@/components/MakeupContainer/MakeupStyle";
// import MakeupContainer from "@/components/MakeupContainer/MakeupContainer";
import TopCreators from "../../components/topCreators/TopCreators";
import image1 from "../../../public/exuh39vgrvovmqfyygz4.jpg.png";
import image2 from "../../../public/htskse9m0xyldvqdtfvt.jpg.png";
import image3 from "../../../public/k1c24ostzy9wpkdggibz.jpg.png";
// import image4 from "../../../public/josefiin.png";
// import image5 from "../../../public/m27yhspfsiuqrhg2sdsu.jpg.png";
// import beauty from "../../public/Images/beauty1.svg";
// import beauty2 from "../../public/Images/beauty2.svg";
import YoutubeContainer from "../../components/YoutubeContainer/YoutubeContainer";
// import AdvertisingBanner from "../../components/advertisingBanner/AdvertisingBanner";
// import MidContainer from "@/components/midContainer/MidContainer";
// import MobileTextContainer from "@/components/mobileTextContainer/MobileTextContainer";
import CarauselContainer from "../../components/carauselContainer/CarauselContainer";
// import ClientContainer from "@/components/clientContainer/ClientContainer";
import BrandContainer from "../../components/brandContainer/BrandContainer";
// import ContainerDownload from "@/components/containerDownload/ContainerDownload";
import AccordianContainer from "../../components/accordianContainer/AccordianContainer";
import accordianJsonData from "../../constants/accordianData.json";
import ClientContainer from "@/components/clientContainer/ClientContainer";
import AdvertisingBanner from "@/components/advertisingBanner/AdvertisingBanner";
import Beauty1 from "../../../public/Images/beauty1.svg";
import Beauty2 from "../../../public/Images/beauty2.svg";
import ContainerDownload from "@/components/containerDownload/ContainerDownload";
// import Banner from "@/components/bannerImage/Banner";

type Props = {
  marginBottom: boolean;
};
const index = (props: Props) => {
  const images = [
    { image: image1, text: "hairbyriddhi" },
    { image: image2, text: "oliver" },
    { image: image3, text: "divum" },
    // { image: image4, text: "varun" },
    // { image: image5, text: "rushikesh" },
    { image: image1, text: "hairbyriddhi" },
    { image: image2, text: "rushikesh" },
    { image: image2, text: "rushikesh" },
    { image: image2, text: "rushikesh" },
    { image: image2, text: "rushikesh" },
    { image: image2, text: "rushikesh" },
  ];
  return (
    <>
      <div>
        <MainContainer>
          <NavbarContainer></NavbarContainer>
          <MidContainer
            text={
              "Grow your affiliate business by making your content shoppable"
            }
          />

          <MobileTextContainer />
          {/* <TopCreatorContainer data={data} /> */}
          <TopCreators data={images} />
          <CarauselContainer />
          <ClientContainer />
          <BrandContainer />
          {/* <MakeupContainer /> */}
          <AdvertisingBanner
            mainText={"Makeup genius?"}
            innerText={"Share your best tips & products with your followers"}
            image={Beauty1}
            isPadding={true}
          />
        </MainContainer>
        <ContainerDownload />
        <YoutubeContainer />
        <AccordianContainer data={accordianJsonData} isBackground />
        <AdvertisingBanner
          mainText={"Makeup genius?"}
          innerText={"Share your best tips & products with your followers"}
          image={Beauty2}
          backgroundColor={true}
          isMobile={true}
        />
      </div>
    </>
  );
};

export default index;
