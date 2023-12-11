import React, { useState } from "react";
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

interface CarouselProps {
  images: any[];
}

const TopCreators: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSearch = () => {
    setIsOpen(!isOpen);
  };

  const closeSearch = () => {
    setIsOpen(false);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
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
          {images.map((image, index) => (
            <CarouselImageDiv>
              <Image
                key={index}
                src={image.image}
                alt={`Image ${index + 1}`}
                width={135}
                height={135}
                // width={device.tablet ? 80 : 135}
                // height={device.tablet ? 80 : 135}
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
