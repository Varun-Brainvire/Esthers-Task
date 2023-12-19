import styled from "styled-components"

const Conatiner = styled.div`
  display: flex;
  height: 80px;
  padding: 0px 50px;
  justify-content: space-between;
  align-items: flex-end;
  align-self: stretch;

  /* styles for the first div child */
`

const Button = styled.button`
  display: flex;
  padding: 12.5px 18px 11.5px 18px;
  justify-content: center;
  align-items: center;
  border-radius: 999px;
  border: 1px solid var(--Light-Grey, #eee);
  background: var(--White, #fff);
`

const Text = styled.div`
  color: var(--Green, #34554a);
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 14px; /* 100% */
  letter-spacing: 0.3px;
`

const Box1 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`

const Publish_Buttons = styled.div`
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

const Publish_Button_Text = styled.div`
  color: var(--White, #fff);
  font-family: Strawford;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 25.5px; /* 182.143% */
  letter-spacing: 0.3px;
`

export { Conatiner, Button, Text, Box1, Publish_Buttons, Publish_Button_Text }
