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

type Props = {};
const index = (props: Props) => {
  return (
    <>
      <MainContainer>
        <NavbarContainer></NavbarContainer>
        <MidContainer />
        <MobileTextContainer />
        <TopCreatorContainer data={data} />
        <CarauselContainer />
        <ClientContainer />
        <BrandContainer />
        <MakeupContainer />
      </MainContainer>
    </>
  );
};

export default index;
