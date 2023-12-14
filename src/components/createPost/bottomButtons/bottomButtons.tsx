import React from "react"
import {
  Container,
  ButtonBox,
  Styled_Button,
  ButtonText,
  Publish_buttom,
  Publish_button_text,
} from "./bottomButtons.styles"

export default function BottomButtons() {
  return (
    <Container>
      <ButtonBox>
        <Button label="My drafts" />
      </ButtonBox>
      <ButtonBox>
        <Button label="Save as draft" />
        <PublishButton />
      </ButtonBox>
    </Container>
  )
}

const Button = ({ label }: any) => {
  return (
    <Styled_Button>
      <ButtonText> {label}</ButtonText>
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
