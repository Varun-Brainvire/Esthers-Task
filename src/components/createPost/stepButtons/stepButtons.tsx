import React from "react"
import {
  ButtonContainer,
  Container,
  ButtonWrapper,
  ButtonText,
} from "./stepButtons.styles"
import Image from "next/image"
import Icon_goForward from "../../../../public/Images/Icon - Go forward ( Right caret ) (3).png"
export default function StepButtons() {
  return (
    <Container>
      {/* <ButtonContainer></ButtonContainer> */}
      <Button>Add caption & hashtags</Button>
      <Button>Add caption & hashtags</Button>
      <Button>Add caption & hashtags</Button>
    </Container>
  )
}

const Button = ({ children, backgroundColor, onchange }: any) => {
  return (
    <>
      <ButtonContainer>
        <ButtonWrapper>
          <ButtonText> {children}</ButtonText>
          <Image alt="" src={Icon_goForward}></Image>
        </ButtonWrapper>
      </ButtonContainer>
    </>
  )
}

// const DeleteButon = ({ onchange }) => {
//   return (
//     <Button onchange={onchange} backgroundColor="blue">
//       Delete{" "}
//     </Button>
//   )
// }
// const AddButon = ({ onchange }) => {
//   return (
//     <Button onchange={onchange} backgroundColor="blue">
//       Add
//     </Button>
//   )
// }

//make it generic
