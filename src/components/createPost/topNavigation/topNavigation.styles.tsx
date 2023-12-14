import Image from "next/image"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  height: 23px;
  padding: 0px 50px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  align-self: stretch;
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
const ImageWrapper = ({ icon }: { icon: any }) => {
  return (
    <ImageContainer>
      <Image alt=" " src={icon}></Image>
    </ImageContainer>
  )
}

export { Box, Container, ImageWrapper }
