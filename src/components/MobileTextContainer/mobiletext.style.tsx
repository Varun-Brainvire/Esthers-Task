import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 606px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  align-self: stretch;
  background: #fff;
`;

export const MobileDiv = styled.div`
  width: 565.5px;
  height: 674.038px;
`;

export const TextDiv = styled.div`
  display: flex;
  padding: 30% 10%;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 32px;
  flex: 1 0 0;
  align-self: stretch;
`;

export const MobileImage = styled(Image)`
  width: 100%;
  /* margin-top: -125px; */
`;
