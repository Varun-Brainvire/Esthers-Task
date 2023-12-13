import styled from "styled-components";
import { Props } from "../Buttons/Buttons.styles";

export const Ul = styled.div`
    
`
export const Li = styled.li`
font-size: 14px;
text-align: left;
line-height: 18px;
margin-bottom: 6px;
`
export const MainCircleDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const CircleContainer = styled.div`
    position: relative;
    cursor: pointer;
`
export const CircleWrapper = styled.div`
    position: relative;
    padding: 0px 20px;
`

export const Circle = styled.div<Props>`
    height: 40px;
    width: 40px;
    border-radius: 999px;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    font-size: 14px;
    /* font-family: Strawford; */
    background-color: ${({background}) => background ?"#f2f4f4":"#34554a"};
    color:  ${({color}) => color ?"black":"white"};
`