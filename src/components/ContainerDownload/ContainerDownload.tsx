import React from "react";
import {
  CustomDivText,
  InnerContainerDownload,
  InnerIconChild,
  InnerIconContainer,
  MainContainerDownload,
} from "./containerdownload.style";
import Image from "next/image";
import down1 from "../../../public/Images/down1.svg";
import down2 from "../../../public/Images/down2.svg";
import down3 from "../../../public/Images/down3.svg";
import { Col, Container, Row } from "..";

interface Props {}

const ContainerDownload = (props: Props) => {
  return (
    <>
      {/* <MainContainerDownload>
        <InnerContainerDownload>
          <InnerIconContainer>
            <InnerIconChild>
              <Image
                src={down1}
                alt="image"
                style={{ width: "42.14px", height: "47.238px" }}
              />
              <span className="downloadtext">500+</span>
            </InnerIconChild>
            <InnerIconChild>
              <Image
                src={down2}
                alt="image"
                style={{ width: "42.14px", height: "47.238px" }}
              />
              <span className="downloadtext">2 000 000+</span>
            </InnerIconChild>
            <InnerIconChild>
              <Image
                src={down3}
                alt="image"
                style={{ width: "42.14px", height: "47.238px" }}
              />
              <span className="downloadtext">300+</span>
            </InnerIconChild>
          </InnerIconContainer>
        </InnerContainerDownload>
      </MainContainerDownload> */}
      {/* <div>
        <Row>
          <InnerContainerDownload>
            <InnerIconContainer>
              <Col xl={4} md={4} lg={4} sm={12} sx={12}></Col>
              <Col xl={4} md={4} lg={4} sm={12} sx={12}></Col>
              <Col xl={4} md={4} lg={4} sm={12} sx={12}>
                <InnerIconChild>
                  <Image
                    src={down1}
                    alt="image"
                    style={{ width: "42.14px", height: "47.238px" }}
                  />
                  <CustomDivText>
                    <span className="downloadtext">500+</span>
                    <span className="brand">Brands</span>
                  </CustomDivText>
                  <span className="line"></span>
                </InnerIconChild>
              </Col>
            </InnerIconContainer>
          </InnerContainerDownload>
        </Row>
      </div> */}

      {/* <Container>
      <Row>
      
        <Col xl={2}>
          <InnerIconContainer>
            <InnerIconChild>
              <Image
                src={down1}
                alt="image"
               
              />
              <CustomDivText>
                <span className="downloadtext">500+</span>
                <span className="brand">Brands</span>
              </CustomDivText>
              <span className="line"></span>
            </InnerIconChild>
          </InnerIconContainer>
        </Col>
        <Col xl={2}>
          {" "}
          <InnerIconContainer>
            <InnerIconChild>
              <Image
                src={down1}
                alt="image"

              />
              <CustomDivText>
                <span className="downloadtext">500+</span>
                <span className="brand">Brands</span>
              </CustomDivText>
              <span className="line"></span>
            </InnerIconChild>
          </InnerIconContainer>
        </Col>
        <Col xl={2}>
          {" "}
          <InnerIconContainer>
            <InnerIconChild>
              <Image
                src={down1}
                alt="image"
               
              />
              <CustomDivText>
                <span className="downloadtext">500+</span>
                <span className="brand">Brands</span>
              </CustomDivText>
              <span className="line"></span>
            </InnerIconChild>
          </InnerIconContainer>
        </Col>
        <Col xl={2}>
          {" "}
          <InnerIconContainer>
            <InnerIconChild>
              <Image
                src={down1}
                alt="image"
              
              />
              <CustomDivText>
                <span className="downloadtext">500+</span>
                <span className="brand">Brands</span>
              </CustomDivText>
              <span className="line"></span>
            </InnerIconChild>
          </InnerIconContainer>
        </Col>
        <Col xl={2}>
          {" "}
          <InnerIconContainer>
            <InnerIconChild>
              <Image
                src={down1}
                alt="image"
               
              />
              <CustomDivText>
                <span className="downloadtext">500+</span>
                <span className="brand">Brands</span>
              </CustomDivText>
              <span className="line"></span>
            </InnerIconChild>
          </InnerIconContainer>
        </Col>
        <Col xl={2}>
          {" "}
          <InnerIconContainer>
            <InnerIconChild>
              <Image
                src={down1}
                alt="image"
                
              />
              <CustomDivText>
                <span className="downloadtext">500+</span>
                <span className="brand">Brands</span>
              </CustomDivText>
              <span className="line"></span>
            </InnerIconChild>
          </InnerIconContainer>
        </Col>
        
      </Row>
      </Container> */}
    </>
  );
};

export default ContainerDownload;
