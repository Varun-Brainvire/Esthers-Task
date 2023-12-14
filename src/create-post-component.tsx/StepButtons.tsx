import styled from "styled-components"
import {
  Container,
  BoxContainer,
  Button_Text_And_Icon_Wrapper,
  StepButtonText,
} from "./StepButton.styles"
import Image from "next/image"
import Icon_goForward from "../../public/Images/Icon - Go forward ( Right caret ) (3).png"
const Box = ({ label }: { label: string }) => {
  return (
    <BoxContainer>
      <Button_Text_And_Icon_Wrapper>
        <StepButtonText>{label}</StepButtonText>
        <Image alt="" src={Icon_goForward}></Image>
      </Button_Text_And_Icon_Wrapper>
    </BoxContainer>
  )
}

export default function StepButtons() {
  return (
    <Container>
      <Box label="Add caption & hashtags"></Box>
      <Box label="Add products"></Box>
      <Box label="Add comments"></Box>
    </Container>
  )
}
