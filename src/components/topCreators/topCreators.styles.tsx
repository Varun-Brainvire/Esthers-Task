import styled from "styled-components";

export const CarouselContainer = styled.div`
  padding: 2% 12% 2% 12%;
  background-color: rgb(244, 240, 236);
`;

export const InnerContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  overflow: hidden;
`;

export const ImageWrapper = styled.div<{ translateX: number }>`
  display: flex;
  transition: transform 0.5s ease;
  transform: translateX(${(props) => props.translateX}px);
`;

export const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CarouselImageDiv = styled.div`
  margin: 10px;
`;

export const ImageText = styled.div`
  p {
    text-align: center;
  }
`;

export const ArrowDiv = styled.div`
  border-radius: 9999px;
  background: #fff;
  display: flex;
  width: 32px;
  height: 32px;
  padding: 6px 8px;
  justify-content: center;
  align-items: center;
  margin: 6px;
`;

export const ArrowWrapper = styled.div`
  display: flex;
`;

export const SearchContainer = styled.div`
  position: relative;
`;

export const SearchIcon = styled.div<{ isVisible: boolean }>`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 2;
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  height: 15px;
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  visibility: hidden;
  transition: visibility 0.3s ease;
`;

export const SearchInputField = styled.input<{ isOpen: boolean }>`
  width: ${(props) => (props.isOpen ? "250px" : "72px")};
  padding: 10px;
  border: none;
  outline: none;
  transition: width 0.3s ease, background-color 0.3s ease,
    border-radius 0.3s ease;
  background-color: ${(props) => (props.isOpen ? "#fff" : "transparent")};
  border-radius: ${(props) => (props.isOpen ? "50px" : "0")};
  color: #fff;
  font-size: 12px;
  margin-left: 25px;
  font-weight: 600;

  &:focus + ${CloseButton} {
    visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  }
`;

export const WrapperDiv = styled.div`
  display: flex;
  align-items: center;
`;
