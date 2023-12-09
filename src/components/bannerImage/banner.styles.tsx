import Image from "next/image";
import styled from "styled-components";

interface BannerProps {
  marginRight?: boolean;
}

export const BannerContainer = styled.div`
  position: relative;
`;

export const BannerImage = styled(Image)`
  width: 100%;
  height: auto;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 99%;
  background: rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Text = styled.div`
  color: #fff;
  font-size: 80px;
  font-weight: 600;
  padding: 0 4%;
  line-height: 78px;
  text-align: center;
`;

export const BannerButtonDiv = styled.div`
  display: flex;
`;

export const SingleBannerButton = styled.div<BannerProps>`
  margin-right: ${(props) => (props.marginRight ? "10px" : "0")};
`;
