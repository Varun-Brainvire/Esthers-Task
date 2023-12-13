import React from "react";
import styled from "styled-components";
import {
  ImageOverlayContainer,
  OverlayBackground,
  OverlayText,
  StyledImage,
} from "../categories/categories.styles";
import Button from "../button/Button";
import { Container, Row, Col } from "../../components/index";
import colors from "@/theme";

interface CenterComponentProps {
  mainText?: string;
  innerText?: string;
  image?: any;
  screen?: boolean;
}

export const CenterTabContainer = styled.div<CenterComponentProps>`
  padding: 2% 12% 4% 12%;
  background-color: rgb(244, 240, 236);

  @media (max-width: 768px) {
    padding: ${({ screen }) => (screen ? "0" : "")};
    margin-bottom: 20px;
  }
`;

export const InnerTabContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
`;

export const OverlayTextContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${colors.color.white};
  text-align: center;
  width: 100%;
  font-family: Strawford, "Lexend Deca", Inter, sans-serif;

  p {
    font-size: 28px;
    font-weight: bold;
    padding-bottom: 10px;
    font-family: Strawford, "Lexend Deca", Inter, sans-serif;
  }

  span {
    margin: 5px 0px 20px;
    font-family: Strawford, "Lexend Deca", Inter, sans-serif;
  }
`;

export const ButtonDiv = styled.div`
  margin-top: 20px;
`;

const CenterTabComponent: React.FC<CenterComponentProps> = (props) => {
  return (
    <CenterTabContainer screen={true}>
      <InnerTabContainer>
        <ImageOverlayContainer screen={true}>
          <Container>
            <Row>
              <Col md={12} screen={true}>
                <StyledImage
                  src={props.image}
                  alt="beauty"
                  width={300}
                  height={235}
                  screen={true}
                />
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

export default CenterTabComponent;
