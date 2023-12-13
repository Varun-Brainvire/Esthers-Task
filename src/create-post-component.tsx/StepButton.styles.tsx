import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
`

const BoxContainer = styled.div`
  display: flex;
  height: 48px;
  padding: 0px 50px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  background: #fff;
`
const Button_Text_And_Icon_Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`

const StepButtonText = styled.div`
  width: 250px;
  color: #3a3a3a;
  font-family: Strawford;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`

export { Container, BoxContainer, Button_Text_And_Icon_Wrapper, StepButtonText }
