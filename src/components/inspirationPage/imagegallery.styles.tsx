import styled from "styled-components";
import Image from "next/image";

export const MainContainer = styled.div`
  display: flex;
  padding: 21px 0px 20px 0px;
  align-items: center;
`;

export const ImageDiv = styled.div`
  height: 252px;
  width: 230px;
  object-fit: cover;
  object-position: center;
  border-radius: 6px;
  position: relative;
  cursor: pointer;
  margin-bottom: 25px;

  @media screen and (max-width: 576px) {
    height: 165px;
    width: 165px;
  }
  @media screen and (max-width: 768px) {
    height: 165px;
    width: 165px;
  }
  @media screen and (max-width: 992px) {
    height: 165px;
    width: 165px;
  }
`;

export const SortButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 20px;
`;

export const SortButton = styled.button`
  display: inline-flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  background-color: rgb(244, 240, 236);
  color: rgb(58, 58, 58);
  border: none;
  /* border: 1px solid rgb(222, 222, 222); */
  padding: 12px 18px;
  max-height: 45px;
  width: auto;
  height: auto;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: 0.3px;
  border-radius: 99px;
  cursor: pointer;
`;

export const MainOverlayDiv = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  height: 252px;
  width: 230px;
  background: rgba(58, 58, 58, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  -webkit-box-pack: justify;
  border-radius: 6px;
  padding: 15px;
  @media screen and (max-width: 576px) {
    height: 165px;
    width: 165px;
  }
  @media screen and (max-width: 768px) {
    height: 165px;
    width: 165px;
  }
  @media screen and (max-width: 992px) {
    height: 165px;
    width: 165px;
  }
`;

export const ContentDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const LeftContentDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentVisibleDiv = styled.div`
  position: absolute;
  width: 230px;
  height: 252px;
  left: 0px;
  top: 0px;
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
    font-weight: bold;
  }

  @media screen and (max-width: 576px) {
    height: 165px;
    width: 165px;
  }
  @media screen and (max-width: 768px) {
    height: 165px;
    width: 165px;
  }
  @media screen and (max-width: 992px) {
    height: 165px;
    width: 165px;
  }
`;

export const ContentText = styled.p`
  color: #fff;
  font-size: 17px;
  line-height: 17px;
  font-weight: bold;
  margin-left: 3px;
`;

export const BagIconContainer = styled.div`
  position: absolute;
  top: 11%;
  right: 7%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LikeButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const LikeOverlay = styled.button`
  border: none;
  background: none;
  stroke: white;

  &:hover {
    stroke: black;
    cursor: pointer;
    height: 25px;
    width: 25px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const GalleryImage = styled(Image)`
  border-radius: 6px;
  @media screen and (max-width: 576px) {
    height: 165px;
    width: 165px;
  }
  @media screen and (max-width: 768px) {
    height: 165px;
    width: 165px;
  }
  @media screen and (max-width: 992px) {
    height: 165px;
    width: 165px;
  }
`;

export const AvtarImage = styled(Image)`
  color: rgb(255, 255, 255);
  border-radius: 50%;
  object-fit: cover;
`;
