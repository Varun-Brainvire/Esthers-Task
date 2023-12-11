import styled from "styled-components"
import { media, Col as sbgCol } from "styled-bootstrap-grid"

export const Col = styled(sbgCol)`
  padding-left: 12px;
  padding-right: 12px;
  background-color: white;
  /* border: 1px solid black; */
  ${media.xs`
    padding-right: 8px;
    padding-left: 8px;
  `}
  ${media.sm`
    padding-right: 8px;
    padding-left: 8px;
  `}
    ${media.md`
    padding-right: 8px;
    padding-left: 8px;
  `}
  ${media.lg`
    padding-right: 8px;
    padding-left: 8px;
  `}
  ${media.xl`
    padding-right: 8px;
    padding-left: 8px;
  `}
`

export const ImageUploadCol = styled(sbgCol)`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
  gap: 20px;
  border-radius: 8px 0px 0px 8px;
  background: var(--Form-big-toggle, #f8f8f8);
  ::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
`

export const ArticleDetailCol = styled(sbgCol)`
  ${media.xs`
    padding : 8px;
  `}
  ${media.sm`
    padding : 8px;
  `}
    ${media.md`
    padding : 25px;
  `}
  ${media.lg`
    padding : 30px;
  `}
  ${media.xl`
    padding : 40px;
  `}
  border: 1px solid #EEEEEE;
  padding: 25px;
  @media screen and (max-width: 767px) {
    border: 0px;
  }
`
