import React from "react"
import Image from "next/image"
import styled from "styled-components"
import Icon_goBack from "../../public/Images/Icon - Go back ( Left caret ) (2).png"
import Icon_union from "../../public/Images/Union 111 (2).png"

const TopNavigation = styled.div`
  display: flex;
  height: 23px;
  padding: 0px 50px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  align-self: stretch;
`

const TopNavigationIcon = ({ Icon }: any) => {
  return <Image src={Icon} alt=""></Image>
}

const TopNavigationText = styled.div`
  color: #000;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`

const TopNavigationEarpper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`
export default function TopNavigationBar() {
  return (
    <>
      <TopNavigation>
        <TopNavigationEarpper>
          <TopNavigationIcon Icon={Icon_goBack}></TopNavigationIcon>
          <TopNavigationText>Create image post</TopNavigationText>
          <TopNavigationIcon Icon={Icon_union}></TopNavigationIcon>
        </TopNavigationEarpper>
      </TopNavigation>
    </>
  )
}
