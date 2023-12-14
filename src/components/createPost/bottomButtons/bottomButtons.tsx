import React from "react"
import {
  Container,
  ButtonBox,
  Styled_Button,
  ButtonText,
  Publish_buttom,
  Publish_button_text,
  // MobileWrapper,
  // Wrapper,
} from "./bottomButtons.styles"
import styled from "styled-components"

const WrapperBox = styled.div`
  @media (width < 911px) {
    display: none;
  }

  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`

const MobileWrapperBox = styled.div`
  @media (width >= 911px) {
    display: none;
  }

  width: 100%;
  display: flex;
  align-self: stretch;
`
const Wrapper = () => {
  return (
    <WrapperBox>
      <ButtonBox>
        <Button label="My drafts" />
      </ButtonBox>
      <ButtonBox>
        <Button label="Save as draft" />
        <PublishButton />
      </ButtonBox>
    </WrapperBox>
  )
}

const MobileWrapper = () => {
  return (
    <MobileWrapperBox>
      <ButtonBox>
        <Button label="Save as draft" />
      </ButtonBox>
      <ButtonBox label={"call to action"}>
        <Button label="Apply to be Creator" />
      </ButtonBox>
    </MobileWrapperBox>
  )
}

// background-color: ${(props) =>
//   props.label === "Apply to be Creator" ? "rgb(52, 85, 74)" : ""};
// color: ${(props) => (props.label === "Apply to be Creator" ? "white" : "")};
export default function BottomButtons() {
  return (
    <Container>
      <Wrapper />
      <MobileWrapper />
      {/* <ButtonBox>
        <Button label="My drafts" />
      </ButtonBox>
      <ButtonBox>
        <Button label="Save as draft" />
        <PublishButton />
      </ButtonBox> */}
    </Container>
  )
}

const Button = ({ label }: any) => {
  return (
    <Styled_Button label={label}>
      <ButtonText label={label}> {label}</ButtonText>
    </Styled_Button>
  )
}

const PublishButton = () => {
  return (
    <Publish_buttom>
      <Publish_button_text>Publish</Publish_button_text>
    </Publish_buttom>
  )
}
