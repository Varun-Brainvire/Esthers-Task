import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  background: #fff;
`

const ButtonContainer = styled.div`
  display: flex;
  height: 48px;
  padding: 0px 50px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`

const ButtonText = styled.p`
  color: #3a3a3a;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

export { Container, ButtonContainer, ButtonWrapper, ButtonText }
