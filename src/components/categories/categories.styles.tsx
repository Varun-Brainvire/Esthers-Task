import Image from "next/image";
import styled from "styled-components";

interface CategoriesProp {
  height?: boolean;
}

export const CategoriesContainer = styled.div`
  padding: 2% 12% 4% 12%;
`;

export const InnerCategoryContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
`;

export const ImageOverlayContainer = styled.div`
  position: relative;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
`;

export const StyledImage = styled(Image)`

  width: 100%;
  border-radius: 10px;
`;

export const OverlayBackground = styled.div<CategoriesProp>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${(props) => (props.height ? "235px" : "189px")};
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
`;

export const OverlayText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  width: 100%;
`;
