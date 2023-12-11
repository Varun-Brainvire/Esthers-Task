import React from "react";
import { MainContainer } from "./howitStyle";
import { NavbarContainer } from "@/components/Navbar/NavbarStyle";
import MidContainer from "@/components/MidContainer/MidContainer";
import MobileTextContainer from "@/components/MobileTextContainer/MobileTextContainer";
import TopCreatorContainer from "@/components/TopCreatorContainer/TopCreatorContainer";
import data from "../../constants/topcreators.json";
import CarauselContainer from "@/components/CarauselContainer/CarauselContainer";
import ClientContainer from "@/components/ClientContainer/ClientContainer";
import BrandContainer from "@/components/BrandContainer/BrandContainer";
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
import ContainerDownload from "@/components/ContainerDownload/ContainerDownload";
import YoutubeContainer from "@/components/YoutubeContainer/YoutubeContainer";

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
  ];
  return (
    <>
      <div>
        <MainContainer>
          <NavbarContainer></NavbarContainer>
          <MidContainer />
          <MobileTextContainer />
          {/* <TopCreatorContainer data={data} /> */}
          <TopCreators images={images} />
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
        <ContainerDownload />
        <YoutubeContainer />
      </div>
    </>
  );
};

export default index;
