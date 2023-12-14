import * as React from "react"
import styled from "styled-components"
import profile2 from "../../public/Images/profile2.png"
import Image from "next/image"

const Text = styled.p`
  color: var(--Green, #34554a);
  font-family: Strawford;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`
function NavBar() {
  return (
    <Headercontainer>
      <Box>
        <Box2>
          <Img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/90fd881281f3a9a49d3d0af066aa5ec219c8c6060e6151e70fd24c83d25d4cfb?"
          />
          <Pagesnavbar>
            <Div>
              <Text>Inspiration</Text>
            </Div>
            <Div>
              <Text>DIY</Text>
            </Div>
            <Div>
              <Text>Blogg</Text>
            </Div>
          </Pagesnavbar>
        </Box2>
        <Box3>
          <Img2
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f27f8f8980c3c900ab538cbce7f93521dcf117480e2312a80678a83a8a613ff6?"
          />
          <Img3
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e9f0b9627df8bc39de3f5e450b73d430d37680ba807022c4e768e490bee0493f?"
          />
          <Img4
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/39c019d33c3dff0f404bb1ccd5908acc408acf9ef8f27af04033620d9e6c084a?"
          />
          <Img5 src={profile2} loading="lazy" alt={""} srcSet="..." />
          <Img6
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/291c67b6a5bcde7b433f4b1b8fb11efc6b8eee79654860ae5afced95a858ddef?"
          />
        </Box3>
      </Box>
    </Headercontainer>
  )
}

const Headercontainer = styled.div`
  justify-content: center;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 7px 53px;

  background: #fff;
  @media (max-width: 991px) {
    padding: 0 20px;
  }

  @media (width < 991px) {
    display: none;
  }
`

const Box = styled.div`
  justify-content: space-between;
  display: flex;
  width: 100%;
  gap: 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`

const Box2 = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 0 12px 6px 0;
`

const Img = styled.img`
  aspect-ratio: 0.89;
  object-fit: contain;
  object-position: center;
  width: 32px;
  overflow: hidden;
  max-width: 100%;
`

const Pagesnavbar = styled.div`
  align-self: center;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin: auto 0;
  @media (max-width: 991px) {
    justify-content: center;
  }
`

const Div = styled.div`
  color: var(--Green, #34554a);
  white-space: nowrap;

  @media (max-width: 991px) {
    white-space: initial;
  }
`

const Div2 = styled.div`
  color: var(--Green, #34554a);
`

const Box3 = styled.div`
  align-self: center;
  display: flex;
  gap: 12px;
  margin: auto 0;
  @media (max-width: 991px) {
    justify-content: center;
  }
`

const Img2 = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 38px;
  overflow: hidden;
  max-width: 100%;
`

const Img3 = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 38px;
  overflow: hidden;
  max-width: 100%;
`

const Img4 = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 38px;
  overflow: hidden;
  max-width: 100%;
`

const Img5 = styled(Image)<{ srcSet: any }>`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 38px;
  overflow: hidden;
  max-width: 100%;
  border-radius: 20px;
`

const Img6 = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 38px;
  overflow: hidden;
  max-width: 100%;
`

export default NavBar
