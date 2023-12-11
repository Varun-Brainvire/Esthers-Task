import {useState} from "react";
import { LoginDivContainer, LoginMainDiv } from "./LoginDiv.styles";
import Buttons from "../Buttons/Buttons";
import MiddleText from "../MiddleText/MiddleText";
import Form from "@/components/Forms/Form";

const LoginDiv = () => {
  const [buttonClick,setButtonClick] =  useState("")
  const [active, setActive] = useState(false);
  // console.log(buttonClick,"buttonClick from Login div")
  return (
    <LoginDivContainer>
      <LoginMainDiv>
        <Buttons buttonClick={buttonClick} setButtonClick={setButtonClick} active={active} setActive={setActive}/>
        <MiddleText buttonClick={buttonClick}/>
        <Form />
        </LoginMainDiv>
    </LoginDivContainer>
  );
};

export default LoginDiv;
