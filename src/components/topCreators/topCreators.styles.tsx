import styled from "styled-components";

interface CarouselContainerProps {
  screen?: boolean;
}

export const CarouselContainer = styled.div<CarouselContainerProps>`
  padding: 2% 12% 3% 12%;
  background-color: rgb(244, 240, 236);

  @media (max-width: 375px) {
    padding: ${({ screen }) => (screen ? "2% 6% 2% 6%" : "2% 12% 2% 12%")};
  }
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
  margin-right: 10px;

  @media (max-width: 375px) {
    width: 100px;
    height: 100px;
  }
`;

export const ImageText = styled.div<CarouselContainerProps>`
  p {
    text-align: center;
    font-family: Strawford, "Lexend Deca", Inter, sans-serif;

    @media (max-width: 375px) {
      font-size: ${({ screen }) => (screen ? "10px" : "")};
    }
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

  @media (max-width: 375px) {
    display: none;
  }
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

export const SearchInputField = styled.input<{
  isOpen?: boolean;
  screen?: boolean;
}>`
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

  @media (max-width: 375px) {
    width: ${(props) =>
      props.isOpen ? (props.screen ? "113px" : "250px") : "72px"};
  }
`;

export const WrapperDiv = styled.div`
  display: flex;
  align-items: center;
`;
