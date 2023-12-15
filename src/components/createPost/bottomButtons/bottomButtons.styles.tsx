import styled from "styled-components"

const Container = styled.div`
  display: flex;
  height: 80px;
  padding: 0px 50px;
  justify-content: space-between;
  align-items: flex-end;
  align-self: stretch;
`

const ButtonBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`

const Styled_Button = styled.button`
  display: flex;
  padding: 12.5px 18px 11.5px 18px;
  justify-content: center;
  align-items: center;
  border-radius: 999px;
  border: 1px solid var(--Light-Grey, #eee);
  background: var(--White, #fff);
`

const ButtonText = styled.p`
  color: var(--Green, #34554a);
  text-align: center;
  font-family: Strawford;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 14px; /* 100% */
  letter-spacing: 0.3px;
`

const Publish_buttom = styled.div`
  display: flex;
  width: 80px;
  height: 38px;
  padding: 18.25px 18px 19.75px 18px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 999px;
  background: var(--Green-Disabled, #d7e2df);
`

const Publish_button_text = styled.p`
  color: var(--White, #fff);
  leading-trim: both;
  text-edge: cap;
  font-family: Strawford;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 25.5px; /* 182.143% */
  letter-spacing: 0.3px;
`
export {
  Container,
  ButtonBox,
  Styled_Button,
  ButtonText,
  Publish_buttom,
  Publish_button_text,
}
