import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  background: #fff;
  align-items: center;
  /* border: 1px solid black; */

  @media (width <= 576px) {
    margin-top: 5px;
  }
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

  @media screen and (max-width: 991px) {
    min-height: 60px;
    padding: 4px 15px;
    box-shadow: rgba(0, 0, 0, 0.06) 0px -10px 10px -10px;
  }
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

  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 95%;

  text-transform: capitalize;
  font-weight: 600;

  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`

export { Container, ButtonContainer, ButtonWrapper, ButtonText }
