import styled from "styled-components";
import Image from "next/image";

export const MainContainer = styled.div`
  display: flex;
  padding: 21px 0px 20px 0px;
  align-items: center;
`;
export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PostCardDiv = styled.div`
  height: 252px;
  max-width: 252px;
  object-fit: cover;
  object-position: center;
  border-radius: 6px;
  position: relative;
  cursor: pointer;
  margin-bottom: 8px;

  @media screen and (max-width: 576px) {
    height: 165px;
    width: 165px;
  }
  @media screen and (max-width: 768px) {
    height: 165px;
    width: 165px;
  }
  @media screen and (max-width: 992px) {
    width: 165px;
    width: 165px;
  }
`;

export const SortButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 20px;
  margin-top: -25px;
  @media screen and (max-width: 576px) {
    margin-left: 14px;
    justify-content: flex-start;
  }
  @media screen and (max-width: 768px) {
    margin-left: 14px;
    justify-content: flex-start;
  }
  @media screen and (max-width: 992px) {
    margin-left: 14px;
    justify-content: flex-start;
  }
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
  width: 252px;
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
  position: absolute;
  top: 4%;
  left: 3%;
`;

export const ContentVisibleDiv = styled.div`
  position: absolute;
  max-width: 252px;
  height: 252px;
  right: 0px;
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
    font-weight: 500;
  }

  @media screen and (max-width: 576px) {
    height: 165px;
    width: 165px;
  }
  @media screen and (max-width: 768px) {
    height: 165px;
    width: 165px;
  }
`;

export const ContentText = styled.p`
  color: #fff;
  font-size: 14px;
  line-height: 17px;
  font-weight: 500;
  margin-left: 3px;
`;

export const BagIconContainer = styled.div`
  position: absolute;
  top: 1%;
  right: 3%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  height: 32px;
  width: 32px;
`;

export const LikeButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  bottom: 3%;
  right: 1%;
`;
export const LikeOverlay = styled.button`
  border: none;
  background: none;
  stroke: white;
  padding: 7px;
  &:hover {
    -webkit-box-align: center;
    -webkit-box-pack: center;
    stroke: black;
    cursor: pointer;
    height: 32px;
    width: 32px;
    min-width: 32px;
    min-height: 32px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const PostImage = styled(Image)`
  border-radius: 6px;

  @media screen and (max-width: 576px) {
    height: 165px;
    width: 165px;
  }
  @media screen and (max-width: 768px) {
    height: 165px;
    width: 165px;
  }
`;

export const AvtarImage = styled(Image)`
  color: rgb(255, 255, 255);
  border-radius: 50%;
  object-fit: cover;
  height: 32px;
  width: 32px;

  @media screen and (max-width: 576px) {
    height: 24px;
    width: 24px;
    opacity: 1;
  }
  @media screen and (max-width: 768px) {
    height: 24px;
    width: 24px;
  }
  @media screen and (max-width: 992px) {
    height: 24px;
    width: 24px;
  }
`;
