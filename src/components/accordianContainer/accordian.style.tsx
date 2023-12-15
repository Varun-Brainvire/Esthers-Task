import styled from "styled-components";

export const AccordianMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  background: #fff;
`;

export const InnerAccordian = styled.div`
  display: flex;
  width: 80%;
  padding: 50px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  background: #fff;
`;
export const AccordianHeading = styled.span`
  color: #3a3a3a;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const AccordianFirst = styled.div<{ isBackground: boolean }>`
  display: flex;
  padding: 40px 0px 40px 65px;
  flex-direction: column;
  align-self: stretch;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  background-color: ${(props) => (props.isBackground ? "#F4F0EC" : "white")};
`;
