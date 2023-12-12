import styled from "styled-components"
import {
  CreatePostContainer,
  Col,
  ContainerPost,
  Container,
  Row,
  ImageUploadCol,
  CreatePostRow,
} from "../Grid/index"
import NavBar from "../create-post-component.tsx/NavBar"
import FlotingMenu from "../create-post-component.tsx/FlotingMenu"
import PostWrapper, {
  useGetPost,
} from "../create-post-component.tsx/PostContext"
import Image from "next/image"
import { useState } from "react"

const Section = styled.div`
  background-color: #f4f0ec;
  flex-grow: 1;
  height: 100%;
`

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Col1 = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  border-radius: 8px 0px 0px 8px;
  background: var(--Form-big-toggle, #f8f8f8);
  overflow-y: scroll;
`
const Box1 = styled.div`
  margin: auto 0;
  display: flex;
  align-items: flex-start;
  display: flex;
  width: 50%;
  height: 60%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background: #fff;

  flex-shrink: 0;
`

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  justify-content: center;
  align-items: center;
  gap: 48px;
  margin-top: 10px;
`

export default function Home() {
  const [images, setImages] = useState<any>([])
  const handelChange = (e: any) => {
    for (const file of e.target.files) {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        setImages((imgs: any) => [...imgs, reader.result])
      }
      reader.onerror = () => {
        console.log(reader.error)
      }
    }
  }
  return (
    <PostWrapper>
      <NavBar />
      <Frame>
        <CreatePostContainer>
          <CreatePostRow>
            <ImageUploadCol>
              {images.length > 0 && (
                <ImageWrapper>
                  {images?.map((link: any) => (
                    <Image
                      width={400}
                      height={500}
                      object-fit="contain"
                      key={link}
                      src={link}
                      alt="sc"
                    />
                  ))}
                </ImageWrapper>
              )}
              <Box1>
                <FlotingMenu
                  handelChange={handelChange}
                  label="Click to upload or drag and drop"
                ></FlotingMenu>
                <FlotingMenu label="Choose from Instagram"></FlotingMenu>
              </Box1>
            </ImageUploadCol>
            <Col></Col>
          </CreatePostRow>
        </CreatePostContainer>
      </Frame>
    </PostWrapper>
  )
}
