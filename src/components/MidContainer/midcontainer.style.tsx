import Image from "next/image";
import styled from "styled-components";

interface BannerProps {
  marginRight?: boolean;
}

export const BannerContainer = styled.div`
  position: relative;
`;

interface BannerImageProps {
  screen?: boolean;
}

export const BannerImage = styled(Image)<BannerImageProps>`
  width: 100%;
  height: 50%;

  @media (max-width: 768px) {
    height: ${({ screen }) => (screen ? "300px" : "auto")};
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Text = styled.div<BannerImageProps>`
  /* color: #fff; */

  font-family: Strawford;
  font-size: 50px;
  font-style: normal;
  font-weight: 500;
  line-height: 60px;
  padding: 0 4%;
  text-align: center;
  padding: 2% 27%;

  @media (max-width: 768px) {
    font-size: ${({ screen }) => (screen ? "20px" : "80px")};
    line-height: ${({ screen }) => (screen ? "23px" : "78px")};
  }
`;

export const BannerButtonDiv = styled.div`
  display: flex;
`;

export const SingleBannerButton = styled.div<BannerProps>`
  margin-right: ${(props) => (props.marginRight ? "10px" : "0")};
`;
