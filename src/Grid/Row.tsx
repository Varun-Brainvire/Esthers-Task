import styled from "styled-components"
import { media, Row as sbgRow } from "styled-bootstrap-grid"

export const Row = styled(sbgRow)`
  display: flex;
  flex-direction: row;

  flex-wrap: nowrap;
  justify-content: center;
`

export const CreatePostRow = styled(Row)`
  display: flex;
  padding: 10px;
  height: 80%;
  width: 80%;

  /* border: 1px dotted black; */
`
