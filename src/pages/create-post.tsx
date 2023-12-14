import styled, { createGlobalStyle } from "styled-components"
import {
  CreatePostContainer,
  // Col,
  ContainerPost,
  // Container,
  // Row,
  // ImageUploadCol,
  CreatePostRow,
} from "../Grid/index"

import NavBar from "../create-post-component.tsx/NavBar"
import FlotingMenu from "../create-post-component.tsx/FlotingMenu"
import PostWrapper, {
  useGetPost,
} from "../create-post-component.tsx/PostContext"
import Image from "next/image"
import { useState } from "react"
import Box2Container from "@/create-post-component.tsx/Box2Container"

import { Container, Row, Col } from "../components/index"

//nexted layoiut

import type { ReactElement } from "react"
import NestedLayout from "../components/NestedLayout"
import type { NextPageWithLayout } from "./_app"
import { Conatiner } from "@/create-post-component.tsx/BottomButton.styles"
import {
  MainConatinerRow,
  MainContainer,
  MainContainerCol,
  MainContainerCol2,
  Box,
  Box1_Wrapper,
  ImageUploadCol,
} from "@/components/createPost/mainContainer/mainContainer.styles"
import TopNavigation, {
  Mobile_TopNavigation,
} from "@/components/createPost/topNavigation/topNavigation"
import StepButtons from "@/components/createPost/stepButtons/stepButtons"
import BottomButtons from "@/components/createPost/bottomButtons/bottomButtons"
const Section = styled.div`
  background-color: #f4f0ec;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 576px) {
    height: auto; /* Adjust as needed for mobile layout */
  }
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

  /* & > div:first-child {
    background-color: yellow;
  } */
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

// const Section = styled.section`
//   /* height: calc(676px); */
//   height: 100%;
//   background-color: #f4f0ec;
//   margin: 10px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   /* flex-wrap: wrap; */
//   padding: 10px;
// `
// function Home() {
//   const [images, setImages] = useState<any>([])
//   const handelChange = (e: any) => {
//     for (const file of e.target.files) {
//       const reader = new FileReader()
//       reader.readAsDataURL(file)
//       reader.onload = () => {
//         setImages((imgs: any) => [...imgs, reader.result])
//       }
//       reader.onerror = () => {
//         console.log(reader.error)
//       }
//     }
//   }
//   return (
//     <PostWrapper>
//       <NavBar />
//       <Frame>
//         <CreatePostContainer>
//           <CreatePostRow>
//             <ImageUploadCol>
//               {images.length > 0 && (
//                 <ImageWrapper>
//                   {images?.map((link: any) => (
//                     <Image
//                       width={400}
//                       height={500}
//                       object-fit="contain"
//                       key={link}
//                       src={link}
//                       alt="sc"
//                     />
//                   ))}
//                 </ImageWrapper>
//               )}
//               <Box1>
//                 <FlotingMenu
//                   handelChange={handelChange}
//                   label="Click to upload or drag and drop"
//                 ></FlotingMenu>
//                 <FlotingMenu label="Choose from Instagram"></FlotingMenu>
//               </Box1>
//             </ImageUploadCol>
//             <Col>
//               <Box2Container />
//             </Col>
//           </CreatePostRow>
//         </CreatePostContainer>
//       </Frame>
//     </PostWrapper>
//   )
// }

const Page: NextPageWithLayout = () => {
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
    <Section>
      {/* <Mobile_TopNavigation label="salm ahayak" /> */}
      <MainContainer>
        <MainConatinerRow>
          <MainContainerCol col={6} xs={12} xl={6}>
            <ImageUploadCol>
              {images.length > 0 && (
                <ImageWrapper>
                  {images?.map((link: any) => (
                    <Image
                      width={300}
                      height={400}
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
          </MainContainerCol>
          <MainContainerCol2 col={6} xs={12} xl={6}>
            <Box>
              <Box1_Wrapper>
                <TopNavigation label="Create Image Post "></TopNavigation>
                <StepButtons />
              </Box1_Wrapper>
              <BottomButtons />
            </Box>
          </MainContainerCol2>
        </MainConatinerRow>
      </MainContainer>
    </Section>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <NestedLayout>{page}</NestedLayout>
}

export default Page

{
  /* <Container style={{ border: "1px solid black", height: "80%" }}>
  <Row style={{ border: "1px solid black", height: "100%" }}>
    <Col
      style={{ border: "1px solid black", height: "100%" }}
      col={6}
      xs={12}
      xl={6}
    >
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
    </Col>
    <Col
      style={{ border: "1px solid black", height: "100%" }}
      col={6}
      xs={12}
      xl={6}
    >
      <div style={{ height: "300px" }}>hey</div>
    </Col>
  </Row>
</Container> */
}
