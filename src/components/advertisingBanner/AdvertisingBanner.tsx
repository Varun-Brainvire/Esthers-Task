import React from "react";
import {
  ImageOverlayContainer,
  OverlayBackground,
  OverlayText,
  StyledImage,
} from "../categories/categories.styles";
import Button from "../button/Button";
import { Container, Row, Col } from "../index";
import {
  ButtonDiv,
  CenterTabContainer,
  ImageDiv,
  InnerTabContainer,
  OverlayTextContent,
} from "./advertising.styles";

interface CenterComponentProps {
  mainText?: string;
  innerText?: string;
  image?: any;
  screen?: boolean;
  backgroundColor?: boolean;
  isMobile?: boolean;
  marginBottom?: boolean;
}

const AdvertisingBanner: React.FC<CenterComponentProps> = (props) => {

  return (
    <CenterTabContainer
      screen={true}
      backgroundColor={props?.backgroundColor}
      marginBottom={props.marginBottom}
    >
      <InnerTabContainer>
        <ImageOverlayContainer screen={true}>
          <Container>
            <Row>
              <Col
                xl={12}
                lg={12}
                md={12}
                sm={12}
                xs={12}
                paddingInBanner={true}
                isMobile={props?.isMobile}
              >
                <ImageDiv image={props.image.src} />

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
