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
  A,
  CreateAccountButton,
  ErrorDiv,
  InputDiv,
  InputField,
  LineDiv,
} from "@/components/Forms/Form.styles";
import { Country, State, City } from "country-state-city";
import data from "../../../icons.json";
import Router, { useRouter } from "next/router";
import Select, { components } from "react-select";
import { Formik, ErrorMessage, Field } from "formik";
import * as Yup from "yup";

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
  const [submitting,setSubmitting] = useState(false)
  const router = useRouter();

  const { Option } = components;

  const IconOption = (props: any) => (
    <Option {...props}>
      <img
        src={props.data.icons}
        style={{ width: 20 }}
        alt={props.data.label}
      />
    </Option>
  );

  const handleTabChange = (e: any) => {
    const { name, value } = e.target;
    setToggleClick({
      [name]: value,
    });
  };

  const validationSchema = Yup.object().shape({
    firstname: Yup.string()
      .required("Please enter your first name"),
      lastname: Yup.string()
      .required("Please enter your last name"),
      Companyname: Yup.string()
      .required("Please enter your company name"),
      website: Yup.string()
      .required("Please enter your website"),
      country:Yup.object().required("Please Select Country"),
      socialmedia:Yup.string()
      .required("Please enter social media username"),
      retailcollaboration:Yup.string().required("Please select if you are interested in retail collaborations"),
      agree:Yup.boolean().oneOf(
        [true],
        "Please accept the terms and conditions"
      ),
      socialmediaradio:Yup.string().required("Please select your consent for social media")
  });



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
      // color: state.isSelected ? "white" : "black",
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
  const [selecteOption, setSelectedOption] = useState("");

  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };

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
        <Formik
    initialValues={{
      firstname:"",
      lastname:"",
      country:"",
      socialmedia:"",
      retailcollaboration:"",
      agree:false,
      socialmediaradio:"",
      Companyname:"",
      website:""
    }}
    validationSchema={validationSchema}
    onSubmit={(values) => {
      
    }}
    handleSubmit = {(values:any) => {
      
    }}
    >
{({values,
        errors,
        touched,
        handleSubmit,
        isSubmitting,
        isValidating,
        isValid,
        handleChange,
        setFieldValue,}) => {
          return(
            <form action="" onSubmit={handleSubmit}>
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
                          onClick={(e) => {
                            handleTabChange(e);
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
                          checked
                          onClick={(e) => {
                            handleTabChange(e);
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
                  placeholder={`${
                    toggleClick.creator ? "First name *" : "Company name *"
                  }`}
                  type="text"
                  name={`${
                    toggleClick.creator ? "firstname" : "Companyname"
                  }`}
                  onChange={handleChange}
                />
                {toggleClick.creator ?
                <ErrorDiv>{errors.firstname}</ErrorDiv>
                :
                <ErrorDiv>{errors.Companyname}</ErrorDiv>
                }
              </InputDiv>

              <InputDiv forStep2={true}>
                <InputField
                  forStep2={false}
                  placeholder={`${
                    toggleClick.creator ? "Last name *" : "website *"
                  }`}
                  type="text"
                  name={`${
                    toggleClick.creator ? "lastname" : "website"
                  }`}
                  onChange={handleChange}
                />
                {toggleClick.creator ?
                <ErrorDiv>{errors.firstname}</ErrorDiv>
                :
                <ErrorDiv>{errors.website}</ErrorDiv>
                }
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
                        setCountrySelected(item);
                        handleChange(event)
                      }}
                    />
                    <ErrorDiv>{errors.country}</ErrorDiv>
                  </SelectWrapper>
                </SelectDiv>
              </InputDiv>
              {toggleClick.creator ? (
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
                      onChange={(item: any) => {
                        let event = {
                          target: { name: "icons", value: item.icons },
                        };
                        setIconsSelected(item.name);
                      }}
                    />
                    <InputField placeholder="Social media username *" name="socialmedia" onChange={handleChange}/>
                  </SelectAndInputDiv>
                    <ErrorDiv>{errors.socialmedia}</ErrorDiv>
                </SocialMediaDiv>
              ) : (
                ""
              )}
            </FormDiv>

            <RadioQuestions>
              I am interested in retail collaborations
            </RadioQuestions>

            <ElementBox>
              <RadioWrapper>
                <SingleRadio>
                  <RadioInput
                    type="radio"
                    onChange={onValueChange,handleChange}
                    value="yes"
                    name="retailcollaboration"
                  />
                  {/* <RadioLabel></RadioLabel> */}
                  <RadioP>Yes</RadioP>
                </SingleRadio>
                <SingleRadio>
                  <RadioInput
                    type="radio"
                    onChange={onValueChange,handleChange}
                    value="no"
                    name="retailcollaboration"
                  />
                  {/* <RadioLabel></RadioLabel> */}
                  <RadioP>No</RadioP>
                </SingleRadio>
              </RadioWrapper>
                <ErrorDiv>{errors.retailcollaboration}</ErrorDiv>
            </ElementBox>

            <RadioQuestions>
              I approve sharing my content on social media
            </RadioQuestions>

            <ElementBox>
              <RadioWrapper>
                <SingleRadio>
                  <RadioInput
                    type="radio"
                    onChange={onValueChange,handleChange}
                    value="yes"
                    name="socialmediaradio"
                  />
                  {/* <RadioLabel></RadioLabel> */}
                  <RadioP>Yes</RadioP>
                </SingleRadio>
                <SingleRadio>
                  <RadioInput
                    type="radio"
                    onChange={onValueChange,handleChange}
                    value="no"
                    name="socialmediaradio"
                  />
                  {/* <RadioLabel></RadioLabel> */}
                  <RadioP>No</RadioP>
                </SingleRadio>
              </RadioWrapper>
              <ErrorDiv>{errors.socialmediaradio}</ErrorDiv>
            </ElementBox>

            <LineDiv></LineDiv>

            <CheckboxDiv>
              <Checkbox type="checkbox" name="agree" onChange={handleChange}/>
              <CheckBoxP>
                I agree to Esther's scandinavia AB's <A>terms of service</A> 
              </CheckBoxP>
            </CheckboxDiv>
              <ErrorDiv>{errors.agree}</ErrorDiv>

            <CreateAccountButton 
            type="submit" onClick={() => {
              handleSubmit
              setSubmitting(true)
              if(submitting == true) {
                // alert("Form Submitted")
                router.push({
                  pathname:"/signup/verification",
                  query:{q:router.query.email}
                })
              }
            }}
            forStep2={true}>Apply</CreateAccountButton>
          </form>
          )
        }}
    </Formik>
         
        </div>
      </ElementBox>
    </>
  );
};

export default Step2;
