import React from "react";
import {
  CarauselCardDiv,
  CarauselDiv,
  CarauselHeading,
  CarauselImageDiv,
  CarauselTextDiv,
  CarauselTextInnerDiv,
  MainCarauselContainer,
} from "./carausel.style.tsx";
import Image from "next/image";
import { Col, Container, Row } from "..";

interface Props {}

const CarauselContainer = (props: Props) => {
  return (
    <>
      <Container>
        <CarauselHeading>
          <div className="carausel-head-div">
            <span className="howitwork">How It works</span>
          </div>
        </CarauselHeading>
        <Row>
          <Col xl={4} md={4} lg={4} sm={6} sx={12}>
            <div style={{ paddingBottom: "10%" }}>
              <Image
                src="/Images/card1.svg"
                height={391}
                width={378.66}
                alt="img"
              />

              <CarauselTextInnerDiv>
                <span className="carausel-head">Create your profile</span>
                <span className="carausel-text">
                  Have your profile ready in less then 1 minute
                </span>
              </CarauselTextInnerDiv>
            </div>
          </Col>
          <Col xl={4} md={4} lg={4} sm={6} sx={12}>
            <div style={{ paddingBottom: "10%" }}>
              <Image
                src="/Images/card1.svg"
                height={391}
                width={378.66}
                alt="img"
              />

              <CarauselTextInnerDiv>
                <span className="carausel-head">Create your profile</span>
                <span className="carausel-text">
                  Have your profile ready in less then 1 minute
                </span>
              </CarauselTextInnerDiv>
            </div>
          </Col>
          <Col xl={4} md={4} lg={4} sm={6} sx={12}>
            <div style={{ paddingBottom: "10%" }}>
              <Image
                src="/Images/card1.svg"
                height={391}
                width={378.66}
                alt="img"
              />

              <CarauselTextInnerDiv>
                <span className="carausel-head">Create your profile</span>
                <span className="carausel-text">
                  Have your profile ready in less then 1 minute
                </span>
              </CarauselTextInnerDiv>
            </div>
          </Col>
        </Row>
      </Container>
      {/* <MainCarauselContainer>
        <CarauselHeading>
          <div className="carausel-head-div">
            <span className="howitwork">How It works</span>
          </div>
        </CarauselHeading>
        <CarauselDiv>
          <CarauselCardDiv>
            <CarauselImageDiv>
              <div className="carausel-image">
                <Image
                  src="/Images/card1.svg"
                  height={391}
                  width={378.66}
                  alt="img"
                />
              </div>
            </CarauselImageDiv>
          </CarauselCardDiv>
          <CarauselCardDiv>
            <CarauselImageDiv>
              <div className="carausel-image">
                <Image
                  src="/Images/card2.svg"
                  height={391}
                  width={378.66}
                  alt="img"
                />
              </div>
            </CarauselImageDiv>
          </CarauselCardDiv>
          <CarauselCardDiv>
            <CarauselImageDiv>
              <div className="carausel-image">
                <Image
                  src="/Images/card3.svg"
                  height={391}
                  width={378.66}
                  alt="img"
                />
              </div>
            </CarauselImageDiv>
          </CarauselCardDiv>
        </CarauselDiv>
        <CarauselTextDiv>
          <CarauselTextInnerDiv>
            <span className="carausel-head">Create your profile</span>
            <span className="carausel-text">
              Have your profile ready in less then 1 minute
            </span>
          </CarauselTextInnerDiv>
          <CarauselTextInnerDiv>
            <span className="carausel-head">
              Tag content with product links or create styleboards
            </span>
            <span className="carausel-text">
              Import directly from Instagram or upload content and add product
              links
            </span>
          </CarauselTextInnerDiv>
          <CarauselTextInnerDiv>
            <span className="carausel-head">Share with followers</span>
            <span className="carausel-text">
              Add your personal URL to your social channels and share it with
              your followers
            </span>
          </CarauselTextInnerDiv>
        </CarauselTextDiv>
      </MainCarauselContainer> */}
    </>
  );
};

export default CarauselContainer;
