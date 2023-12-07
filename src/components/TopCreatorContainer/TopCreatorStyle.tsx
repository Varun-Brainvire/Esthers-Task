import styled from "styled-components";

export const TopMainCreator = styled.div`
  display: flex;
  /* width: 1920px; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: var(--Light-Beige, #f4f0ec);
`;

export const TopInnerCreator = styled.div`
  display: flex;
  padding: 60px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  background: var(--Light-Beige, #f4f0ec);
`;

export const InnerCreator = styled.div`
  display: flex;
  width: 1208px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
`;

export const TopHeader = styled.div`
  display: flex;
  height: 40px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const TopImage = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const MultiImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const ImageName = styled.div`
  display: flex;
  width: 150px;
  height: 150px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.4);
`;
