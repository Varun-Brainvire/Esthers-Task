import Image from "next/image"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  /* height: 23px; */
  padding: 0px 50px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  align-self: stretch;

  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  background-color: white;

  @media screen and (width <= 576px) {
    /* width: 100%; */
    /* display: none; */
  }

  @media screen and (max-width: 991px) {
    position: fixed;
    top: 0px;
    left: 0px;
    padding: 20px;
    width: 100%;
    /* border: 1px solid black; */
  }
`

const Mobile_Container = styled.div`
  display: flex;
  height: 23px;
  padding: 0px 50px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  align-self: stretch;

  @media screen and (max-width: 991px) <style> .ltnT {
    position: fixed;
    top: 0px;
    left: 0px;
    padding: 20px;
  }
`
const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`

const ImageContainer = styled.div`
  display: flex;
  width: 13px;
  align-items: center;
  gap: 74px;
`

const Text = styled.p`
  margin: 0px;
  font-size: 18px;
  font-weight: 500;
  font-variant: bold;
`
const ImageWrapper = ({ icon }: { icon: any }) => {
  return (
    <ImageContainer>
      <Image alt=" " src={icon}></Image>
    </ImageContainer>
  )
}

export { Box, Container, ImageWrapper, Mobile_Container, Text }
