import styled from "styled-components"

const Container = styled.div`
  display: flex;
  height: 80px;
  width: 100%;
  /* padding: 0px 50px; */
  justify-content: space-between;
  align-items: flex-end;
  align-self: stretch;

  @media screen and (width < 911px) {
    display: none;
  }

  @media screen and (width < 911px) {
    padding: 0;
  }

  @media screen and (max-width: 991px) {
    padding: 15px;
  }
  @media screen and (max-width: 991px) {
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: rgb(221, 221, 221) 0px 0px 10px;
    width: 250px;
    height: 66px;
    border-radius: 100px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    position: fixed;
    bottom: 15px;
    margin: auto;
    left: 0px;
    right: 0px;
  }
`

const ButtonBox = styled.div<{ label?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  @media (width < 576px) {
    opacity: 0.6;
    cursor: not-allowed;
  }
  /* background-color: ${(props) =>
    props.label === "call to action" ? "rgb(52, 85, 74)" : ""};
  color: ${(props) =>
    props.label === "Apply to be Creator" ? "white" : ""}; */
`

const Styled_Button = styled.button<{ label: string }>`
  display: flex;
  padding: 12.5px 18px 11.5px 18px;
  justify-content: center;
  align-items: center;
  border-radius: 999px;
  border: 1px solid var(--Light-Grey, #eee);
  background: var(--White, #fff);

  background-color: ${(props) =>
    props.label === "Apply to be Creator" ? "#34554a" : "initial"};
`

const ButtonText = styled.p<{ label: string }>`
  color: var(--Green, #34554a);
  text-align: center;
  font-family: Strawford;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 14px; /* 100% */
  letter-spacing: 0.3px;

  color: ${(props) => (props.label === "Apply to be Creator" ? "white" : "")};
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

const MobileWrapper = styled.div`
  @media (width > 576px) {
    display: none;
    width: 100%;
  }
`

const Wrapper = styled.div`
  @media (width <= 576px) {
    display: none;
    width: 100%;
  }
`
export {
  Container,
  ButtonBox,
  Styled_Button,
  ButtonText,
  Publish_buttom,
  Publish_button_text,
  Wrapper,
  MobileWrapper,
}
