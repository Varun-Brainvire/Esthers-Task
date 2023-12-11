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
  CreateAccountDiv,
  CreateAccountH1,
  CustomSelect,
  DropDownAndInputDiv,
  FormDiv,
  HeroDiv,
  SelectDiv,
  SelectWrapper,
  SocailMediaText,
  SocialMediaDiv,
  WelcomeDiv,
} from "./step2.styles";
import { InputDiv, InputField } from "@/components/Forms/Form.styles";
import { Country, State, City } from "country-state-city";
import data from "../../../icons.json"
import Router , {useRouter}  from 'next/router';

interface types {
    label:string;
    value:number
}

interface icons{
    name:string;
    icons:string
}
const Step2 = () => {
  const [toggleClick, setToggleClick] = useState({});
  const router = useRouter();
  console.log(router.query);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setToggleClick({
      [name]: value,
    });
  };

  const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
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
      overflow:"hidden",
      display:"inline-block",
      "&:hover": {
        backgroundColor: "#e0e0e0;",
        color: "black",
      },
    }),
  };

  const [active, setActive] = useState(false);
  const [countryOptions, setCountryOptions] = useState<types[]>([]);
  const [countrySelected, setCountrySelected] = useState<string>();
  const [icons,setIcons] = useState<icons[]>()
  const [iconsSelected,setIconsSelected] = useState<string>()
//   console.log(active);

  useEffect(() => {
    if (Country.getAllCountries()) {
      let country = Country.getAllCountries();
    //   console.log(country);
      let arr: types[] = [];
      country?.map((items:any) => {
        // console.log( items.name)
        return arr.push({ label: items?.name, value: items?.isoCode });
      });
    //   console.log(arr)
      setCountryOptions(arr);
    }
  }, [Country]);


  useEffect(() => {
    if(data){
        let dataArray:icons[] = []
        data.map((icons) => {
            return dataArray.push({name:icons.name,icons:icons.icons})
        })
        setIcons(dataArray)
    }
  },[])
//   console.log(countryOptions,"CountryOptions")

console.log(data,"data")
  return (
    <>
      <ElementBox forText={false} forStep2={true}>
        <HeroDiv>
          <CreateAccountDiv>
            <CreateAccountH1>Create Account</CreateAccountH1>
          </CreateAccountDiv>
          <WelcomeDiv>
            Welcome! Let's create your Esther's account and get you approved as
            a creator
          </WelcomeDiv>
        </HeroDiv>
        <form action="">
          <FormDiv>
            <InputDiv forStep2={true}>
              <InputField forStep2={true} disabled value={router.query.email}/>
            </InputDiv>

            <InputDiv forStep2={true}>
              <InputField forStep2={true} disabled value={router.query.name} border={true}/>
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
                        console.log(item, "item.label");
                        setCountrySelected(item)
                    }}
                  />
                </SelectWrapper>
              </SelectDiv>
            </InputDiv>

            {/* <InputDiv>
              <SelectDiv className="iconDiv">
                <SelectWrapper className="selectWrapper">
                  <CustomSelect
                  styles={customStyles}
                    className="customSelect"
                    name="icons"
                    id="icons"
                    placeholder=""
                    options={icons}
                    value={iconsSelected}
                    onChange={(item: any) => {
                        let event = {
                          target: { name: "icons", value: item },
                        };
                        console.log(item, "item.label");
                        setIconsSelected(item)
                    }}
                  />
                </SelectWrapper>
              </SelectDiv>
            </InputDiv> */}
            {/* <InputDiv>
                <SocailMediaText>Main social media channel</SocailMediaText>
            </InputDiv> */}
          </FormDiv>
        </form>
      </ElementBox>
    </>
  );
};

export default Step2;
