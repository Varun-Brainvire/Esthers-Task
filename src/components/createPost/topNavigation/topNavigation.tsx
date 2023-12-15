import React from "react"
import styled from "styled-components"
import {
  Box,
  Container,
  ImageWrapper,
  Mobile_Container,
  Text,
} from "./topNavigation.styles"
import Icon_goback from "../../../../public/Images/Icon - Go back ( Left caret ) (2).png"
import Icon_union from "../../../../public/Images/Union 111 (3).png"
export default function TopNavigation({ label }: { label: string }) {
  return (
    <Container>
      <Box>
        <ImageWrapper icon={Icon_goback} />
        <Text>{label}</Text>
        <ImageWrapper icon={Icon_union} />
      </Box>
    </Container>
  )
}

function Mobile_TopNavigation({ label }: { label: string }) {
  return (
    <Mobile_Container>
      <Box>
        <ImageWrapper icon={Icon_goback} />
        <div>{label}</div>
        <ImageWrapper icon={Icon_union} />
      </Box>
    </Mobile_Container>
  )
}

export { Mobile_TopNavigation }
