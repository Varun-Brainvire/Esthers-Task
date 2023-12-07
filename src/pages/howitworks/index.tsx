import React from "react";
import { MainContainer } from "./howitStyle";
import { NavbarContainer } from "@/components/Navbar/NavbarStyle";
import MidContainer from "@/components/MidContainer/MidContainer";
import MobileTextContainer from "@/components/MobileTextContainer/MobileTextContainer";
import TopCreatorContainer from "@/components/TopCreatorContainer/TopCreatorContainer";
import data from "../../constants/topcreators.json";

type Props = {};
const index = (props: Props) => {
  return (
    <>
      <MainContainer>
        <NavbarContainer></NavbarContainer>
        <MidContainer />
        <MobileTextContainer />
        <TopCreatorContainer data={data} />
      </MainContainer>
    </>
  );
};

export default index;
