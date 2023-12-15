import React from "react";
import {
  ClientCard,
  ClientHeader,
  ClientImage,
  ClientText,
  ClientTextDiv,
  InnerClientContainer,
  MainClientContainer,
} from "./client.style";
import Image from "next/image";
import mainClientImage from "../../../public/Images/Image.svg";
import { Col, Container, Row } from "..";

interface Props {}
const ClientContainer = (props: Props) => {
  return (
    <>
      <MainClientContainer>
        <InnerClientContainer>
          <ClientHeader>
            <ClientText>
              <span className="client-text">What our client say's</span>
            </ClientText>
          </ClientHeader>
        </InnerClientContainer>
        <ClientCard>
          <ClientImage>
            <Image
              src={mainClientImage}
              alt="image"
              style={{ width: "100%", height: "100%" }}
            />
          </ClientImage>
          <ClientTextDiv>
            <span className="client-main-text">
              Maecenas viverra malesuada neque at scelerisque. Ut porta
              convallis tellus eget interdum. Maecenas eu ipsum fermentum,
              scelerisque mi quis, suscipit mauris. Aliquam id eros sed mauris
              ultricies semper a ac massa. Duis id turpis odio. Ut imperdiet
              tempus quam, eget auctor nisl mattis in. In aliquam dignissim
              ligula quis sodales.
            </span>
            <span className="client-name">- Pernilla Wahigren</span>
          </ClientTextDiv>
        </ClientCard>
      </MainClientContainer>
    </>
  );
};

export default ClientContainer;
