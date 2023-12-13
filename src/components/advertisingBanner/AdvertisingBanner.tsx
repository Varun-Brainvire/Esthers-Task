import React from "react";
import styled from "styled-components";
import {
  ImageOverlayContainer,
  OverlayBackground,
  OverlayText,
  StyledImage,
} from "../categories/categories.styles";
import Button from "../button/Button";
import { Container, Row, Col } from "../index";
import colors from "@/theme";
import {
  ButtonDiv,
  CenterTabContainer,
  InnerTabContainer,
  OverlayTextContent,
} from "./advertising.styles";

interface CenterComponentProps {
  mainText?: string;
  innerText?: string;
  image?: any;
  screen?: boolean;
  marginBottom?: boolean;
}

const AdvertisingBanner: React.FC<CenterComponentProps> = (props) => {
  return (
    <CenterTabContainer screen={true} marginBottom={true}>
      <InnerTabContainer>
        <ImageOverlayContainer screen={true}>
          <Container>
            <Row>
              <Col md={12} screen={true}>
                <div>
                  <StyledImage
                    src={props.image}
                    alt="beauty"
                    width={300}
                    height={235}
                    screen={true}
                  />
                </div>

                <OverlayBackground height={true} screen={true} />
                <OverlayTextContent>
                  <p>{props.mainText}</p>
                  <span>{props.innerText}</span>
                  <ButtonDiv>
                    <Button content={"Create your shop"} />
                  </ButtonDiv>
                </OverlayTextContent>
              </Col>
            </Row>
          </Container>
        </ImageOverlayContainer>
      </InnerTabContainer>
    </CenterTabContainer>
  );
};

export default AdvertisingBanner;
