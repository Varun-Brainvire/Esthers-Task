import styled from "styled-components";

export interface Props {
  googleButton?: boolean;
  isActive?: boolean;
  forText?: boolean;
  forStep2?: boolean;
  background?: boolean;
  color?: boolean;
  border?: boolean;
  flex?: boolean;
  forVerification?: boolean;
  forCircle?: boolean;
}

export const ButtonsDiv = styled.div`
  display: flex;
  /* background-color: yellowgreen; */
  justify-content: space-around;
`;

export const BothButtonDiv = styled.div<Props>`
  min-width: ${({ forStep2 }) => (forStep2 ? "237px" : "254px")};
  padding: 10px;
  position: relative;
  text-align: center;
  width: 50%;
  /* background-color: rgb(244, 240, 236); */
  background-color: ${({ isActive }) => (isActive ? "white" : "#f4f0ec")};

  @media only screen and (max-width: 376px) {
    min-width: 140px;
  }

  @media only screen and (max-width: 426px) {
    min-width: 140px;
  }

  @media only screen and (min-width: 768px) {
    min-width: 254px;
  }
`;
