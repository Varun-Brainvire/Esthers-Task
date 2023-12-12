import styled from "styled-components";

export const MidMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(/Images/aboutus_banner.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  /* margin-top: -60px; */
  /* height: calc(100vh - 180px); */
  width: 100%;
  z-index: 100;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const TextDivStyle = styled.div`
  display: flex;
  width: calc(100% - (100% - 1029px));
  /* padding: 0px 306px; */
  padding-right: 56px;
  margin-left: auto;
  padding-left: 56px;
  margin-right: auto;
  margin-top: 140px;

  @media (max-width: 768px) {
    /* display: flex; */
    /* padding: 0px 16px; */
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center; */
    /* gap: 32px; */
    /* align-self: stretch; */
  }
`;

export const TextContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  @media (max-width: 768px) {
    /* height: 50%; */
    /* width: 100%; */
  }
`;

export const ImageDiv = styled.div`
  @media (max-width: 368px) {
    /* height: 10%; */
    /* background-color: red; */
  }
`;

export const JoinButton = styled.button`
  display: flex;
  height: 63px;
  padding: 12.051px 22px 12.533px 22px;
  justify-content: center;
  align-items: center;
  border-radius: 96.41px;
  background: #34554a;
`;
