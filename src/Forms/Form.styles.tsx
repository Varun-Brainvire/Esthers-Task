import Link from "next/link";
import styled from "styled-components";
import { Formik, ErrorMessage, Field } from "formik";
import { Props } from "@/components/Buttons/Buttons.styles";
import colors from "@/theme";

export const InputDiv = styled.div<Props>`
  margin-bottom: 10px;
  width: ${({ forStep2 }) => (forStep2 ? "38%" : "")};
  margin-left: ${({ forStep2 }) => (forStep2 ? "auto" : "")};
  margin-right: ${({ forStep2 }) => (forStep2 ? "auto" : "")};
`;

export const InputField = styled.input<Props>`
  background-color: ${({ forStep2 }) => (forStep2 ? "#eeeeee" : "white")};
  padding: 10px 16px;
  width: 100%;
  border: 1px solid rgb(238, 238, 238);
  border-radius: 3px;
  font-style: inherit;
  font-variant: inherit;
  font-weight: inherit;
  font-stretch: inherit;
  line-height: inherit;
  font-family: inherit;
  font-optical-sizing: inherit;
  font-kerning: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  font-size: 14px;
  padding-right: 35px;
  box-sizing: border-box;
`;

export const OuterPasswordDiv = styled.div`
  position: relative;
`;

export const InnerPasswordDiv = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  line-height: 0;
  cursor: pointer;
`;

export const FieldSetDiv = styled.div`
  margin-bottom: 10px;
  width: 100%;
`;

export const CreateAccountButton = styled.button`
  display: inline-flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  background-color: ${colors.color.green};
  color: ${colors.color.white};
  border: 1px solid transparent;
  padding: 12px 18px;
  max-height: 45px;
  width: 95%;
  height: auto;
  font-size: 14px;
  font-weight: 500;
  font-family: Inter, sans-serif;
  line-height: 1;
  transition: all 0.3s ease 0s;
  letter-spacing: 0.3px;
  border-radius: 99px;
  cursor: pointer;
  &:hover {
    cursor: pointer;
    background-color: ${colors.color.green};
    color: ${colors.color.white};
    border-color: transparent;
    box-shadow: rgba(52, 85, 74, 0.25) 0px 0px 0px 3px;
    transition: background-color 0.2s ease 0s, color 0.2s ease 0s;
  }
`;

export const AggrementTextDiv = styled.div`
  margin-top: 20px;
  text-align: center;
`;

export const AggrementText = styled.small`
  display: block;
  font-size: 14px;
  color: #3a3a3a;
`;

export const LineDiv = styled.div`
  background-color: #eeeeee;
  width: 100%;
  height: 1px;
  margin: 20px 0px;
`;

export const AlreadyAccountDiv = styled.div`
  margin-bottom: 10px;
  text-align: center;
`;

export const AlreadyAccounText = styled.p`
  /* font-family: Strawford, Inter, sans-serif; */
  margin: 0px;
  color: rgb(58, 58, 58);
  font-size: 14px;
  font-weight: 500;
`;

export const StyledLink = styled(Link)`
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  background-color: rgb(242, 244, 244);
  color: rgb(58, 58, 58);
  border: 1px solid transparent;
  padding: 12px 18px;
  max-height: 45px;
  width: 89%;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  line-height: 1;
  transition: background-color 0.2s ease 0s, color 0.2s ease 0s;
  /* font-family: Strawford; */
  border-radius: 99px;
`;

export const ErrorDiv = styled.div`
  margin-top: 3px;
  color: #e36b4f;
  font-size: 12px;
  text-align: left;
`;
