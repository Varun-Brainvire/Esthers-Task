import styled from "styled-components";
import Image from "next/image";

export const HeadContainer = styled.div`
  display: flex;
  padding: 28px 0px 50px 0px;
  flex-direction: column;
  align-items: center;
  gap: 13px;
`;

export const TitleContainer = styled.h1`
  display: flex;
  justify-content: flex-start;
  color: #3a3a3a;
  font-size: 32px;
  font-style: normal;
  font-weight: bold;
  line-height: 36px;
`;

export const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 576px) {
    background-color: white;
    color: white;
    overflow: hidden;
    overflow-x: scroll;
    overflow-y: hidden;
  }
`;

export const SingleCategoryCard = styled.div`
  width: 252px;
  height: 180px;
  object-fit: cover;
  object-position: center;
  border-radius: 6px;
  background-color: rgba(244, 240, 236, 1);
  position: relative;

  @media screen and (max-width: 576px) {
    height: 130px;
    width: 130px;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const OverlayDiv = styled.div`
  position: absolute;
  width: 252px;
  height: 180px;
  left: 0px;
  top: 0px;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  border-radius: 6px;
  flex-direction: column;

  p {
    /* Style for the text inside OverlayDiv */
    color: white;
    margin: 0;
    font-size: 18px;
    font-weight: 500;
  }

  @media screen and (max-width: 576px) {
    height: 100%;
    width: 100%;
  }
`;

export const OverlayText = styled.span`
  color: white;
  margin: 0px;
  font-size: 32px;
  font-weight: 500;
  line-height: "17px";
`;

export const CategoryImage = styled(Image)`
  border-radius: 6px;
  @media screen and (max-width: 576px) {
    height: 100%;
    width: 100%;
  }
`;
