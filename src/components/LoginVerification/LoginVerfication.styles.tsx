import colors from "@/theme";
import styled from "styled-components";

export const P = styled.p`
    font-weight: 400;
    font-size: 14px;
    color: ${colors.color.grey};
    text-align: left;
`
export const VerificationButton = styled.button`
    background-color: ${colors.color.green};
    color: ${colors.color.white};
    margin-top: 30px;
    font-weight: 600;
    font-size: 14px;
    padding: 10px 22px;
    border-radius: 3px;
    border: none;
    &:hover{
        background-color: #34554a;
        opacity: 0.9;
    }
`