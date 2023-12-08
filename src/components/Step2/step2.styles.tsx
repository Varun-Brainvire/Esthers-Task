import styled from "styled-components";
import Select from "react-select";

export const HeroDiv = styled.div`
  padding: 30px;
  background-color: white;
`;
export const CreateAccountDiv = styled.div`
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
  background-color: white;
  /* display: flex; */
  align-items: center;
  justify-content: center;
`;

export const CustomSelect = styled(Select)`
  border: none;
  color: black;
  background: #f7d0cb;
  border-radius: 4px;
  font-family: Strawford, "Lexend Deca", Inter, sans-serif;
  font-size: 14px;
  /* box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); */
`;

export const SelectWrapper = styled.div`
  width: 34%;
  /* border: 1px solid black; */
`;

export const SelectDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  /* padding: 5px; */
`;

export const SocialMediaDiv = styled.div`
`
export const SocailMediaText = styled.p`
    font-size: 14px;
    margin: 5px 0px;
`
export const DropDownAndInputDiv = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: row;
`