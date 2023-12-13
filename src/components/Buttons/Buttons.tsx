import { useEffect, useState } from "react";
import {
  BothButtonDiv,
  ButtonsDiv,
  Container,
  ElementBox,
  Inputs,
  Label,
  MainButtonDiv,
} from "./Buttons.styles";
import { useRouter } from "next/router";

interface Props {
  buttonClick: string;
  setButtonClick: React.Dispatch<React.SetStateAction<any>>;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  type:string
}

const Buttons = ({ buttonClick, setButtonClick, active, setActive ,type}: Props) => {
  // console.log(active)

  useEffect(() => {
    window. scrollTo(0, 0)
  })

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setButtonClick({
      [name]: value,
    });
  };

  const router = useRouter();
  return (
    <ElementBox forText={false}>
      <Container className="">
        <ButtonsDiv>
          <MainButtonDiv>
            {router.query.type === 'register' ?setActive(true):""}
            <BothButtonDiv isActive={active}>
              <Inputs
                type="radio"
                id="Join as a member"
                value="register"
                onClick={(e:any) => {
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
                onClick={(e:any) => {
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
