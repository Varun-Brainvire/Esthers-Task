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
  const router = useRouter();
  console.log(active,"active",router.query.type)

  useEffect(() => {
    window. scrollTo(0, 0)
  })

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setButtonClick({
      [name]: value,
    });
  };

  
  return (
    <ElementBox forText={false}>
      <Container className="">
        <ButtonsDiv>
          <MainButtonDiv>
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
                Join as a member
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
                Join as a creator
              </Label>
            </BothButtonDiv>
          </MainButtonDiv>
        </ButtonsDiv>
      </Container>
    </ElementBox>
  );
};

export default Buttons;
