import styled from "styled-components"
import { Container, Row, Col } from "../../../components/index"
const MainContainer = styled(Container)`
  /* border: 2px dotted black; */
  height: 80%;
  width: 70%;
  margin: 0;
  padding: 0;
  background-color: #f4f0ec;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  border-radius: 8px;
  border: 1px solid var(--Light-Grey, #eee);
  background: #fff;
  box-shadow: 0px 20px 50px 0px rgba(0, 0, 0, 0.06);
`

const MainConatinerRow = styled(Row)`
  height: 100%;
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  border: 1px solid black;
`

const MainContainerCol = styled(Col)`
  padding: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  box-sizing: border-box;
  padding: 0;
  overflow: scroll;
`

const MainContainerCol2 = styled(Col)`
  background-color: #ffffff;
  display: flex;
  padding: 50px 0px;
  justify-content: center;
  align-items: flex-end;
  gap: 10px;
  align-self: stretch;
  padding: 50px 0px;
`

const Box = styled.div`
  display: flex;
  width: 95%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  align-self: stretch;

  /* width: 100%; */
`

const Box1_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;
  align-self: stretch;
`

export {
  Box,
  MainContainer,
  MainContainerCol2,
  MainContainerCol,
  MainConatinerRow,
  Box1_Wrapper,
}
