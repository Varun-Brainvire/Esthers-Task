import {useState} from "react";
import { LoginDivContainer, LoginMainDiv } from "./LoginDiv.styles";
import Buttons from "../Buttons/Buttons";
import MiddleText from "../MiddleText/MiddleText";
import Form from "@/components/Forms/Form";
import { useRouter } from "next/router";

const LoginDiv = () => {
  const [buttonClick,setButtonClick] =  useState("")
  const router = useRouter();
  const [active, setActive] = useState(router.query.type === "register" ? true : false);
  return (
    <LoginDivContainer>
      <LoginMainDiv>
        <Buttons buttonClick={buttonClick} setButtonClick={setButtonClick} active={active} setActive={setActive} type={router.query}/>
        <MiddleText buttonClick={buttonClick} setButtonClick={setButtonClick} active={active} setActive={setActive}/>
        <Form />
        </LoginMainDiv>
    </LoginDivContainer>
  );
};

export default LoginDiv;
