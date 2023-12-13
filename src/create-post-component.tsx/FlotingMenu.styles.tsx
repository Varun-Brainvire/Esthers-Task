import styled from "styled-components"

const FlotingMenuContainer = styled.div`
  flex-grow: 1;
  display: flex;
  padding: 0px 26px 0px 25px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;
  align-self: stretch;
  border-radius: 6px 6px 0px 0px;
  border: 1px dashed #d9d9d9;
`

const Box = styled.div`
  display: flex;
  width: 150px;
  padding: 0px 9px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Label = styled.label`
  display: flex;
  width: 150px;
  padding: 0px 9px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`
const Text = styled.div`
  align-self: stretch;
  color: var(--Green, #34554a);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`
export { Label, Text, FlotingMenuContainer, Box, Input, ImageWrapper }
