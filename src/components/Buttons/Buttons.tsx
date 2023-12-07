import { useState } from "react";
import {
  BothButtonDiv,
  ButtonsDiv,
  Container,
  ElementBox,
  Inputs,
  Label,
  MainButtonDiv,
} from "./Buttons.styles";

interface Props {
  buttonClick: string;
  setButtonClick: React.Dispatch<React.SetStateAction<any>>;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Buttons = ({ buttonClick, setButtonClick, active, setActive }: Props) => {
  const handleChange = (e: React.ClickEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // console.log(value)
    setButtonClick({
      [name]: value,
    });
  };
//   console.log(buttonClick, "buttonClick");

//   const [active, setActive] = useState(false);
//   console.log(active, "active");
  return (
    <ElementBox className="element box">
      <Container className="">
        <ButtonsDiv>
          <MainButtonDiv>
            <BothButtonDiv isActive={active}>
              <Inputs
                type="radio"
                id="Join as a member"
                value="register"
                onClick={(e:React.ClickEvent<HTMLInputElement>) => {
                  handleChange(e);
                  setActive(!active);
                }}
                name="Join as a member"
              />
              <Label htmlFor="join as member" isActive={active}>
                Join as a Member
              </Label>
            </BothButtonDiv>
            <BothButtonDiv isActive={!active}>
              <Inputs
                type="radio"
                id="Join as a creator"
                value="creator"
                onClick={(e:React.ClickEvent<HTMLInputElement>) => {
                  handleChange(e);
                  setActive(!active);
                }}
                name="Join as a creator"
              />
              <Label htmlFor="join as creator" isActive={!active}>
                Join as a Creator
              </Label>
            </BothButtonDiv>
          </MainButtonDiv>
        </ButtonsDiv>
      </Container>
    </ElementBox>
  );
};

export default Buttons;
