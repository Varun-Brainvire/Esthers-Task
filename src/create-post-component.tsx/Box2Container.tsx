import Image from "next/image"
import React from "react"
import TopNavigation from "./TopNavigation"
import styled from "styled-components"
import StepButtons from "./StepButtons"
import BottomButtons from "./BottomButtons"
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  height: 100%;
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;
  align-self: stretch;
`

const Wrapper = styled.div`
  display: flex;
  padding: 50px 0px;
  justify-content: center;
  align-items: flex-end;
  gap: 10px;
  align-self: stretch;
  height: 100%;
`
export default function Box2Container() {
  return (
    <Wrapper>
      <Container>
        <Box>
          <TopNavigation></TopNavigation>
          <StepButtons></StepButtons>
        </Box>
        <BottomButtons></BottomButtons>
      </Container>
    </Wrapper>
  )
}
