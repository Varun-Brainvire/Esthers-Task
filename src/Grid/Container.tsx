import styled from "styled-components"
import { media, Container as sbgContainer } from "styled-bootstrap-grid"
import { styledTheme } from "../create-post-component.tsx/theme"
export const Container = styled(sbgContainer)`
  padding-left: 0px;
  padding-right: 0px;
  height: calc(666px);
  max-width: 100%;
  background-color: #f4f0ec;

  ${media.xs`
    padding-right: 8px;
    padding-left: 8px;
  `}
  ${media.sm`
    padding-right: 12px;
    padding-left: 12px;
  `}
  ${media.md`
    padding-right: 18px;
    padding-left: 18px;
  `}
  ${media.lg`
    padding-right: 48px;
    padding-left: 48px;
  `}
  ${media.xl`
    padding-right: 48px;
    padding-left: 48px;
  `}
`

export const ContainerPost = styled(sbgContainer)`
  padding-left: 0px;
  padding-right: 0px;
  max-width: 1600px;

  //1
  ${media.xs`
      padding: 0px 8px 0px 8px;
      /* width: calc(100% - (100% - 350px)); */
      width: calc(100%);
    `}
  //2
    ${media.sm`
      padding-right: 12px;
      padding-left: 12px;
      width: calc(100% - (100% - 570px));
    `}
    //3
    ${media.md`
      padding-right: 18px;
      padding-left: 18px;
      width: calc(100% - (100% - 940px));
    `}
    //4
    ${media.lg`
      padding-right: 18px;
      padding-left: 18px;
      width: calc(100% - (100% - 1016px));
      //width: calc(100% - (100% - 1200px));
    `}
    //4
    ${media.xl`
      padding-right: 48px;
      padding-left: 48px;
      /* width: calc(100% - (100% - 1406px)); */
      width: calc(100% - (100% - 1320px));
    `}
`

export const ContainerProduct = styled(sbgContainer)`
  padding-left: 0px;
  padding-right: 0px;
  max-width: 1600px;
  //1
  ${media.xs`
      padding: 0px 8px 0px 8px;
      /* width: calc(100% - (100% - 350px)); */
      width: calc(100%);
    `}
  //2 => 576px
    ${media.sm`
      padding-right: 12px;
      padding-left: 12px;
      width: calc(100% - (100% - 678px));
    `}
    //3 => 992px
    ${media.md`
      padding-right: 18px;
      padding-left: 18px;
      width: calc(100% - (100% - 1016px));
    `}
    //4 => 1200px
    ${media.lg`
      padding-right: 18px;
      padding-left: 18px;
      width: calc(100% - (100% - 1016px));
    `}
    //5 => 1440px
    ${media.xl`
      padding-right: 48px;
      padding-left: 48px;
      width: calc(100% - (100% - 1320px));
    `}
`

export const ContainerAdjust = styled(ContainerPost)`
  padding-left: 0px;
  padding-right: 0px;
  max-width: 1600px;

  ${media.xs`
    padding-right: 16px;
    padding-left: 16px;
  `}
  ${media.sm`
    padding-right: 20px;
    padding-left: 20px;
  `}
  ${media.md`
    padding-right: 26px;
    padding-left: 26px;
  `}
  ${media.lg`
    //padding-right: 56px;
    //padding-left: 56px;
  `}
  ${media.xl`
    padding-right: 56px;
    padding-left: 56px;
  `}
`

export const CreatePostContainer = styled(sbgContainer)`
  padding-left: 0px;
  padding-right: 0px;
  height: calc(666px);
  max-width: 100%;
  background-color: ${styledTheme.MainContainerColor};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${media.xs`
    padding-right: 16px;
    padding-left: 16px;
  `}
  ${media.sm`
    padding-right: 20px;
    padding-left: 20px;
  `} 
  ${media.md`
    padding-right: 26px;
    padding-left: 26px;
  `}
   ${media.lg`
    //padding-right: 56px;
    //padding-left: 56px;
  `} 
  ${media.xl`
    padding-right: 56px;
    padding-left: 56px;
  `};
`
