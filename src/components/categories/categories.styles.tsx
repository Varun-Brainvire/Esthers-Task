import colors from "@/theme";
import Image from "next/image";
import styled from "styled-components";

interface CategoriesProp {
  height?: boolean;
  screen?: boolean;
}

export const CategoriesContainer = styled.div<CategoriesProp>`
  padding: 2% 12% 4% 12%;

  @media (max-width: 768px) {
    padding: ${({ screen }) => (screen ? "2% 6% 2% 6%" : "2% 12% 2% 12%")};
  }
`;

export const InnerCategoryContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
`;

interface StyledImageProps {
  screen?: boolean;
}

export const ImageOverlayContainer = styled.div<StyledImageProps>`
  position: relative;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;

  @media (max-width: 768px) {
    border-radius: ${({ screen }) => (screen ? "0" : "10px")};
  }
`;

export const StyledImage = styled(Image)<StyledImageProps>`
  width: 100%;
  border-radius: 10px;

  @media (max-width: 768px) {
    border-radius: ${({ screen }) => (screen ? "0" : "10px")};
  }
`;

export const OverlayBackground = styled.div<CategoriesProp>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${(props) => (props.height ? "235px" : "189px")};
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;

  @media (max-width: 768px) {
    border-radius: ${({ screen }) => (screen ? "0" : "10px")};
  }
`;

export const OverlayText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${colors.color.white};
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  width: 100%;
  font-family: Strawford, "Lexend Deca", Inter, sans-serif;
`;
