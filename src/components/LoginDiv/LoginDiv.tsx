import {useState} from "react";
import { LoginDivContainer, LoginMainDiv } from "./LoginDiv.styles";
import Buttons from "../Buttons/Buttons";
import MiddleText from "../MiddleText/MiddleText";
import Form from "@/Forms/Form";

const LoginDiv = () => {
  const [buttonClick,setButtonClick] =  useState("")
  const [active, setActive] = useState(false);
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
