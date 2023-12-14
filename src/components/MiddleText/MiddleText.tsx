import React from "react";
import { Button, ElementBox } from "../Buttons/Buttons.styles";
import { Circle, CircleContainer, CircleWrapper, Li, MainCircleDiv, Span, Ul } from "./MiddleText.styles";
import fb from "../../../public/fb.svg";
import { useRouter } from "next/router";

interface Props {
  buttonClick: Object;
  setButtonClick: React.Dispatch<React.SetStateAction<any>>;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const MiddleText = ({buttonClick,setButtonClick,active,setActive}: Props) => {
console.log(buttonClick,"buttonClick")
const router = useRouter();
  return (
    <>
      <ElementBox forText={true}>
        <Ul>
          {active ? (
            <>
              <Li>Unlock premium content, unique offers and extra features</Li>
              <Li>Get inspired and interact with your favorite creators</Li>
              <Li>Curated and shoppable home inspiration - for free</Li>
            </>
          ) : (
            <>
              <Li>
                Build your own profile, tag content with the product links and
                share with your followers
              </Li>
              <Li>
                Get access to collaboration, unique creator offers and your own
                affilitate shop{" "}
              </Li>
              <Li>Start earning money on your style today - for free </Li>
            </>
          )}
        </Ul>
      </ElementBox>
{buttonClick.hasOwnProperty("Join as a creator") ?(
  <ElementBox>
        <MainCircleDiv>
          <CircleContainer>
            <CircleWrapper>
            <Circle>1</Circle>
            </CircleWrapper>
          </CircleContainer>
          <CircleContainer>
            <CircleWrapper>
            <Circle background={true} color={true}>2</Circle>
            </CircleWrapper>
          </CircleContainer>
        </MainCircleDiv>
      </ElementBox>
) : ("")}
      

      <ElementBox>
        <Button>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              fill="#FFFFFF"
            >
              <g data-name="Filter 16x16">
                <path
                  fill="rgba(0,0,0,0)"
                  d="M0 0h20v20H0z"
                  data-name="Rectangle 297"
                ></path>
                <path d="M13.357 3.989H15V1.127A21.219 21.219 0 0 0 12.607 1c-2.369 0-3.994 1.49-3.994 4.229V7.75H6v3.2h2.613V19h3.206v-8.05h2.509l.4-3.2h-2.909v-2.2c0-.925.25-1.558 1.538-1.558Z"></path>
              </g>
            </svg>
          </div>
          <Span>
            Register with Facebook
          </Span>
        </Button>
      </ElementBox>

      <Button googleButton={true}>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="20px"
            fill="#3A3A3A"
          >
            <g data-name="Filter 16x16">
              <path
                fill="rgba(0,0,0,0)"
                d="M0 0h20v20H0z"
                data-name="Rectangle 297"
              ></path>
              <path
                fill="#fbbb00"
                d="M6.324 12.065 5.8 14.014l-1.908.04a7.513 7.513 0 0 1-.055-7l1.7.311.744 1.689a4.476 4.476 0 0 0 .042 3.014Z"
                data-name="Path 14700"
              ></path>
              <path
                fill="#518ef8"
                d="M17.869 9.099a7.5 7.5 0 0 1-2.674 7.25l-2.14-.109-.3-1.891a4.47 4.47 0 0 0 1.923-2.283h-4.01V9.099h7.2Z"
                data-name="Path 14701"
              ></path>
              <path
                fill="#28b446"
                d="M15.195 16.349a7.5 7.5 0 0 1-11.3-2.294l2.431-1.99a4.46 4.46 0 0 0 6.428 2.284Z"
                data-name="Path 14702"
              ></path>
              <path
                fill="#f14336"
                d="m15.288 4.727-2.43 1.989a4.46 4.46 0 0 0-6.575 2.335l-2.443-2a7.5 7.5 0 0 1 11.448-2.324Z"
                data-name="Path 14703"
              ></path>
            </g>
          </svg>
        </div>
        <Span >
          Register with Google
        </Span>
      </Button>
    </>
  );
};

export default MiddleText;
