import React from "react";
import { MainContainer } from "./howitStyle";
import { NavbarContainer } from "@/components/Navbar/NavbarStyle";
import MidContainer from "@/components/midContainer/MidContainer";
import MobileTextContainer from "@/components/mobileTextContainer/MobileTextContainer";
import TopCreatorContainer from "@/components/TopCreatorContainer/TopCreatorContainer";
import data from "../../constants/topcreators.json";
import CarauselContainer from "@/components/carauselContainer/CarauselContainer";
import ClientContainer from "@/components/clientContainer/ClientContainer";
import BrandContainer from "@/components/brandContainer/BrandContainer";
import { MainMakeupConatiner } from "@/components/MakeupContainer/MakeupStyle";
import MakeupContainer from "@/components/MakeupContainer/MakeupContainer";
import TopCreators from "@/components/topCreators/TopCreators";
import image1 from "../../../public/exuh39vgrvovmqfyygz4.jpg.png";
import image2 from "../../../public/htskse9m0xyldvqdtfvt.jpg.png";
import image3 from "../../../public/k1c24ostzy9wpkdggibz.jpg.png";
import image4 from "../../../public/josefiin.png";
import image5 from "../../../public/m27yhspfsiuqrhg2sdsu.jpg.png";
import CenterTabComponent from "@/components/centerTabComponent/CenterTabComponent";
import beauty from "../../../public/beauty.png";
import beauty2 from "../../../public/Images/beauty2.svg";
import ContainerDownload from "@/components/containerDownload/ContainerDownload";
import YoutubeContainer from "@/components/YoutubeContainer/YoutubeContainer";
import Footer from "@/components/footer/Footer";

type Props = {};
const index = (props: Props) => {
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
          <CenterTabComponent
            mainText={"Makeup genius?"}
            innerText={"Share your best tips & products with your followers"}
            image={beauty}
          />
        </MainContainer>
        {/* <ContainerDownload /> */}
        {/* <YoutubeContainer /> */}
        <CenterTabComponent
          mainText={"Style guru??"}
          innerText={"Share your outfits & make your looks shoppable"}
          image={beauty2}
        />
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default index;
