import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIosNew,
} from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";

import {
  ArrowDiv,
  ArrowWrapper,
  CarouselContainer,
  CarouselImageDiv,
  CloseButton,
  HeadingWrapper,
  ImageText,
  ImageWrapper,
  InnerContainer,
  SearchContainer,
  SearchIcon,
  SearchInputField,
  WrapperDiv,
} from "./topCreators.styles";
import HeadingText from "../headingComponent/HeadingText";
import { device, deviceSize } from "@/device";

const isWindowDefined = typeof window !== "undefined";

const isTabletScreen = () => {
  return isWindowDefined ? window.innerWidth <= 768 : false;
};

interface CarouselProps {
  data: any[];
}

const TopCreators: React.FC<CarouselProps> = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isTablet, setIsTablet] = useState(isTabletScreen());

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(isTabletScreen());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSearch = () => {
    setIsOpen(!isOpen);
  };

  const closeSearch = () => {
    setIsOpen(false);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  return (
    <CarouselContainer screen={true}>
      <InnerContainer>
        <HeadingWrapper>
          <HeadingText text={"Top Creators"} />

          <WrapperDiv>
            <SearchContainer onClick={toggleSearch}>
              <SearchIcon isVisible={!isOpen}>
                <BiSearch />
              </SearchIcon>
              <SearchInputField
                isOpen={isOpen}
                placeholder="Search..."
                screen={true}
              />
              <CloseButton onClick={closeSearch}>
                <FaTimes />
              </CloseButton>
            </SearchContainer>

            <ArrowWrapper>
              <ArrowDiv>
                <MdOutlineArrowBackIosNew onClick={handlePrev} />
              </ArrowDiv>
              <ArrowDiv>
                <MdOutlineArrowForwardIos onClick={handleNext} />
              </ArrowDiv>
            </ArrowWrapper>
          </WrapperDiv>
        </HeadingWrapper>
        <ImageWrapper translateX={-currentIndex * 100}>
          {data?.map((image, index) => (
            <CarouselImageDiv>
              <Image
                key={index}
                src={image.image}
                alt={`Image ${index + 1}`}
                width={!isTablet ? 135 : 80}
                height={!isTablet ? 135 : 80}
              />
              <ImageText screen={true}>
                <p>{image.text}</p>
              </ImageText>
            </CarouselImageDiv>
          ))}
        </ImageWrapper>
      </InnerContainer>
    </CarouselContainer>
  );
};

export default TopCreators;
