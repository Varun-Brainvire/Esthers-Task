import styled from "styled-components";
import Select from "react-select";
import { Props } from "../Buttons/Buttons.styles";
import colors from "@/theme";

export const HeroDiv = styled.div`
  padding: 30px;
  background-color: ${colors.color.white};
`;
export const CreateAccountDiv = styled.div`
  padding-top: 60px;
  margin: 0px auto;
  max-width: 640px;
  text-align: center;
`;

export const CreateAccountH1 = styled.h1`
  font-size: 24px;
  font-weight: 550;
  color: #34554a;
  line-height: 1.25;
  overflow-wrap: break-word;
`;

export const WelcomeDiv = styled.div`
  margin: 10px auto 0px;
  font-size: 14px;
  text-align: center;
`;

export const FormDiv = styled.div`
  margin-left: auto;
  margin-right: auto;
  height: auto;
  width: 100%;
  background-color: ${colors.color.white};
  align-items: center;
  justify-content: center;
`;

export const CustomSelect = styled(Select)<Props>`
  border: none;
  color: black;
  background: #f7d0cb;
  border-radius: 4px;
  font-family: Strawford, "Lexend Deca", Inter, sans-serif;
  font-size: 14px;
  flex: ${({ flex }) => (flex ? "0 0 30%" : "")};
`;

export const SelectWrapper = styled.div`
  width: 100%;
`;

export const SelectDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;

export const SocailMediaText = styled.p`
  font-size: 14px;
  margin: 5px 0px;
`;
export const DropDownAndInputDiv = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: row;
`;

export const SocialMediaDiv = styled.div`
  margin-bottom: 15px;
`;
export const SelectAndInputDiv = styled.div`
  display: flex;
  gap: 10px;
`;

export const RadioQuestions = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 10px;
`;

export const RadioWrapper = styled.div`
  display: flex;
`

export const SingleRadio = styled.div`
  display: flex;
  align-items: center;
  height: 25px;
  position: relative;
  width: calc(50%); 
`
export const RadioInput = styled.input`
  /* opacity: 1;
  z-index: 1; */
  border-radius: 99%;
  width: 20px;
  height: 20px;
  cursor: pointer;
`
export const RadioLabel = styled.label`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 99px;
  background: white;
  border: 1.5px solid #eeeeee;
  cursor: pointer;

  &::after{
    content: "";
    display: block;
    border-radius: 99px;
    width: 8px;
    height: 8px;
    margin: 5px;
    box-shadow: rgba(0, 0, 0, 0.1) 1px 3px 3px 1px;
    background: white;
  }
`
export const RadioP = styled.p`
  font-weight: 400;
  font-size: 16px;
  overflow-wrap: break-word;
  margin-left: 10px;
`

export const CheckboxDiv = styled.div`  
  display: flex;
`

export const Checkbox = styled.input`
  height: 17px;
  width: 17px;
`

export const CheckBoxP = styled.p`
  font-weight: 400;
  font-size: 14px;
  overflow-wrap: break-word;
  margin-left: 15px;
`