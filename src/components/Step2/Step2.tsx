"use client";

import React, { useEffect, useState } from "react";
import {
  BothButtonDiv,
  ButtonsDiv,
  Container,
  ElementBox,
  Inputs,
  Label,
  MainButtonDiv,
} from "../Buttons/Buttons.styles";
import {
  CheckBoxP,
  Checkbox,
  CheckboxDiv,
  CreateAccountDiv,
  CreateAccountH1,
  CustomSelect,
  DropDownAndInputDiv,
  FormDiv,
  HeroDiv,
  RadioInput,
  RadioLabel,
  RadioP,
  RadioQuestions,
  RadioWrapper,
  SelectAndInputDiv,
  SelectDiv,
  SelectWrapper,
  SingleRadio,
  SocailMediaText,
  SocialMediaDiv,
  WelcomeDiv,
} from "./step2.styles";
import {
  CreateAccountButton,
  InputDiv,
  InputField,
  LineDiv,
} from "@/components/Forms/Form.styles";
import { Country, State, City } from "country-state-city";
import data from "../../../icons.json";
import Router, { useRouter } from "next/router";
import Select , { components } from "react-select";

interface types {
  label: string;
  value: number;
}

interface icons {
  name: string;
  icons: string;
}

const Step2 = () => {
  const [toggleClick, setToggleClick] = useState({});
  const router = useRouter();

  const { Option } = components;

  const IconOption = (props:any) => (
    <Option {...props}>
      <img
        src={props.data.icons}
        style={{ width: 20 }}
        alt={props.data.label}
      />
      {/* {props.data.label} */}
    </Option>
  );
  

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setToggleClick({
      [name]: value,
    });
  };

  const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      outline: "#eeeeee solid 1px",
      "&:hover": {
        border: "1px solid #313131",
      },
      "&:active": {
        border: "1px solid #313131",
      },
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#e0e0e0" : "white",
      color: state.isSelected ? "white" : "black",
      overflow: "hidden",
      display: "inline-block",
      family: "Strawford,Lexend Deca, Inter, sans-serif",
      FontFace: "14px",
      "&:hover": {
        backgroundColor: "#e0e0e0;",
        color: "black",
      },
    }),
  };

  const [active, setActive] = useState(false);
  const [countryOptions, setCountryOptions] = useState<types[]>([]);
  const [countrySelected, setCountrySelected] = useState<string>();
  const [icons, setIcons] = useState<icons[]>([]);
  const [iconsSelected, setIconsSelected] = useState<any>();

  useEffect(() => {
    if (Country.getAllCountries()) {
      let country = Country.getAllCountries();
      let arr: types[] = [];
      country?.map((items: any) => {
        return arr.push({ label: items?.name, value: items?.isoCode });
      });
      setCountryOptions(arr);
    }
  }, [Country]);

  useEffect(() => {
    if (data) {
      let dataArray: icons[] = [];
      data.map((icons) => {
        return dataArray.push({ name: icons.value, icons: icons.icons });
      });
      setIcons(dataArray);
    }
  }, []);
// console.log(icons,"icons")
// console.log(iconsSelected,"iconsSelected")
  const [selecteOption, setSelectedOption] = useState("");

  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };
  // console.log(selecteOption);
  return (
    <>
      <ElementBox forText={false} forStep2={true}>
        <HeroDiv>
          <CreateAccountDiv>
            <CreateAccountH1>Create account</CreateAccountH1>
          </CreateAccountDiv>
          <WelcomeDiv>
            Welcome! Let's create your Esther's account and get you approved as
            a creator
          </WelcomeDiv>
        </HeroDiv>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <form action="">
            <FormDiv>
              <InputDiv forStep2={true}>
                <InputField
                  forStep2={true}
                  disabled
                  value={router.query.email}
                />
              </InputDiv>

              <InputDiv forStep2={true}>
                <InputField
                  forStep2={true}
                  disabled
                  value={router.query.name}
                  border={true}
                />
              </InputDiv>

              <ElementBox forText={true}>
                <Container>
                  <ButtonsDiv>
                    <MainButtonDiv>
                      <BothButtonDiv forStep2={true} isActive={active}>
                        <Inputs
                          name="creator"
                          type="radio"
                          id="creator"
                          value="creator"
                          onClick={() => {
                            handleChange;
                            setActive(!active);
                          }}
                        />
                        <Label isActive={active}>Creator</Label>
                      </BothButtonDiv>
                    </MainButtonDiv>
                  </ButtonsDiv>
                </Container>
                <Container>
                  <ButtonsDiv>
                    <MainButtonDiv>
                      <BothButtonDiv forStep2={true} isActive={!active}>
                        <Inputs
                          name="brand"
                          type="radio"
                          id="brand"
                          value="brand"
                          onClick={() => {
                            handleChange;
                            setActive(!active);
                          }}
                        />
                        <Label isActive={!active}>Brand</Label>
                      </BothButtonDiv>
                    </MainButtonDiv>
                  </ButtonsDiv>
                </Container>
              </ElementBox>

              <InputDiv forStep2={true}>
                <InputField
                  forStep2={false}
                  placeholder="First name *"
                  type="text"
                />
              </InputDiv>

              <InputDiv forStep2={true}>
                <InputField
                  forStep2={false}
                  placeholder="Last name *"
                  type="text"
                />
              </InputDiv>

              <InputDiv>
                <SelectDiv className="iconDiv">
                  <SelectWrapper className="selectWrapper">
                    <CustomSelect
                      styles={customStyles}
                      className="customSelect"
                      name="country"
                      id="country"
                      placeholder="Select Country *"
                      options={countryOptions}
                      value={countrySelected}
                      onChange={(item: any) => {
                        let event = {
                          target: { name: "country", value: item },
                        };
                        // console.log(item, "item.label");
                        setCountrySelected(item);
                      }}
                    />
                  </SelectWrapper>
                </SelectDiv>
              </InputDiv>

              <SocialMediaDiv>
                <SocailMediaText>Main social media channel</SocailMediaText>
                <SelectAndInputDiv>
                  <CustomSelect
                    name="icons"
                    id="icons"
                    options={data}
                    defaultValue={data[0]}
                    value={iconsSelected}
                    flex={true}
                    styles={customStyles}
                    components={{ Option: IconOption }}
                    onChange={(item:any) => {
                      let event= {
                        target:{name:"icons",value:item.icons}
                      }
                      console.log(item, "item.label");
                      setIconsSelected(item.name)
                    }}
                  />
                  <InputField placeholder="Social media username *" />
                </SelectAndInputDiv>
              </SocialMediaDiv>
            </FormDiv>

            <RadioQuestions>
              I am interested in retail collaborations
            </RadioQuestions>

            <ElementBox>
              <RadioWrapper>
                <SingleRadio>
                  <RadioInput
                    type="radio"
                    onChange={onValueChange}
                    value="yes"
                  />
                  {/* <RadioLabel></RadioLabel> */}
                  <RadioP>Yes</RadioP>
                </SingleRadio>
                <SingleRadio>
                  <RadioInput
                    type="radio"
                    onChange={onValueChange}
                    value="no"
                  />
                  {/* <RadioLabel></RadioLabel> */}
                  <RadioP>No</RadioP>
                </SingleRadio>
              </RadioWrapper>
            </ElementBox>

            <RadioQuestions>
              I approve sharing my content on social media
            </RadioQuestions>

            <ElementBox>
              <RadioWrapper>
                <SingleRadio>
                  <RadioInput
                    type="radio"
                    onChange={onValueChange}
                    value="yes"
                  />
                  {/* <RadioLabel></RadioLabel> */}
                  <RadioP>Yes</RadioP>
                </SingleRadio>
                <SingleRadio>
                  <RadioInput
                    type="radio"
                    onChange={onValueChange}
                    value="no"
                  />
                  {/* <RadioLabel></RadioLabel> */}
                  <RadioP>No</RadioP>
                </SingleRadio>
              </RadioWrapper>
            </ElementBox>

            <LineDiv></LineDiv>

            <CheckboxDiv>
              <Checkbox type="checkbox" />
              <CheckBoxP>
                I agree to Esther's scandinavia AB's terms of service
              </CheckBoxP>
            </CheckboxDiv>

            <CreateAccountButton forStep2={true}>Apply</CreateAccountButton>
            {/* <div>
                        <button><span>Apply</span></button>
                      </div> */}
          </form>
        </div>
      </ElementBox>
    </>
  );
};

export default Step2;
